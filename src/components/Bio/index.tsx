import style from './style.module.css';

const Bio = () => {
  return (
    <div className={style.container}>
      <a href="https://github.com/or-bd/cloudfront-edge-ab-testing" target="_blank" rel="noopener">
        <img src="/logos/github.svg"/>
        <span>Github</span>
      </a>
      <a href="https://www.linkedin.com/in/or-ben-dahan-81a74ba5" target="_blank" rel="noopener">
        <img src="/logos/linkedin.svg"/>
        <span style={{ color: '#0b66c2' }}>Linkedin</span>
      </a>
    </div>
  );
};

export default Bio;
