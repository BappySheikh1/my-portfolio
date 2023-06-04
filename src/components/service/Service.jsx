import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
    return (
      <>
        <section id="service">
          <h5>What I offer</h5>
          <h2>Services</h2>

          <div className="container service_container">
            {/* Service list back end*/}
            <article className="service">
              <div className="service_head">
                <h3>Backend Development</h3>
              </div>
              <ul className="service_list">
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Create Server From scratch with NodeJS and ExpressJS.</p>
                </li>
               
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Understanding of RESTful API design principles.</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Knowledge of server-side caching,and performance.</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>MongoDB CRUD Operations.</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Enable Data security With JWT(JSON Web Token).</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Work with Environment Variables.</p>
                </li>
                {/* list===== */}
                
              </ul>
            </article>

            {/* Service list front end*/}
            <article className="service">
              <div className="service_head">
                <h3>Frontend Development</h3>
              </div>
              <ul className="service_list">
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>I develop the user interface.</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Web page development.</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Understanding of HTML, CSS, and JavaScript</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Familiarity with browser developer tools</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Understanding of responsive design principles</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Knowledge of cross-browser compatibility issues</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Experience with version control systems such as Git</p>
                </li>
              </ul>
            </article>

            {/* Service list ui/ux*/}
            <article className="service">
              <div className="service_head">
                <h3>UI/UX Design</h3>
              </div>
              <ul className="service_list">
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>
                    Familiarity with design software such as Adobe XD, Figma
                  </p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>
                    Understanding of user-centered design principles and user
                    experience (UX) design
                  </p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>Understanding of responsive design principles</p>
                </li>
                {/* list===== */}
                <li className="service_list-icon">
                  <BiCheck />
                  <p>
                    Knowledge of typography, color theory, and layout principles
                  </p>
                </li>
                {/* list===== */}
              </ul>
            </article>
          </div>
        </section>
      </>
    );
};

export default Service;