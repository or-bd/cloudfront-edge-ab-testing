import style from './style.module.css';
import Store from '../../../cdk/lib/cloudfront/store.json';

const Versions = () => {
  return (
    <div className={style.container}>
      <table className={style.styledTable}>
        <thead>
        <tr>
          <th>Version</th>
          <th>Percentage</th>
        </tr>
        </thead>
        <tbody>
        {Store.data.map(({ key, value }) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <p>
        This is 👆 the (real) KeyValueStore as it configured in cloudfront.
      </p>
      <p>So why we're seeing here three versions with total percent above 100%? This is because all the canary versions
        (a, b, c..) are complementary to 100% and the first A/B test is between the stable version and the canary so
        only if the canary "won" we run another test between them.</p>
    </div>
  );
};

export default Versions;
