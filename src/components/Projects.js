import {
  FaRobot,
  FaShoppingCart,
  FaMobileAlt,
  FaFigma,
  FaLaptopCode,
  FaGlobe,
  FaGithub,
} from "react-icons/fa";

function Projects() {
  return (
    <section id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {/* Project 1 */}

        <div className="project-card">
          <div className="project-icon">
            <FaRobot />
          </div>

          <h3>Study Mate</h3>

          <p>
            AI-powered PDF based Q&A system using Python, Hugging Face and NLP
            tools.
          </p>

          <div className="project-tags">
            <span>Python</span>
            <span>AI/ML</span>
            <span>Hugging Face</span>
            <span>PDF Processing</span>
          </div>
        </div>

        {/* Project 2 */}

        <div className="project-card">
          <div className="project-icon">
            <FaShoppingCart />
          </div>

          <h3>E-Commerce Website</h3>

          <p>
            Designed and developed an e-commerce website with frontend and
            backend integration.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        {/* Project 3 */}

        <div className="project-card">
          <div className="project-icon">
            <FaMobileAlt />
          </div>

          <h3>My Helper</h3>

          <p>
            Remote access mobile application developed as part of a
            collaborative team project.
          </p>

          <div className="project-tags">
            <span>Android</span>
            <span>Team Project</span>
            <span>Mobile App</span>
          </div>
        </div>

        {/* Project 4 */}

        <div className="project-card">
          <div className="project-icon">
            <FaFigma />
          </div>

          <h3>UI/UX Prototyping</h3>

          <p>
            Created interactive wireframes and UI/UX prototypes using Figma.
          </p>

          <div className="project-tags">
            <span>Figma</span>
            <span>UI Design</span>
            <span>Wireframes</span>
          </div>
        </div>

        {/* Project 5 */}

        <div className="project-card">
          <div className="project-icon">
            <FaLaptopCode />
          </div>

          <h3>Shopping Website</h3>

          <p>
            Developed a responsive shopping website and designed prototype
            layouts in Figma.
          </p>

          <div className="project-tags">
            <span>Frontend</span>
            <span>Responsive</span>
            <span>Figma</span>
          </div>
        </div>

        {/* Project 6 */}

        <div className="project-card">
          <div className="project-icon">
            <FaGlobe />
          </div>

          <h3>Portfolio Website</h3>

          <p>
            Modern responsive portfolio website built using React.js with
            animations and dark mode.
          </p>

          <div className="project-tags">
            <span>React.js</span>
            <span>CSS</span>
            <span>Responsive</span>
            <span>Animations</span>
          </div>

          <a
            href="https://github.com/LaxmiMounika"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            View on GitHub <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
