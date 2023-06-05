import './portfolio.css';
import project1 from '../../assets/project-pic/bikefair.png'
import project2 from '../../assets/project-pic/travel-next.png'
import project3 from '../../assets//project-pic/wildzy.png'
import project4 from '../../assets/project-pic/doctors_portal.png'
import project5 from '../../assets/project-pic/car_doctor.png'
import project6 from '../../assets/project-pic/Dragon_news.png'
import project7 from '../../assets/project-pic/lernPlus.png'
import project8 from '../../assets/project-pic/domain.com.png'
import project9 from '../../assets/project-pic/maxCoach.png'
import project10 from '../../assets/project-pic/Panda-commerce.png'
import project11 from '../../assets/project-pic/selectFive.png'
import project12 from '../../assets/project-pic/Regular_Club.png'
import project13 from '../../assets/project-pic/donate.today.png'


const Portfolio = () => {
 const projectData = [
   {
     id: 1,
     image: project1,
     title: "Bikefare",
     technology:
       "ReactJS , React Router , Firebase, JavaScript Tailwind CSS, HTML, CSS Node js, Express js, MongoDB, Mamba ui, kitwind.",
     github: "https://github.com/BappySheikh1/bikefare-recell-client",
     demo: "https://assingment12-client.firebaseapp.com/",
   },
   {
     id: 2,
     image: project2,
     title: "Travel Next",
     technology:
       "Next js, Google Auth, JavaScript, Tailwind CSS, HTML, CSS, Mongodb, daisy UI, Mamba UI,",
     github: "https://github.com/BappySheikh1/travel-agency",
     demo: "https://travel-agency-eta.vercel.app/",
   },
   {
     id: 3,
     image: project3,
     title: "Wildzy",
     technology:
       "ReactJS, React Router, Firebase, JavaScript Tailwind CSS, HTML,  CSS Node js, Express js Mongodb, daisy ui, mamba ui.",
     github: "https://github.com/BappySheikh1/service-project-client",
     demo: "https://assignment11-client-3d043.firebaseapp.com/",
   },
   {
     id: 4,
     image: project4,
     title: "Doctor's portal",
     technology:
       "ReactJS,Raw CSS3, Tailwind CSS, daisy ui, React Router,JSON_APIM",
     github: "https://github.com/BappySheikh1/doctors-portal-client",
     demo: "https://doctors-portal-client-75d75.web.app/",
   },
   {
     id: 5,
     image: project5,
     title: "Car Doctor’s",
     technology:
       "ReactJS,Raw CSS3, Tailwind CSS, daisy ui, React Router,JSON_API, Firebase, Express JS, Mongodb",
     github: "https://github.com/BappySheikh1/genius-car-client",
     demo: "https://genius-car-31ddf.firebaseapp.com/",
   },
   {
     id: 6,
     image: project6,
     title: "Dragon News",
     technology: "ReactJS,Raw CSS3, React Bootstrap, React Router,JSON_API",
     github: "https://github.com/BappySheikh1/dragon-news-client",
     demo: "https://dragon-news-6ee0c.firebaseapp.com/",
   },
   {
     id: 7,
     image: project7,
     title: "LearnPLUS",
     technology: "ReactJS,Raw CSS3, React Bootstrap, React Router,JSON_API",
     github: "https://github.com/BappySheikh1/develop-quiz-website",
     demo: "https://gilded-squirrel-804aa8.netlify.app/",
   },
   {
     id: 8,
     image: project8,
     title: "Domain.com",
     technology: "HTML5, CSS3, Bootstrap5",
     github: "https://github.com/BappySheikh1/edTech-website-main",
     demo: "https://bappysheikh1.github.io/edTech-website-main/",
   },
   {
     id: 9,
     image: project9,
     title: "MaxCoach",
     technology:
       "ReactJS,Raw CSS3, React Bootstrap, React Router,JSON_API, Firebase, Express JS, Mongodb",
     github: "https://github.com/BappySheikh1/learning-website",
     demo: "https://learning-website-client-f3d12.web.app/",
   },
   {
     id: 10,
     image: project10,
     title: "Panda-commerce",
     technology: "HTML5, CSS3, JavaScript",
     github: "https://github.com/BappySheikh1/panda-commerce",
     demo: "https://bappysheikh1.github.io/panda-commerce/",
   },
   {
     id: 11,
     image: project11,
     title: "Select five",
     technology: "HTML5, CSS3, JavaScript",
     github: "https://github.com/BappySheikh1/select-best-five",
     demo: "https://classy-lollipop-0776c0.netlify.app/",
   },
   {
     id: 12,
     image: project12,
     title: "My Regular Club",
     technology: "HTML5, CSS3, JavaScript",
     github: "https://github.com/BappySheikh1/select-best-five",
     demo: "https://classy-lollipop-0776c0.netlify.app/",
   },
   {
     id: 13,
     image: project13,
     title: "Donate today",
     technology: "HTML5, CSS3, JavaScript",
     github: "https://github.com/BappySheikh1/donate-today-main",
     demo: "https://bappysheikh1.github.io/donate-today-main/",
   },
 ];

    return (
      <>
        <section id="portfolio">
          <h5>My Recent Word</h5>
          <h2 className="gap-btm">Portfolio</h2>

          <div className="container portfolio_container">
            {projectData?.map((project) => (
              <article key={project.id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={project.image} alt="" />
                </div>
                <h3>{project.title}</h3>
                <div className="portfolio_item-cta">
                  <a
                    className="btn"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    className="btn btn-primary"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    );
};

export default Portfolio;