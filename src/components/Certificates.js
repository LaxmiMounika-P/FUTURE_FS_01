import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";

/* PDFs */

import aiPDF from "../assets/certificates/AI_NPTEL_course_cert.pdf";

import cyberPDF from "../assets/certificates/CyberSecurity_internship_cert.pdf";

import generativePDF from "../assets/certificates/Generative AI certificate.pdf";

import pythonPDF from "../assets/certificates/Joy of computing with Python_NPTEL course_cert.pdf";

import mernPDF from "../assets/certificates/Mern_internship_cert.pdf";

import servicePDF from "../assets/certificates/Service_now_internship_cert.pdf";

import dataAnalyticsPDF from "../assets/certificates/Data_Analytics_Process_Automation.pdf";

import cppPDF from "../assets/certificates/cpp_certificate.pdf";
function Certificates() {
  return (
    <section id="certificates">
      <h2 className="certificate-title">Certifications</h2>

      <div className="certificates-container">
        {/* Certificate 1 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">🏅</div>

            <div>
              <h3>AI NPTEL Course</h3>

              <p>
                <FaBuilding />
                NPTEL course from IISC Bangalore
              </p>

              <p>
                <FaGraduationCap />
                Artificial Intelligence & Machine Learning
              </p>

              <div className="certificate-description">
                Successfully completed the AI NPTEL course covering fundamentals
                of Artificial Intelligence.
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <a
              href={aiPDF}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 2 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">🔐</div>

            <div>
              <h3>Cyber Security Internship</h3>

              <p>
                <FaBuilding />
                Palo Alto Networks Internship program (AICTE)
              </p>

              <p>
                <FaGraduationCap />
                Cyber Security & Networking
              </p>

              <div className="certificate-description">
                Completed internship focused on cybersecurity concepts and
                networking.
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <a
              href={cyberPDF}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 3 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">🤖</div>

            <div>
              <h3>Generative AI Certificate</h3>

              <p>
                <FaBuilding />
                AI Learning Platform from IBM SkillsBuild
              </p>

              <p>
                <FaGraduationCap />
                Introduction to Generative AI
              </p>

              <div className="certificate-description">
                Certified in Generative AI basics and fundamentals.
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <a
              href={generativePDF}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 4 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">🐍</div>

            <div>
              <h3>Joy Of Computing Using Python</h3>

              <p>
                <FaBuilding />
                NPTEL course from IIT Madras
              </p>

              <p>
                <FaGraduationCap />
                Python Programming
              </p>

              <div className="certificate-description">
                Completed Python programming course with strong problem-solving
                fundamentals.
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <a
              href={pythonPDF}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 5 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">💻</div>

            <div>
              <h3>MERN fullStack Development Internship</h3>

              <p>
                <FaBuilding />
                Internship Program from AICTE
              </p>

              <p>
                <FaGraduationCap />
                Full Stack Web Development with Project
              </p>

              <div className="certificate-description">
                Built responsive full-stack web applications using MongoDB,
                Express, React, and Node.js.
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <a
              href={mernPDF}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 6 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">⚙️</div>

            <div>
              <h3>ServiceNow Internship</h3>

              <p>
                <FaBuilding />
                Internship Program from Smart Bridge
              </p>

              <p>
                <FaGraduationCap />
                ServiceNow Platform
              </p>

              <div className="certificate-description">
                Worked on ServiceNow platform customization and ITSM workflow
                concepts.
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <a
              href={servicePDF}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 7 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">📊</div>

            <div>
              <h3>Data Analytics Process Automation</h3>

              <p>
                <FaBuilding />
                Internship Program from AICTE
              </p>

              <p>
                <FaGraduationCap />
                Data Analytics & Process Automation
              </p>

              <div className="certificate-description">
                Completed virtual internship focused on data analytics,
                automation workflows, and business process optimization.
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <a
              href={dataAnalyticsPDF}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 8 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">💡</div>

            <div>
              <h3>C++ Course Certification</h3>

              <p>
                <FaBuilding />
                IIT Bombay
              </p>

              <p>
                <FaGraduationCap />
                C++ Programming & Problem Solving
              </p>

              <div className="certificate-description">
                Successfully completed C++ programming course focused on OOP
                concepts, STL, and problem solving.
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <a
              href={cppPDF}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </div>
        </div>
        {/* Certificate 9 */}

        <div className="modern-certificate-card">
          <div className="certificate-left">
            <div className="certificate-icon">🎨</div>

            <div>
              <h3>UI/UX Design Internship</h3>

              <p>
                <FaBuilding />
                Thiranex
              </p>

              <p>
                <FaGraduationCap />
                UI/UX Design & User Experience
              </p>

              <div className="certificate-description">
                Completed internship training in UI/UX design, wireframing,
                prototyping, and responsive layouts and built a responsive
                shopping website prototype .
              </div>
            </div>
          </div>

          <div className="certificate-right">
            <div className="verified-tag">
              <FaCheckCircle />
              Verified
            </div>

            <button className="certificate-btn disabled-btn">
              <FaExternalLinkAlt />
              Certificate Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
