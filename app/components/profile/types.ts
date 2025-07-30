type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
type LanguageProficiency = 'basic' | 'conversational' | 'fluent' | 'native' | 'professional';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  birthdate: string;
  nationality: string;
}

interface WorkExperience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
}

interface Language {
  id: string;
  name: string;
  proficiency: LanguageProficiency;
}

interface Project {
  id: string;
  name: string;
  role: string;
  technologies: string;
  description: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

interface Reference {
  id: string;
  name: string;
  position: string;
  contact: string;
}

interface SocialMedia {
  linkedin: string;
  github: string;
  twitter: string;
  website: string;
}

export interface UserProfile {
  personal: PersonalInfo;
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
  certifications: Certification[];
  references: Reference[];
  social: SocialMedia;
}