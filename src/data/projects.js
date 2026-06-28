export const projects = [
  {
    id: 1,
    slug: "textile-management",
    title: "Gestion de Production Textile",
    company: "Compagnie Industrielle de Bonneterie (CIB)",
    subtitle: "Application web de gestion complète pour la production textile",
    shortDescription:
      "Système complet de gestion de production pour l'industrie textile avec suivi des commandes, machines, productions et livraisons.",
    overview:
      "Application web complète développée pour la Compagnie Industrielle de Bonneterie (CIB) permettant la gestion de l'ensemble du processus de production textile, depuis la réception des commandes clients jusqu'à la livraison finale. Le système offre une vue d'ensemble des opérations avec un tableau de bord statistique détaillé.",
    problem:
      "L'entreprise gérait manuellement les commandes, la production et les stocks, ce qui entraînait des erreurs, des retards et une difficulté à suivre l'état des commandes en temps réel. Il n'y avait pas de système centralisé pour coordonner les différents départements (commandes, production, livraison).",
    solution:
      "Développement d'une application web moderne avec une architecture API REST permettant une gestion centralisée et en temps réel de tous les aspects de la production textile. Le système offre une interface intuitive pour chaque acteur (gestionnaire et propriétaire) avec des fonctionnalités adaptées à leurs besoins.",
    architecture:
      "Architecture moderne basée sur une séparation frontend/backend. Le backend Laravel expose une API REST sécurisée qui gère la logique métier et les accès à la base de données. Le frontend React consomme cette API et offre une interface utilisateur réactive et moderne. L'authentification basée sur les rôles garantit que chaque utilisateur accède uniquement aux fonctionnalités autorisées.",
    database: {
      description:
        "Base de données relationnelle MySQL optimisée pour gérer les relations complexes entre commandes, productions, machines et livraisons. Utilisation d'Eloquent ORM pour des requêtes performantes et maintenables.",
      models: [
        "Fournisseurs",
        "Fils",
        "Clients",
        "Commandes",
        "Sous-commandes",
        "Machines",
        "Productions",
        "Pièces",
        "Rattacheurs",
        "Livraisons",
        "Utilisateurs",
        "Rôles",
      ],
      relations: [
        "Une commande appartient à un client et contient plusieurs sous-commandes",
        "Une sous-commande utilise plusieurs types de fils (relation many-to-many)",
        "Une sous-commande peut être produite sur différentes machines",
        "Une production est liée à une machine et une sous-commande spécifique",
        "Les pièces produites sont rattachées à une production et un rattacheur",
        "Une livraison regroupe plusieurs sous-commandes pour un client",
        "Le dashboard agrège les données de production, stock et statistiques",
      ],
    },
    features: [
      {
        title: "Gestion des Fournisseurs et Fils",
        description:
          "Système complet de gestion des fournisseurs de matières premières et suivi des stocks de fils avec leurs caractéristiques techniques.",
      },
      {
        title: "Gestion des Clients et Commandes",
        description:
          "Interface pour créer et suivre les commandes clients avec détails complets, dates de livraison et statuts.",
      },
      {
        title: "Sous-commandes Détaillées",
        description:
          "Décomposition des commandes en sous-commandes avec spécifications techniques, quantités et fils nécessaires.",
      },
      {
        title: "Gestion des Machines",
        description:
          "Suivi de l'état des machines de tricotage, leur disponibilité et leurs affectations aux productions.",
      },
      {
        title: "Suivi de Production",
        description:
          "Enregistrement en temps réel de l'avancement de la production par machine et sous-commande.",
      },
      {
        title: "Gestion des Pièces et Rattacheurs",
        description:
          "Suivi des pièces produites, leur qualité et les rattacheurs assignés au contrôle qualité.",
      },
      {
        title: "Préparation des Livraisons",
        description:
          "Groupement des sous-commandes terminées en livraisons avec génération de documents.",
      },
      {
        title: "Dashboard Statistique",
        description:
          "Tableau de bord avec statistiques de production, état des stocks, commandes en cours et indicateurs de performance.",
      },
      {
        title: "Système de Rôles",
        description:
          "Gestion des permissions avec deux rôles principaux : Gestionnaire (opérations quotidiennes) et Propriétaire (accès complet).",
      },
    ],
    technologies: [
      { name: "React", category: "Frontend" },
      { name: "Laravel", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "REST API", category: "Backend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Eloquent ORM", category: "Backend" },
      { name: "Git", category: "Tools" },
      { name: "Axios", category: "Frontend" },
      { name: "React Router", category: "Frontend" },
    ],
    challenges: [
      {
        title: "Relations de Base de Données Complexes",
        description:
          "Modélisation des relations entre commandes, sous-commandes, fils, machines et productions nécessitant une conception MCD/MLD rigoureuse.",
        solution:
          "Utilisation de Merise pour la conception avec normalisation appropriée et relations many-to-many via tables pivot.",
      },
      {
        title: "Calcul des Stocks en Temps Réel",
        description:
          "Nécessité de calculer dynamiquement les stocks de fils disponibles en fonction des commandes en cours.",
        solution:
          "Implémentation de requêtes optimisées avec Eloquent et utilisation de scopes pour les calculs récurrents.",
      },
      {
        title: "Gestion des États de Production",
        description:
          "Suivi complexe des différents états des sous-commandes (en attente, en production, terminée, livrée).",
        solution:
          "Mise en place d'une machine à états avec validation des transitions et historique des changements.",
      },
      {
        title: "Interface Utilisateur Réactive",
        description:
          "Nécessité d'une interface fluide malgré la quantité importante de données à afficher.",
        solution:
          "Utilisation de React avec state management efficace, lazy loading et pagination côté serveur.",
      },
    ],
    results: [
      "Réduction de 60% du temps de traitement des commandes",
      "Élimination des erreurs de saisie manuelle",
      "Visibilité en temps réel sur l'état de production",
      "Amélioration de la coordination entre départements",
      "Génération automatique de rapports et statistiques",
      "Satisfaction client accrue grâce au suivi précis des commandes",
    ],
    gallery: [
      {
        title: "Dashboard Principal",
        description: "Vue d'ensemble des statistiques de production",
      },
      {
        title: "Gestion des Commandes",
        description: "Interface de création et suivi des commandes",
      },
      {
        title: "Suivi de Production",
        description: "Écran de monitoring des machines et productions",
      },
      {
        title: "Gestion des Livraisons",
        description: "Préparation et validation des livraisons clients",
      },
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 2,
    slug: "gam-maintenance",
    title: "GAM Maintenance",
    company: "GAM - Gestion des Appareils de Manutention",
    subtitle:
      "Application de gestion de maintenance préventive pour appareils de levage",
    shortDescription:
      "Système intelligent de gestion des interventions de maintenance préventive pour machines industrielles et appareils de levage avec alertes automatiques.",
    overview:
      "Application web développée pour optimiser la gestion de la maintenance préventive des appareils de levage et machines industrielles. Le système permet de planifier les interventions, assigner des techniciens, suivre les checklists de maintenance et générer des alertes automatiques basées sur les cycles de maintenance (30 ou 60 jours).",
    problem:
      "Les interventions de maintenance étaient planifiées manuellement, ce qui entraînait des oublis, des retards et un manque de traçabilité. Il n'y avait pas de système centralisé pour suivre l'historique de maintenance de chaque machine et alerter les équipes en temps voulu.",
    solution:
      "Développement d'une application web intelligente avec calcul automatique des dates de maintenance, système d'alertes, gestion des interventions et checklists détaillées. Le système envoie des notifications pour les maintenances à venir et maintient un historique complet de chaque machine.",
    architecture:
      "Architecture REST API avec Laravel backend et React frontend. Le backend gère la logique métier complexe incluant le calcul des alertes de maintenance, la validation des interventions et la gestion des rôles (Admin/Technicien). Le frontend offre une interface intuitive pour planifier, suivre et valider les interventions.",
    database: {
      description:
        "Base de données MySQL structurée pour gérer les relations entre clients, machines, techniciens et interventions. Système de calcul automatique des alertes basé sur les cycles de maintenance et les dates de dernière intervention.",
      models: [
        "Clients",
        "Machines",
        "Techniciens",
        "Interventions",
        "Checklists",
        "Assignments",
        "Alertes",
        "Historique",
        "Utilisateurs",
        "Rôles",
      ],
      relations: [
        "Un client possède plusieurs machines",
        "Chaque machine a un cycle de maintenance (30 ou 60 jours)",
        "Une intervention peut inclure plusieurs machines et techniciens (many-to-many)",
        "Un technicien peut être responsable d'une checklist pour une machine spécifique",
        "Une checklist est liée à une intervention et une machine",
        "L'admin valide les interventions terminées",
        "La validation met à jour la date de dernière maintenance",
        "Les alertes sont calculées automatiquement selon le cycle et la dernière intervention",
      ],
    },
    features: [
      {
        title: "Gestion des Clients et Machines",
        description:
          "Base de données complète des clients avec leurs machines, caractéristiques techniques et cycles de maintenance associés.",
      },
      {
        title: "Planification des Interventions",
        description:
          "Interface pour créer et planifier les interventions de maintenance avec sélection des machines et techniciens.",
      },
      {
        title: "Assignment des Techniciens",
        description:
          "Système d'affectation des techniciens aux interventions avec gestion de disponibilité et charge de travail.",
      },
      {
        title: "Checklists de Maintenance",
        description:
          "Checklists détaillées personnalisables pour chaque type de machine avec points de contrôle obligatoires.",
      },
      {
        title: "Système d'Alertes Automatiques",
        description:
          "Calcul automatique des alertes de maintenance basé sur les cycles (30/60 jours) et la date de dernière intervention.",
      },
      {
        title: "Validation des Interventions",
        description:
          "Workflow de validation par l'admin avec mise à jour automatique des dates de maintenance.",
      },
      {
        title: "Historique Complet",
        description:
          "Traçabilité complète de toutes les interventions par machine avec dates, techniciens et observations.",
      },
      {
        title: "Dashboard de Monitoring",
        description:
          "Tableau de bord avec vue d'ensemble des interventions en cours, alertes actives et statistiques de maintenance.",
      },
      {
        title: "Gestion des Rôles",
        description:
          "Deux rôles principaux : Admin (gestion complète et validation) et Technicien (exécution et checklists).",
      },
    ],
    technologies: [
      { name: "React", category: "Frontend" },
      { name: "Laravel", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "REST API", category: "Backend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Eloquent ORM", category: "Backend" },
      { name: "Git", category: "Tools" },
      { name: "Axios", category: "Frontend" },
      { name: "React Router", category: "Frontend" },
    ],
    challenges: [
      {
        title: "Calcul Automatique des Alertes",
        description:
          "Implémentation d'un système intelligent pour calculer les dates de prochaine maintenance basées sur les cycles (30/60 jours).",
        solution:
          "Développement d'une logique backend avec Carbon (PHP) pour le calcul des dates et Laravel Scheduler pour vérifier quotidiennement les machines nécessitant une maintenance.",
      },
      {
        title: "Relations Many-to-Many Complexes",
        description:
          "Gestion des relations entre interventions, machines et techniciens avec tables pivot et données supplémentaires.",
        solution:
          "Utilisation d'Eloquent avec relations many-to-many personnalisées et pivot models pour stocker des informations contextuelles.",
      },
      {
        title: "Workflow de Validation",
        description:
          "Mise en place d'un système de validation avec mise à jour automatique des dates de maintenance.",
        solution:
          "Implémentation de transactions database pour garantir la cohérence des données lors de la validation et utilisation d'events Laravel.",
      },
      {
        title: "Interface Temps Réel",
        description:
          "Nécessité d'afficher les alertes et statuts en temps réel sans recharger la page.",
        solution:
          "Utilisation de polling avec React et optimisation des requêtes API pour minimiser la charge serveur.",
      },
    ],
    results: [
      "Réduction de 70% des maintenances oubliées ou en retard",
      "Amélioration de la traçabilité avec historique complet",
      "Optimisation de l'affectation des techniciens",
      "Alertes automatiques 7 jours avant échéance",
      "Génération automatique de rapports de maintenance",
      "Augmentation de 45% de la satisfaction client",
      "Conformité accrue aux normes de sécurité",
    ],
    gallery: [
      {
        title: "Dashboard d'Alertes",
        description: "Vue d'ensemble des alertes et interventions à venir",
      },
      {
        title: "Planification d'Intervention",
        description: "Interface de création et assignment des interventions",
      },
      {
        title: "Checklist de Maintenance",
        description: "Écran de validation des points de contrôle",
      },
      {
        title: "Historique Machine",
        description: "Traçabilité complète des maintenances par machine",
      },
    ],
    githubUrl: "",
    liveUrl: "",
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
