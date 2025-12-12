import { SectionWrapper } from "../ui/SectionWrapper";
import { MailIcon, LinkedinIcon, GithubIcon } from "../icons";
import type { ProfileBio, ContactInfo } from "@/types";

interface ProfileSectionProps {
  profileBio: ProfileBio;
  contactInfo: ContactInfo;
}

export const ProfileSection = ({ profileBio, contactInfo }: ProfileSectionProps) => {
  return (
    <SectionWrapper id="profile" title="About Me">
      <div className="space-y-6">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-800 dark:text-white mb-2">
            {profileBio.name}
          </h1>
          <h2 className="text-xl lg:text-2xl text-primary font-medium mb-6">{profileBio.title}</h2>
        </div>

        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl">
          {profileBio.summary}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            <MailIcon />
            {contactInfo.email}
          </a>
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            href={`https://${contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
