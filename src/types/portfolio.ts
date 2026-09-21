export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  type: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}