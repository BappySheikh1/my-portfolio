import './Experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const Experience = () => {
    return (
      <>
        <section id="experience">
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>

          <div className="container experience_container">
            <div className="experience_frontend">
              <h3>Frontend Development</h3>
              <div className="experience_content">
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>HTML5</h4>
                  <small className="text-light">Experienced</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>CSS3</h4>
                  <small className="text-light">Experienced</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>BootStrap</h4>
                  <small className="text-light">Experienced</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">Experienced</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>ReactJS</h4>
                  <small className="text-light">Experienced</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>TypeScript</h4>
                  <small className="text-light">Intermediate</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>NextJS</h4>
                  <small className="text-light">Intermediate</small>
                </article>
              </div>
            </div>

            {/* Back End */}
            <div className="experience_backend">
              <h3>Backend Development</h3>
              <div className="experience_content">
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>NodeJS</h4>
                  <small className="text-light">Intermediate</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>ExpressJS</h4>
                  <small className="text-light">Intermediate</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </article>
                {/* --------- */}
                <article className="experience_details">
                  <BsPatchCheck />
                  <h4>Mongoose</h4>
                  <small className="text-light">Intermediate</small>
                </article>
                {/* --------- */}
               
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Experience;