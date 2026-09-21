import type { ExperienceItem, EducationItem, SkillCategory } from '../types/portfolio';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'real-trends',
    role: 'Frontend Developer',
    company: 'Real Trends',
    period: '10/2023 - 06/2026',
    location: 'Buenos Aires, Argentina',
    description: [
      'Desarrollo y mantenimiento de la plataforma frontend web, implementando buenas prácticas y patrones de componentes reutilizables.',
      'Liderazgo como referente técnico en la migración a React, conduciendo code reviews enfocadas en arquitectura, calidad de código y consistencia UI.',
      'Gestión autónoma de deuda técnica, refactors estructurales y migración progresiva de funcionalidades legadas de jQuery hacia React.',
      'Integración de herramientas de Inteligencia Artificial (Gemini, Copilot, Claude) para optimización de código, documentación técnica y aceleración de refactors.',
      'Colaboración estrecha con Producto y Diseño aportando una visión crítica en UX/UI.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Styled Components', 'Storybook', 'jQuery', 'HTML/CSS', 'Docker']
  },
  {
    id: 'chiper',
    role: 'Frontend Engineer',
    company: 'ChiperCO',
    period: '09/2021 - 07/2023',
    location: 'Buenos Aires, Argentina',
    description: [
      'Desarrollo y mantenimiento de aplicaciones web y mobile (React y React Native), adaptando la arquitectura para la expansión a Brasil.',
      'Implementación de flujos críticos de la aplicación: autenticación, envíos, pasarelas de pago y facturación.',
      'Diseño y desarrollo de componentes de interfaz reutilizables documentados en Storybook.',
      'Escritura y ejecución de tests unitarios y de integración con Jest y React Testing Library.',
      'Integración y configuración de SonarQube para el análisis estático automatizado de la calidad de código.'
    ],
    technologies: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Redux', 'TailwindCSS', 'Storybook', 'Jest', 'SonarQube']
  },
  {
    id: 'soyhenry',
    role: 'Fullstack Teaching Assistant',
    company: 'soyHenry Bootcamp',
    period: '07/2021 - 08/2021',
    location: 'Buenos Aires, Argentina',
    description: [
      'Coordinación y orientación de grupos de estudiantes bajo metodologías ágiles (Scrum), liderando Daily Standups y asistencia técnica.'
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Scrum']
  },
  {
    id: 'eest4',
    role: 'Profesora de Artes Visuales',
    company: 'EEST N°4 de Avellaneda',
    period: '08/2019 - 11/2019',
    location: 'Buenos Aires, Argentina',
    description: [
      'Desarrollo de habilidades blandas clave como comunicación asertiva, planificación estratégica y acompañamiento formativo aplicado a entornos técnicos.'
    ],
    technologies: ['Artes Visuales', 'UI/UX Basis', 'Planificación']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'utn',
    title: 'Professional Testing Master Avanzado',
    institution: 'Universidad Tecnológica Nacional (UTN)',
    year: '2023',
    type: 'Especialización'
  },
  {
    id: 'henry',
    title: 'Fullstack Web Developer',
    institution: 'soyHenry Bootcamp',
    year: '2021',
    type: 'Bootcamp'
  },
  {
    id: 'imsap',
    title: 'Profesorado de Artes Visuales',
    institution: 'IMSAP de Avellaneda "Alfredo Sturla"',
    year: '2014 - 2019',
    type: 'Carrera Superior'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & Architecture',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux', 'jQuery', 'HTML5', 'CSS3']
  },
  {
    title: 'Styling & UI Systems',
    skills: ['TailwindCSS', 'Styled Components', 'Storybook', 'UI/UX Design', 'Figma']
  },
  {
    title: 'Testing & Quality',
    skills: ['Jest', 'React Testing Library', 'SonarQube', 'Code Review']
  },
  {
    title: 'AI & Tools',
    skills: ['Prompt Engineering', 'Gemini / Claude / Copilot', 'Git / GitHub', 'Docker', 'Jira', 'Scrum']
  }
];