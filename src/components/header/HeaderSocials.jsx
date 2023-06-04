import {BsLinkedin , BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
      <div className="header_socials">
        <a
          href="https://www.linkedin.com/in/bappy-sheikh123/"
          target="_blank"
          rel="noreferrer"
        > <BsLinkedin /> </a>
        <a
          href="https://github.com/BappySheikh1"
          target="_blank"
          rel="noreferrer"
        > <BsGithub /> </a>
        <a
          href="https://www.facebook.com/bappy.sheikh.1804/"
          target="_blank"
          rel="noreferrer"
        > <BsFacebook /> </a>
      </div>
    );
};

export default HeaderSocials;