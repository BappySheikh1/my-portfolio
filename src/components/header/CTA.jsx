import cv from '../../assets/BappySheikh_Resume.pdf'

const CTA = () => {
  return (
    <>
      <div className="cta">
        <a
          href={cv}
          download
          className="btn"
        >
          View Resume
        </a>
        <a href="#contact" className="btn btn-primary">Let`s Talk</a>
      </div>
    </>
  );
};

export default CTA;
