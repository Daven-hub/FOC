import { motion } from "framer-motion";
import { item, sectionFade } from "./SectionAnimations";

export default function PresentationSection() {
  return (
    <motion.section
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={item} className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          variants={item}
        >
          <span className="relative inline-block">
            <span className="relative z-10">Qui sommes-nous ?</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 opacity-40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </span>
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={item}
        >
          <motion.div>
            <motion.p
              className="text-lg leading-relaxed mb-6"
              variants={item}
            >
              FOC Inc. est une organisation basée à Montréal, dont la mission
              est de favoriser les partenariats durables entre le Canada – en
              particulier le Québec – et les pays d’Afrique francophone.
            </motion.p>
            <motion.p className="text-lg leading-relaxed" variants={item}>
              Notre expertise repose sur une approche intégrée, combinant
              opportunités économiques, coopération universitaire, salons
              internationaux et accompagnement stratégique pour les dirigeants,
              les entreprises et les institutions publiques.
            </motion.p>
          </motion.div>
          <motion.div
            className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
            variants={item}
            whileHover={{ scale: 0.98 }}
          >
            <img
              src="/teams.png"
              alt="Équipe FOC Inc."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">Notre équipe</h3>
              <p>Des experts passionnés par le développement Afrique-Canada</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
