import './footer.css'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
      <>
        <footer>
          <a href="#" className="footer_logo">
            BSHEIKH
          </a>

          <ul className="parma_link">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonial">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="footer_socials">
            <a
              href="https://www.facebook.com/bappy.sheikh.1804"
              target="_blank "
            >
             <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/bappy.sheikh.1804/"
              target="_blank "
            >
             <FaInstagram />
            </a>
            <a href="https://twitter.com/BappySheikh20" target="_blank ">
             <FaTwitter />
            </a>
          </div>
          <div className="footer_copyright">
            <small>&copy: Bappy MERN DEVELOPER. All rights reserved.</small>
          </div>
        </footer>
      </>
    );
};

export default Footer;