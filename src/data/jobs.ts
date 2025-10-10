import { JobListing } from "@/components/Events/types";

export const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Conseiller en emploi",
    type: "CDI",
    location: "Lévis, QC",
    salary: "À discuter selon expérience",
    sector: "Services d'emploi",
    schedule: "Temps plein (35h/semaine)",
    description: "Nous recherchons un conseiller en emploi pour accompagner nos clients dans leur recherche d'emploi et leur développement professionnel.",
    posted: "Publié il y a 5 jours",
    urgent: true,
    responsibilities: [
      "Accompagner les chercheurs d'emploi dans leur démarche",
      "Élaborer des plans d'action individualisés",
      "Animer des ateliers de recherche d'emploi",
      "Collaborer avec les employeurs de la région"
    ],
    requirements: [
      "BAC en relation d'aide, orientation ou domaine connexe",
      "2 ans d'expérience en conseil en emploi",
      "Excellentes compétences relationnelles",
      "Maîtrise des outils de recherche d'emploi"
    ],
    benefits: [
      "Assurance collective",
      "REER collectif",
      "Formation continue",
      "Environnement de travail stimulant"
    ],
    applicationProcess: [
      "Envoyer CV et lettre de présentation",
      "Entretien téléphonique",
      "Rencontre en personne",
      "Références"
    ],
    deadline: "2023-11-30",
    contactEmail: "emploi@foc-cof.ca"
  },
  {
    id: 2,
    title: "Formateur en compétences professionnelles",
    type: "CDD (6 mois)",
    location: "Montmagny, QC",
    salary: "28-32$/heure",
    sector: "Formation",
    schedule: "Temps partiel (25h/semaine)",
    description: "Nous cherchons un formateur pour animer nos programmes de développement des compétences professionnelles.",
    posted: "Publié il y a 2 semaines",
    urgent: false,
    responsibilities: [
      "Animer des formations en groupe",
      "Adapter le contenu aux besoins des participants",
      "Évaluer les progrès des apprenants",
      "Participer à l'amélioration des programmes"
    ],
    requirements: [
      "Expérience en formation d'adultes",
      "Connaissance du marché du travail",
      "Bonne maîtrise des outils numériques",
      "Certification en formation un atout"
    ],
    benefits: [
      "Horaire flexible",
      "Milieu de travail collaboratif",
      "Accès à des ressources pédagogiques"
    ],
    applicationProcess: [
      "Envoyer CV et proposition de formation",
      "Présentation d'un atelier test",
      "Entretien avec l'équipe"
    ],
    deadline: "2023-12-15",
    contactEmail: "formation@foc-cof.ca"
  },
  {
    id: 3,
    title: "Agent de développement économique",
    type: "CDI",
    location: "Saint-Georges, QC",
    salary: "50 000$-55 000$/an",
    sector: "Développement économique",
    schedule: "Temps plein (35h/semaine)",
    description: "Sous la supervision du directeur, l'agent de développement économique contribue à la vitalité économique de la région.",
    posted: "Publié il y a 3 jours",
    urgent: true,
    responsibilities: [
      "Développer des partenariats avec les entreprises",
      "Identifier les besoins en main-d'œuvre",
      "Mettre en place des projets innovants",
      "Représenter l'organisme dans divers comités"
    ],
    requirements: [
      "BAC en économie, administration ou domaine connexe",
      "3 ans d'expérience en développement économique",
      "Excellentes compétences en réseautage",
      "Connaissance de la région de Chaudière-Appalaches"
    ],
    benefits: [
      "Assurances collectives",
      "Possibilité de télétravail partiel",
      "Budget développement professionnel",
      "Voiture de fonction fournie"
    ],
    applicationProcess: [
      "CV et lettre de motivation",
      "Test écrit",
      "Deux entrevues"
    ],
    deadline: "2023-12-10",
    contactEmail: "developpement@foc-cof.ca"
  }
];