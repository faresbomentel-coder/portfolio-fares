import textileDashboard from "../assets/images/projects/textile/dashboard.webp";
import textileCommandes from "../assets/images/projects/textile/commandes.webp";
import textileProduction from "../assets/images/projects/textile/production.webp";
import textileFils from "../assets/images/projects/textile/fils.webp";

import gamDashboard from "../assets/images/projects/gam/dashboard.webp";
import gamMachines from "../assets/images/projects/gam/machines.webp";
import gamIntervention from "../assets/images/projects/gam/intervention.webp";
import gamChecklist from "../assets/images/projects/gam/checklist.webp";
import textileMcd from "../assets/images/projects/textile/analysis/mcd.webp";
import textileUseCase from "../assets/images/projects/textile/analysis/use-case.webp";
export const projects = [
  {
    id: 1,
    slug: "textile-management",

    title: "Textile Management",
    subtitle: "Plateforme de gestion de production textile",

    company: "Compagnie Industrielle de Bonneterie (CIB)",
    period: "2025 - 2026",
    role: "Développeur Full Stack",
    status: "Terminé",
    github: "https://github.com/faresbomentel-coder/textile-management/",

    liveDemo: null,

    shortDescription:
      "Application Full Stack dédiée à la gestion complète d'un atelier de production textile.",

    description:
      "Développement d'une application web Full Stack permettant de gérer les fournisseurs, les fils, les commandes, les sous-commandes, la production, les pièces et les livraisons avec un tableau de bord statistique.",
    overview:
      "Textile Management est une application web Full Stack développée pour digitaliser la gestion d'un atelier de tricotage. Elle permet de centraliser le suivi des fournisseurs, des fils, des commandes, des sous-commandes, de la production, des pièces, des livraisons et des statistiques.",

    problem:
      "La gestion manuelle de la production textile rend difficile le suivi précis du stock, des commandes, des sous-commandes et de l'avancement de la production. Les informations sont dispersées et les décisions prennent plus de temps.",

    solution:
      "J'ai conçu une application basée sur React et Laravel REST API afin de centraliser les données, automatiser le suivi des opérations et offrir un tableau de bord clair pour le gestionnaire et le propriétaire.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],

    features: [
      "Gestion des fournisseurs",
      "Gestion des fils",
      "Gestion des commandes",
      "Gestion des sous-commandes",
      "Suivi de production",
      "Gestion des pièces",
      "Gestion des livraisons",
      "Dashboard statistique",
    ],
    // challenges: [
    //   "Modéliser des relations complexes entre commandes, sous-commandes, fils, machines et productions.",
    //   "Gérer le suivi du stock de fils et les besoins liés à chaque sous-commande.",
    //   "Organiser les données de production pour obtenir des statistiques exploitables.",
    // ],

    results: [
      "Centralisation des informations de production textile dans une seule application.",
      "Meilleur suivi des commandes, sous-commandes, productions et livraisons.",
      "Création d'un tableau de bord permettant une lecture rapide des statistiques importantes.",
    ],
    cover: textileDashboard,
    architecture: [
      "React Frontend",
      "Axios",
      "Laravel REST API",
      "Eloquent ORM",
      "MySQL Database",
    ],

    analysisDiagrams: [],

    challenges: [
      {
        title: "Modélisation complexe",
        description:
          "Gérer les relations entre fournisseurs, fils, commandes, sous-commandes, machines, productions, pièces et livraisons.",
        solution:
          "Création d'une structure de données claire avec des relations adaptées entre les entités principales.",
      },
      {
        title: "Suivi du stock de fils",
        description:
          "Assurer un suivi précis des quantités de fils utilisées dans les sous-commandes et la production.",
        solution:
          "Mise en place d'un système de gestion du stock avec calculs des quantités et indicateurs de disponibilité.",
      },
      {
        title: "Statistiques de production",
        description:
          "Organiser les données de production afin d'afficher des statistiques exploitables pour le gestionnaire et le propriétaire.",
        solution:
          "Développement d'un tableau de bord avec des indicateurs sur les commandes, productions, pièces, défauts et stocks.",
      },
    ],
    gallery: [
      textileDashboard,
      textileCommandes,
      textileProduction,
      textileFils,
    ],
  },

  {
    id: 2,
    slug: "gam-maintenance",

    title: "GAM Maintenance",
    subtitle: "Gestion des appareils de manutention",

    company: "Projet de stage",
    period: "2025",
    role: "Développeur Full Stack",
    status: "Completed",

    github: "",
    liveDemo: "",

    shortDescription:
      "Application de gestion des interventions de maintenance.",

    description:
      "Application Full Stack permettant la gestion des clients, machines, techniciens, interventions, checklists et alertes de maintenance.",
    overview:
      "GAM Maintenance est une application web Full Stack destinée à la gestion des interventions de maintenance des appareils de manutention. Elle permet de suivre les machines, les clients, les techniciens, les checklists, les alertes et l'historique des interventions.",

    problem:
      "Le suivi manuel des maintenances peut entraîner des oublis, un manque de visibilité sur les prochaines interventions et une difficulté à gérer les techniciens, les machines et les checklists associées.",

    solution:
      "J'ai développé une solution permettant d'organiser les interventions, d'affecter les techniciens, de remplir les checklists et de calculer les alertes de maintenance selon les cycles définis pour chaque machine.",
    technologies: [
      {
        name: "blade",
        color: "cyan",
      },
      {
        name: "Laravel",
        color: "red",
      },
      {
        name: "PHP",
        color: "indigo",
      },
      {
        name: "Breeze",
        color: "",
      },
      {
        name: "tailwind css",
        color: "teal",
      },
    ],

    features: [
      "Gestion des clients",
      "Gestion des machines",
      "Gestion des interventions",
      "Checklist",
      "Dashboard",
      "Authentification",
    ],
    challenges: [
      {
        title: "Gestion des interventions",
        description:
          "Organiser les relations entre les clients, les machines, les techniciens, les interventions et les checklists tout en assurant un suivi cohérent des opérations.",
        solution:
          "Mise en place de relations Eloquent adaptées avec des tables pivot pour gérer les affectations des techniciens, des machines et des interventions.",
      },
      {
        title: "Cycle de maintenance",
        description:
          "Suivre automatiquement les maintenances de chaque machine selon un cycle de 30 ou 60 jours afin d'éviter les retards et les oublis.",
        solution:
          "Calcul automatique de la prochaine maintenance à partir de la dernière intervention et génération d'indicateurs d'état selon le temps restant.",
      },
      {
        title: "Système d'alertes",
        description:
          "Informer les administrateurs des maintenances à venir et identifier rapidement les machines nécessitant une intervention.",
        solution:
          "Développement d'un système d'alertes visuelles avec différents niveaux de priorité affichés dans le tableau de bord.",
      },
    ],

    results: [
      "Centralisation du suivi des machines et des interventions.",
      "Meilleure visibilité sur les maintenances à venir.",
      "Organisation claire des checklists et de l'historique des interventions.",
    ],
    cover: gamDashboard,
    architecture: [
      "Blade Views",
      "Routes Web",
      "Laravel Controllers",
      "Eloquent Models",
      "MySQL Database",
    ],

    gallery: [gamDashboard, gamMachines, gamIntervention, gamChecklist],
  },
];

// Fonction utilitaire pour obtenir un projet par slug
export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

// Fonction utilitaire pour obtenir tous les slugs (utile pour la génération de routes)
export const getAllProjectSlugs = () => {
  return projects.map((project) => project.slug);
};
