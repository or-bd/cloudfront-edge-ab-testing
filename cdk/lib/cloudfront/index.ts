import { Construct } from 'constructs';
import * as fs from 'node:fs';
import * as cf from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cfOrigins from 'aws-cdk-lib/aws-cloudfront-origins';
import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';

interface IProps {
    bucket: s3.IBucket,
    path: string,
    oai: cf.IOriginAccessIdentity,
}

export class Cloudfront extends Construct {
    public id: string;
    public distribution: cf.Distribution;

    constructor(scope: Construct, id: string, props: IProps) {
        super(scope, id);

        this.id = id;

        const origin = new cfOrigins.S3Origin(props.bucket, {
            originAccessIdentity: props.oai,
            originPath: `/${props.path}`
        });

        this.distribution = new cf.Distribution(this, `${id}-distribution`, {
            comment: id,
            defaultRootObject: 'index.html',
            defaultBehavior: {
                origin,
                compress: true,
                cachePolicy: cf.CachePolicy.CACHING_OPTIMIZED,
                viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
            errorResponses: [
                { httpStatus: 404, responseHttpStatus: 200, responsePagePath: '/index.html', },
            ],
        });

        this.distribution.addBehavior('/testing.js', origin, {
            compress: true,
            cachePolicy: cf.CachePolicy.CACHING_OPTIMIZED,
            viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            functionAssociations: [{
                function: this.createEdgeFunction(),
                eventType: cf.FunctionEventType.VIEWER_REQUEST,
            }],
        });

        new CfnOutput(this, `distribution-${id}-url`, { value: `https://${this.distribution.domainName}`, });
    }

    public createKeyValueStore() {
        const comment = `${this.id}-store`;

        return new cf.KeyValueStore(this, `${this.id}-key-value-store`, {
            keyValueStoreName: `${comment}-${new Date().getTime()}`,
            source: cf.ImportSource.fromAsset('./lib/cloudfront/store.json'),
            comment,
        });
    }

    public createEdgeFunction() {
        const store = this.createKeyValueStore();
        let code = fs.readFileSync('./lib/cloudfront/function.js', 'utf-8').toString();
        code = code.replace('{{keyValueStoreId}}', store.keyValueStoreId);

        return new cf.Function(this, `${this.id}-function`, {
            comment: `${this.id}-function`,
            keyValueStore: {
                stack: store.stack,
                env: store.env,
                node: store.node,
                keyValueStoreArn: store.keyValueStoreArn,
                keyValueStoreId: store.keyValueStoreId,
                keyValueStoreStatus: store.keyValueStoreStatus,
                applyRemovalPolicy: () => store.applyRemovalPolicy(RemovalPolicy.DESTROY)
            },
            code: cf.FunctionCode.fromInline(code)
        });
    }
}
