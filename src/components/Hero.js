import profile from "../assets/Profile.png";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Typed from "typed.js";

import { useEffect, useRef } from "react";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "UI/UX Designer",
        "Python Programmer",
        "AI Enthusiast",
        "MERN Stack Learner",
      ],

      typeSpeed: 60,

      backSpeed: 40,

      backDelay: 1500,

      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero" id="home">
      {/* LEFT SIDE */}

      <div className="hero-left">
        <h3>Hello, I'm</h3>

        <h1> Paluru Laxmi Mounika</h1>

        <h2>
          <span ref={typedRef}></span>
        </h2>

        <p>
          Passionate about building modern web applications, AI-powered systems,
          responsive websites, and interactive UI/UX experiences.
        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">
          <a href="#contact">
            <button className="hire-btn">Hire Me</button>
          </a>

          <a href="/resume.pdf" download>
            <button className="resume-btn">Download Resume</button>
          </a>
        </div>

        {/* SOCIAL ICONS */}

        <div className="social-icons">
          <a
            href="https://github.com/LaxmiMounika"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/laxmi-mounika-093a7b330?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:mounikanaidu004@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
