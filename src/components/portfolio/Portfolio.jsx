import './portfolio.css';
import project1 from '../../assets/portfolio1.jpg'
import project2 from '../../assets/portfolio2.jpg'
import project3 from '../../assets/portfolio3.jpg'
import project4 from '../../assets/portfolio4.jpg'
import project5 from '../../assets/portfolio5.png'


const Portfolio = () => {
//  const projectData = [
//    {
//      id: 1,
//      image: project1,
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 2,
//      image: project2,
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 3,
//      image: project3,
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 4,
//      image: project4,
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 5,
//      image: project5,
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 6,
//      image: "project6",
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 7,
//      image: "project",
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 8,
//      image: "project1",
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 9,
//      image: "project1",
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 10,
//      image: "project1",
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 11,
//      image: "project1",
//      title: "",
//      github: "",
//      demo: "",
//    },
//    {
//      id: 12,
//      image: "project1",
//      title: "",
//      github: "",
//      demo: "",
//    },
//  ];

    return (
      <>
        <section id="portfolio">
          <h5>My Recent Word</h5>
          <h2 className='gap-btm'>Portfolio</h2>

          <div className="container portfolio_container">
            {/* project-1 */}
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={project1} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio_item-cta">
                <a
                  className="btn"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://www.facebook.com/bappy.sheikh.1804"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
            {/* project-2 */}
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={project2} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio_item-cta">
                <a
                  className="btn"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://www.facebook.com/bappy.sheikh.1804"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
            {/* project-3 */}
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={project3} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio_item-cta">
                <a
                  className="btn"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://www.facebook.com/bappy.sheikh.1804"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
            {/* project-4 */}
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={project4} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio_item-cta">
                <a
                  className="btn"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://www.facebook.com/bappy.sheikh.1804"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
            {/* project-5 */}
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={project5} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio_item-cta">
                <a
                  className="btn"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://www.facebook.com/bappy.sheikh.1804"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </div>
        </section>
      </>
    );
};

export default Portfolio;