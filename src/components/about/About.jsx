import "./About.css";
import Me from "../../assets/me.png";
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

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
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>1+ Years Learning</small>
              </article>
              {/* 2 */}
              <article className="about_card">
                <FaUsers className="about_icon" />
                <h5>Client</h5>
                <small>200+ Worldwide</small>
              </article>
              {/* 3 */}
              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              illum doloribus optio totam? Aspernatur eius iure reprehenderit!
              Amet, blanditiis assumenda?
            </p>

            <a href="#contact" className="btn btn-primary">Let`s Talk</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
