import { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { MailIcon, LinkedinIcon, GithubIcon } from "../icons";
import { contactInfo } from "../../data";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <SectionWrapper id="contact">
      <div className="section-content">
        <h2>Get In Touch</h2>
        <p className="contact-intro">I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-links">
              <a href={`mailto:${contactInfo.email}`} className="contact-link">
                <MailIcon />
                <span>{contactInfo.email}</span>
              </a>

              <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>

              <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                <GithubIcon />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} required />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};
