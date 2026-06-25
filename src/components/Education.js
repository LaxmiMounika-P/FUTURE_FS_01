import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <section id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-container">
        {/* B.Tech */}

        <div className="education-card">
          <div className="education-icon">
            <FaUniversity />
          </div>

          <h3>B.Tech - Computer Science</h3>

          <h4> Gayatri Vidya Parishad College of Engineering </h4>

          <span>2024 - Present</span>

          <p>
            Pursuing Bachelor of Technology in Computer Science with focus on
            programming, web development, AI, and software engineering.
          </p>
        </div>

        {/* Intermediate */}

        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <h3>Intermediate (MPC)</h3>

          <h4>Sri Viswa Junior College</h4>

          <span>2022 - 2024</span>

          <p>
            Studied Mathematics, Physics, and Chemistry with strong analytical
            and problem-solving skills.
          </p>
        </div>

        {/* School */}

        <div className="education-card">
          <div className="education-icon">
            <FaSchool />
          </div>

          <h3>Secondary School Education</h3>

          <h4>St. Joseph's English Medium High School</h4>

          <span>2021 - 2022</span>

          <p>
            Built strong academic foundation and developed interest in
            technology and programming.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
