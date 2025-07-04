import { Event } from "@/components/Events/types";

export const events: Event[] = [
  {
    id: 1,
    title: "Forum des carrières en technologie",
    subtitle: "Opportunités en IA et développement logiciel",
    description: "Rencontrez les entreprises leaders du secteur technologique et découvrez les opportunités de carrière.",
    longDescription: "Cet événement annuel rassemble les principales entreprises technologiques de la région. Vous pourrez assister à des présentations sur les dernières tendances, participer à des ateliers pratiques et rencontrer des recruteurs.",
    type: "Présentiel",
    status: "Ouvert",
    image: "/pmeEvent.png",
    img: "/eventPme.png",
    start: "2023-11-15T09:00:00",
    location: "Centre des congrès de Montréal",
    objectives: [
      "Découvrir les opportunités en IA et développement",
      "Rencontrer des employeurs potentiels",
      "Apprendre des experts du secteur"
    ],
    process: [
      "Inscription et accueil",
      "Keynote sur les tendances technologiques",
      "Session de networking",
      "Ateliers pratiques"
    ],
    tags: ["Technologie", "IA", "Développement", "Recrutement"]
  },
  {
    id: 2,
    title: "Webinaire sur le marketing digital",
    subtitle: "Stratégies pour 2024",
    description: "Apprenez les dernières stratégies de marketing digital pour booster votre entreprise en 2024.",
    longDescription: "Cet événement annuel rassemble les principales entreprises technologiques de la région. Vous pourrez assister à des présentations sur les dernières tendances, participer à des ateliers pratiques et rencontrer des recruteurs.",
    type: "Présentiel",
    status: "Ouvert",
    image: "/municipaleEvent.png",
     img: "/municipales.png",
    start: "2023-11-20T14:00:00",
    objectives: [
      "Comprendre les nouvelles tendances SEO",
      "Apprendre à créer des campagnes performantes",
      "Optimiser son budget publicitaire"
    ],
    process: [
      "Inscription et accueil",
      "Keynote sur les tendances technologiques",
      "Session de networking",
      "Ateliers pratiques"
    ],
    tags: ["Marketing", "Digital", "Réseaux sociaux"]
  },

];