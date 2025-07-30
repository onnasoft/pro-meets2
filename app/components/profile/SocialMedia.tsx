import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Globe, Globe2 } from "lucide-react";
import translations from "./translations";

interface SocialMediaProps {
  readonly translations: typeof translations.en;
  readonly profile: any;
}

export default function SocialMedia({
  profile,
  translations,
}: SocialMediaProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
        <Globe2 className="h-5 w-5 mr-2 text-primary-600" />
        {translations.sections.social}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <SiLinkedin className="h-5 w-5 mr-2 text-[#0077B5]" />
          <a
            href={`https://${profile.social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            {profile.social.linkedin}
          </a>
        </div>
        <div className="flex items-center">
          <SiGithub className="h-5 w-5 mr-2 text-gray-800" />
          <a
            href={`https://${profile.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            {profile.social.github}
          </a>
        </div>
        <div className="flex items-center">
          <SiX className="h-5 w-5 mr-2 text-[#1DA1F2]" />
          <a
            href={`https://twitter.com/${profile.social.twitter.replace(
              "twitter.com/",
              ""
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            {profile.social.twitter}
          </a>
        </div>
        <div className="flex items-center">
          <Globe className="h-5 w-5 mr-2 text-primary-600" />
          <a
            href={`https://${profile.social.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            {profile.social.website}
          </a>
        </div>
      </div>
    </section>
  );
}
