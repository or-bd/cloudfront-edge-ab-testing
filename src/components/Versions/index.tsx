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
    </div>
  );
};

export default Versions;
