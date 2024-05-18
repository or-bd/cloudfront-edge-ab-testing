import Flow from '../Flow';
import style from './style.module.css';
import Versions from '../Versions';
import Intro from '../Intro';
import Bio from '../Bio';

const View = () => {
  return (
    <div className={style.container}>
      <Bio/>
      <Intro/>
      <div className={style.demoContainer}>
        <Flow/>
        <Versions/>
      </div>
      <h2 style={{ marginBottom: 0 }}>That's it</h2>
      <p>Keep refresh to see different versions</p>
    </div>
  );
};

export default View;
