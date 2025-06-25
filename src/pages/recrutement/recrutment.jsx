import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export const Recrutment = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/recrut.png')` }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Rejoignez l’aventure FOC-COF</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">Un emploi porteur de sens, au service des communautés francophones.</p>
          <a
            href="#postes"
            className="inline-block mt-6 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Voir les offres
          </a>
        </motion.div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Pourquoi nous rejoindre ?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Travailler au FOC-COF, c’est faire partie d’un mouvement national engagé pour la vitalité des communautés francophones et acadiennes. 
            C’est aussi intégrer une équipe bienveillante, dynamique et collaborative.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              "Impact réel sur le terrain",
              "Culture inclusive et bilingue",
              "Opportunités d’évolution",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="text-blue-800 font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Postes disponibles */}
      <section id="postes" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Postes à pourvoir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <JobCard
              title="Chargé·e de communication"
              location="Ottawa - Temps plein"
              description="Mettez en valeur notre action à travers la communication numérique, les réseaux sociaux et les campagnes francophones."
            />
            <JobCard
              title="Coordonnateur·trice de projets jeunesse"
              location="Télétravail hybride"
              description="Soutenez la mise en œuvre des projets jeunesse du FOC-COF à travers le pays."
            />
          </div>
        </div>
      </section>

      {/* Candidature spontanée */}
      <section className="py-20 bg-blue-900 text-white text-center px-6">
        <PaperAirplaneIcon className="w-10 h-10 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Aucune offre ne vous correspond ?</h2>
        <p className="mb-6 max-w-xl mx-auto">Envoyez-nous votre CV et une lettre de motivation. Nous serons ravis de découvrir votre profil.</p>
        <a
          href="mailto:recrutement@foc-cof.ca"
          className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
        >
          Envoyer ma candidature
        </a>
      </section>
    </div>
  );
}

// Component pour une carte de poste
const JobCard = ({ title, location, description }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition"
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-2 mb-3">
      <BriefcaseIcon className="w-6 h-6 text-blue-700" />
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-2">{location}</p>
    <p className="text-gray-700 mb-4">{description}</p>
    <a
      href="mailto:recrutement@foc-cof.ca"
      className="text-blue-700 font-medium hover:underline"
    >
      Postuler
    </a>
  </motion.div>
);
