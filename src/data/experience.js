export const professionalExperiences = [
  {
    id: 1,
    company: "Compagnie Industrielle de Bonneterie (CIB)",
    role: "Rattacheur Textile",
    period: "2019 – Décembre 2025",
    startYear: 2019,
    endYear: 2025,
    description:
      "Travail dans le domaine du tricotage et de la production textile avec participation aux processus de contrôle qualité et finition des pièces produites.",
    type: "full-time",
  },
  {
    id: 2,
    company: "Miatex",
    role: "Rattacheur Textile",
    period: "2017 – 2019",
    startYear: 2017,
    endYear: 2019,
    description:
      "Participation active aux opérations de production textile et contribution aux chaînes de production avec respect des standards de qualité.",
    type: "full-time",
  },
  {
    id: 3,
    company: "Ghita Service",
    role: "Rattacheur Textile",
    period: "2015 – 2017",
    startYear: 2015,
    endYear: 2017,
    description:
      "Première expérience professionnelle dans le domaine du tricotage et de la production textile, acquisition des compétences de base du métier.",
    type: "full-time",
  },
];

export const education = [
  {
    id: 1,
    diploma: "Diplôme Développement Digital – Option Web Full Stack",
    institution:
      "OFPPT (Office de la Formation Professionnelle et de la Promotion du Travail)",
    period: "2024 – 2026",
    startYear: 2024,
    endYear: 2026,
    status: "En attente de délivrance du diplôme",
    description:
      "Formation complète en développement web avec spécialisation Full Stack (Frontend React et Backend Laravel). Projets réalisés : application de gestion textile et système de maintenance préventive.",
    skills: [
      "Développement Frontend (React, HTML, CSS, JavaScript)",
      "Développement Backend (Laravel, PHP)",
      "Base de données (MySQL)",
      "Architecture REST API",
      "Conception UML et Merise",
      "Gestion de projets Agile",
    ],
  },
  {
    id: 2,
    diploma: "Baccalauréat – Sciences Physiques",
    institution: "Lycée",
    period: "2023 – 2024",
    startYear: 2023,
    endYear: 2024,
    status: "Obtenu",
    description:
      "Obtention du diplôme du Baccalauréat en Sciences Physiques avec une base solide en mathématiques, physique et chimie.",
    skills: [],
  },
];

export const journey = [
  {
    id: 1,
    year: "2015",
    title: "Début de Carrière Professionnelle",
    description:
      "Entrée dans le secteur textile en tant que Rattacheur chez Ghita Service",
    icon: "start",
  },
  {
    id: 2,
    year: "2017 – 2019",
    title: "Développement d'Expertise",
    description:
      "Poursuite de l'expérience professionnelle chez Miatex avec consolidation des compétences",
    icon: "growth",
  },
  {
    id: 3,
    year: "2019 – 2025",
    title: "Expérience chez CIB",
    description:
      "Travail continu dans le domaine textile à la Compagnie Industrielle de Bonneterie",
    icon: "career",
  },
  {
    id: 4,
    year: "2024",
    title: "Obtention du Baccalauréat",
    description:
      "Réussite du Baccalauréat en Sciences Physiques parallèlement à l'activité professionnelle",
    icon: "education",
  },
  {
    id: 5,
    year: "2024 – 2026",
    title: "Formation en Développement Web",
    description:
      "Formation OFPPT en Développement Digital – Option Web Full Stack avec réalisation de projets concrets",
    icon: "training",
  },
  {
    id: 6,
    year: "Aujourd'hui",
    title: "Disponible pour un Emploi",
    description:
      "Prêt à intégrer une équipe de développement en tant que Développeur Web Full Stack",
    icon: "available",
  },
];

// Fonction utilitaire pour obtenir l'expérience totale en années
export const getTotalExperience = () => {
  const startYear = 2015;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Fonction utilitaire pour obtenir les années d'expérience dans le textile
export const getTextileExperience = () => {
  const firstJob = professionalExperiences[professionalExperiences.length - 1];
  const lastJob = professionalExperiences[0];
  return lastJob.endYear - firstJob.startYear;
};
