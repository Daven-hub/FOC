import { Event } from "@/components/Events/types";

export const events: Event[] = [
  {
    id: 1,
    title: "Formation PME",
    subtitle: "Développer une main-d'œuvre qualifiée et performante",
    date: {
      day: "", // À compléter quand disponible
      month: "", // À compléter quand disponible
      year: "2023" // À ajuster selon l'année
    },
    description: "Formation gratuite pour les petites et moyennes entreprises de Chaudière-Appalaches.",
    longDescription: "Cette formation de deux jours permet aux PME de la région de Chaudière-Appalaches de développer des stratégies pour attirer, intégrer et retenir une main-d'œuvre qualifiée.",
    status: "upcoming",
    type: "formation",
    category: "Gestion RH",
    image: "/pme.png",
    img: "/pmes.png",
    restrictions: "Réservé aux PME de Chaudière-Appalaches",
    participants: {
      employers: 20,
      jobSeekers: 0
    },
    schedule: [
      {
        time: "9h00 à 12h00",
        activity: "Stratégies d'attraction et de recrutement"
      },
      {
        time: "13h00 à 16h00",
        activity: "Méthodes de rétention et d'engagement"
      }
    ],
    speakers: [
      {
        name: "Conseillers FOC",
        title: "Experts en développement de main-d'œuvre",
        image: "/images/speakers/foc-conseiller.jpg"
      }
    ],
    link: "https://foc-cof.ca/PME.php",
    tags: ["PME", "RH", "Recrutement", "Rétention"],
    objectives: [
      "Acquérir des outils concrets pour gérer votre main-d'œuvre",
      "Développer des stratégies adaptées à votre entreprise",
      "Bénéficier d'un accompagnement personnalisé"
    ],
    challenges: [
      "Pénurie de main-d'œuvre qualifiée",
      "Difficulté à retenir les employés",
      "Concurrence pour attirer les talents"
    ]
  },
  {
    id: 2,
    title: "Formation Municipalités",
    subtitle: "Développer et retenir la main-d'œuvre sur votre territoire",
    date: {
      day: "", // À compléter quand disponible
      month: "", // À compléter quand disponible
      year: "2023" // À ajuster selon l'année
    },
    description: "Formation gratuite pour les municipalités de Chaudière-Appalaches.",
    longDescription: "Cette formation de deux jours permet aux municipalités de développer des stratégies pour attirer et retenir une main-d'œuvre qualifiée sur leur territoire.",
    status: "upcoming",
    type: "formation",
    category: "Développement territorial",
    image: "/municipale.png",
    img: "/municipales.png",
    restrictions: "Réservé aux municipalités de Chaudière-Appalaches",
    participants: {
      employers: 15,
      jobSeekers: 0
    },
    schedule: [
      {
        time: "9h00 à 12h00",
        activity: "Diagnostic des enjeux de main-d'œuvre"
      },
      {
        time: "13h00 à 16h00",
        activity: "Plan d'action municipal"
      }
    ],
    speakers: [
      {
        name: "Conseillers FOC",
        title: "Experts en développement territorial",
        image: "/images/speakers/foc-conseiller.jpg"
      }
    ],
    link: "https://foc-cof.ca/Municipalite.php",
    tags: ["Municipalité", "Développement", "Main-d'œuvre"],
    objectives: [
      "Comprendre les enjeux de main-d'œuvre sur votre territoire",
      "Développer des stratégies adaptées à votre municipalité",
      "Bénéficier d'outils concrets et d'accompagnement"
    ],
    challenges: [
      "Exode des travailleurs vers les grands centres",
      "Déséquilibre offre/demande de compétences",
      "Développement économique local"
    ]
  }
];