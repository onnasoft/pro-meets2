import { useOutletContext } from "@remix-run/react";
import translations from "~/components/profile/translations";
import PersonalInformation from "~/components/profile/PersonalInformation";
import ProfessionalSummary from "~/components/profile/ProfessionalSummary";
import WorkExperience from "~/components/profile/WorkExperience";
import Education from "~/components/profile/Education";
import Skills from "~/components/profile/Skills";
import Languages from "~/components/profile/Languages";
import Projects from "~/components/profile/Projects";
import Certifications from "~/components/profile/Certifications";
import References from "~/components/profile/References";
import SocialMedia from "~/components/profile/SocialMedia";
import { DashboardOutletContext } from "~/types/dashboard";

// Mock data for the profile
const mockProfile = {
  personal: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, San Francisco, CA 94105",
    birthdate: "1990-05-15",
    nationality: "American",
  },
  summary:
    "Senior Software Engineer with 8+ years of experience in full-stack development, specializing in JavaScript technologies. Passionate about building scalable web applications and mentoring junior developers.",
  experience: [
    {
      id: "1",
      position: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      startDate: "2019-01-01",
      endDate: "2023-12-31",
      description:
        "Led a team of 5 developers to build a SaaS platform using React, Node.js, and AWS. Improved application performance by 40% through optimization techniques.",
    },
    {
      id: "2",
      position: "Software Developer",
      company: "Digital Innovations",
      startDate: "2015-06-01",
      endDate: "2018-12-31",
      description:
        "Developed and maintained web applications using Angular and .NET. Implemented CI/CD pipelines reducing deployment time by 60%.",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2015",
    },
    {
      id: "2",
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California",
      year: "2013",
    },
  ],
  skills: [
    { id: "1", name: "JavaScript", level: "expert" },
    { id: "2", name: "React", level: "expert" },
    { id: "3", name: "Node.js", level: "advanced" },
    { id: "4", name: "TypeScript", level: "advanced" },
    { id: "5", name: "AWS", level: "intermediate" },
  ],
  languages: [
    { id: "1", name: "English", proficiency: "native" },
    { id: "2", name: "Spanish", proficiency: "fluent" },
    { id: "3", name: "French", proficiency: "basic" },
  ],
  projects: [
    {
      id: "1",
      name: "E-commerce Platform",
      role: "Lead Developer",
      technologies: "React, Node.js, MongoDB",
      description:
        "Built a scalable e-commerce platform with payment integration and inventory management.",
    },
    {
      id: "2",
      name: "Task Management App",
      role: "Full-stack Developer",
      technologies: "Vue.js, Firebase",
      description:
        "Developed a collaborative task management application with real-time updates.",
    },
  ],
  certifications: [
    {
      id: "1",
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2021-03-15",
    },
    {
      id: "2",
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2020-08-10",
    },
  ],
  references: [
    {
      id: "1",
      name: "Sarah Williams",
      position: "CTO at Tech Solutions Inc.",
      contact: "sarah.williams@techsolutions.com",
    },
  ],
  social: {
    linkedin: "linkedin.com/in/alexjohnson",
    github: "github.com/alexjohnson",
    twitter: "twitter.com/alexjohnson",
    website: "alexjohnson.dev",
  },
};

export default function UserProfilePage() {
  const { language } = useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;
  const profile = mockProfile;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 space-y-8">
        {/* Personal Information */}
        <PersonalInformation translations={t} profile={profile} />

        {/* Professional Summary */}
        <ProfessionalSummary translations={t} profile={profile} />

        {/* Work Experience */}
        <WorkExperience translations={t} profile={profile} />

        {/* Education */}
        <Education translations={t} profile={profile} />

        {/* Skills */}
        <Skills translations={t} profile={profile} />

        {/* Languages */}
        <Languages translations={t} profile={profile} />

        {/* Projects */}
        <Projects translations={t} profile={profile} />

        {/* Certifications */}
        <Certifications translations={t} profile={profile} />

        {/* References */}
        <References translations={t} profile={profile} />

        {/* Social Media */}
        <SocialMedia translations={t} profile={profile} />
      </div>
    </div>
  );
}
