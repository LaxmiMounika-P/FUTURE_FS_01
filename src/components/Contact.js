import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setShowPopup(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      {/* POPUP */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#28a745",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            zIndex: 9999,
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Message Sent Successfully! ✅
        </div>
      )}

      <div className="contact-wrapper">
        {/* LEFT SIDE (your original) */}
        <div className="contact-left">
          <h3>Let's work together!</h3>

          <p>
            I'm always open to discussing new projects, creative ideas,
            opportunities and collaborations.
          </p>

          <div className="contact-info">
            <a href="mailto:mounikanaidu004@gmail.com" className="contact-item">
              <FaEnvelope />
              <span>mounikanaidu004@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/laxmi-mounika-093a7b330?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <FaLinkedin />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/LaxmiMounika"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <FaGithub />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (your original form) */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
