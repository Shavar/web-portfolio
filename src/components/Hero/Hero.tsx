import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="headings">
              <h1>Jane Doe, Senior Software Engineer</h1>
              <h2>Building scalable and user-friendly web applications.</h2>
            </div>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div
              className="hero-image"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLvEWBT4lIyYQ-vI3gLq7ereCogKObPxW7hUaVUsg3jwMiqQa4fcefucr3wnXi4ydSe_J4qAvfIk8_FIMAV8I2GewExdHp6RL1a_6zEg4DnziAxAXoxJvtYC4kxH_DeEBL1vrQAf0_0We24vXlIiNuLvJ2kWBMIR8Q2uAeyBwBka862DXvDKva0Fk53DI3JBMqNB-O6Qm0UEIyhZNA7mjwbOBhuxD1UeRykX60DS-p529JusJGU_mtQxUSW7j8BnAPsD6e0Pw-rsI")`,
              }}
              role="img"
              aria-label="Professional headshot of Jane Doe"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
