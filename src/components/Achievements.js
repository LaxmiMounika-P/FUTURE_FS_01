import {
  FaTrophy,
  FaLaptopCode,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";

function Achievements() {
  return (
    <section id="achievements">
      <h2 className="achievement-title">Achievements & Growth</h2>

      {/* STATISTICS */}

      <div className="achievement-stats">
        <div className="mini-stat-card">
          <FaProjectDiagram className="mini-stat-icon" />

          <h3>3+</h3>

          <p>Projects</p>
        </div>

        <div className="mini-stat-card">
          <FaCertificate className="mini-stat-icon" />

          <h3>8+</h3>

          <p>Certificates</p>
        </div>

        <div className="mini-stat-card">
          <FaCode className="mini-stat-icon" />

          <h3>100+</h3>

          <p>Problems Solved</p>
        </div>

        <div className="mini-stat-card">
          <FaBriefcase className="mini-stat-icon" />

          <h3>4+</h3>

          <p>Internships</p>
        </div>
      </div>

      {/* MAIN CARDS */}

      <div className="achievement-container">
        {/* Achievements */}

        <div className="achievement-card">
          <div className="achievement-icon">
            <FaTrophy />
          </div>

          <h3>Achievements</h3>

          <ul>
            <li>Built AI-powered and Full Stack projects</li>

            <li>Completed NPTEL Certifications</li>

            <li>Developed responsive portfolio website</li>

            <li>Designed UI/UX prototypes using Figma</li>
          </ul>
        </div>

        {/* Learning */}

        <div className="achievement-card">
          <div className="achievement-icon">
            <FaLaptopCode />
          </div>

          <h3>Currently Learning</h3>

          <ul>
            <li>MERN Stack Development</li>

            <li>Advanced React.js</li>

            <li>Generative AI</li>

            <li> Advanced Data Structures & Algorithms</li>

            <li>UI/UX Principles</li>
          </ul>
        </div>

        {/* Problem Solving */}

        <div className="achievement-card">
          <div className="achievement-icon">
            <FaCode />
          </div>

          <h3>Problem Solving</h3>

          <h2 className="leetcode-count">100+</h2>

          <p>Problems solved on LeetCode and coding platforms.</p>
        </div>

        {/* Internship */}

        <div className="achievement-card">
          <div className="achievement-icon">
            <FaBriefcase />
          </div>

          <h3>Internships</h3>

          <ul>
            <li>Cyber Security Internship</li>

            <li>MERN Stack Internship</li>

            <li>ServiceNow Internship</li>

            <li>UI/UX Design Internship</li>

            <li>Data Analytics Process Automation Virtual Internship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
