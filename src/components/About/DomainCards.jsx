import { motion } from "framer-motion";
import { sectionFade, item } from "./SectionAnimations";
import { FiExternalLink } from "react-icons/fi";

const services = [
  {
    title: "Opportunités économiques",
    description: "Facilitation des échanges commerciaux et des investissements entre le Canada et l'Afrique",
    icon: "💼",
    color: "text-green-600",
    borderColor: "border-green-100",
    bgColor: "bg-green-50",
  },
  {
    title: "Coopération universitaire",
    description: "Partenariats entre établissements d'enseignement supérieur et programmes d'échanges",
    icon: "🎓",
    color: "text-purple-600",
    borderColor: "border-purple-100",
    bgColor: "bg-purple-50",
  },
  {
    title: "Salons internationaux",
    description: "Organisation d'événements pour promouvoir les opportunités des deux côtés",
    icon: "🌍",
    color: "text-red-600",
    borderColor: "border-red-100",
    bgColor: "bg-red-50",
  },
  {
    title: "Accompagnement stratégique",
    description: "Conseil aux entreprises et institutions publiques pour leurs projets transcontinentaux",
    icon: "📈",
    color: "text-yellow-600",
    borderColor: "border-yellow-100",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Recrutement international",
    description: "Mise en relation des talents africains avec les opportunités canadiennes",
    icon: "👥",
    color: "text-blue-600",
    borderColor: "border-blue-100",
    bgColor: "bg-blue-50",
  },
  {
    title: "Veille stratégique",
    description: "Analyse des tendances économiques et académiques pour nos partenaires",
    icon: "🔍",
    color: "text-indigo-600",
    borderColor: "border-indigo-100",
    bgColor: "bg-indigo-50",
  },
];

export default function DomainCards() {
  return (
    <motion.section
      className="py-24 px-6 md:px-12 lg:px-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos <span className="text-blue-600">Domaines</span> d'Intervention
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Découvrez comment nous créons des ponts entre le Canada et l'Afrique
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-xl border ${service.borderColor} ${service.bgColor} transition-all duration-300 hover:shadow-md`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 100,
                    damping: 10
                  }
                }
              }}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className={`text-2xl ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <motion.a
                href="#"
                className={`inline-flex items-center text-sm font-medium ${service.color} group`}
                whileHover={{ x: 3 }}
              >
                En savoir plus
                <FiExternalLink className="ml-2 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}