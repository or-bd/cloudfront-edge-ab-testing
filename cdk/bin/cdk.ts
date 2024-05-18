#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';
import { ACCOUNT, REGION } from '../lib/const';

const app = new cdk.App();

new CdkStack(app, 'cloudfront-edge-ab-testing', {
  env: {
    account: ACCOUNT,
    region: REGION,
  }
});
