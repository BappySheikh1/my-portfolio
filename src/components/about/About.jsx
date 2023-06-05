import "./About.css";
import Me from "../../assets/IMG_20230217_094356.jpg";
import { FaReact, } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get to Know</h5>
        <h2 className="about">About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_image">
              <img src={Me} alt="" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaReact className="about_icon" />
                <h5>Frontend</h5>
                <small>15+ Projects</small>
              </article>
              {/* 2 */}
              <article className="about_card">
                <SiMongodb className="about_icon" />
                <h5>Fullstack</h5>
                <small>10+ Project</small>
              </article>
              {/* 3 */}
              <article className="about_card">
                <BsGithub className="about_icon" />
                <h5>Github</h5>
                <small>80+ projects</small>
              </article>
            </div>
            <p>
              Web developer, with extensive knowledge and more than 1 years of
              experience, working in web technologies and delivering quality
              work.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let`s Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
