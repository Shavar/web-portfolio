import { SectionWrapper } from "../ui/SectionWrapper";
import { MailIcon, LinkedinIcon, GithubIcon } from "../icons";
import { ProfileBio, ContactInfo } from "@/types";

interface ProfileSectionProps {
  profileBio: ProfileBio;
  contactInfo: ContactInfo;
}

export const ProfileSection = ({ profileBio, contactInfo }: ProfileSectionProps) => {
  return (
    <SectionWrapper id="profile">
      <div className="section-content">
        <h1>{profileBio.name}</h1>
        <h2>{profileBio.title}</h2>
        <p className="profile-summary">{profileBio.summary}</p>

        <div className="contact-links">
          <a href={`mailto:${contactInfo.email}`} className="contact-link">
            <MailIcon />
            {contactInfo.email}
          </a>
          <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            <LinkedinIcon />
            LinkedIn
          </a>
          <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
