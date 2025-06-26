import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Données des événements
const eventData = [
  {
    id: 1,
    title: "Salon PME/STARTUP (SOQAF)",
    description:
      "Salon PME/STARTUP mentionné parmi les événements phares de FOC‑COF, dédié aux petites et moyennes entreprises et startups, dans le cadre du SOQAF.",
    date: "À confirmer",
    location: "Montréal, Canada",
    link: "#inscription",
    image: "/images/events/soqaf-site.jpg",
  },
  {
    id: 2,
    title: "Salon des Municipalités",
    description:
      "Organisé par FOC‑COF et présidé par Dr. Armand NGAKETCHA, ce salon rassemble les représentants municipaux du Québec et d'Afrique francophone",
    date: "À confirmer",
    location: "Montréal, Canada",
    link: "#inscription",
    image: "/images/events/municipalites-site.jpg",
  },
];

// Données des domaines
const domaines = [
  {
    id: 1,
    title: "Engins & équipements",
    description:
      "Importation, location et leasing d'engins lourds pour les secteurs du BTP, de l'agriculture et des mines. Maintenance, pièces détachées et accompagnement technique inclus.",
    image: "/btp.png",
    details: [
      "Fourniture d'engins adaptés aux conditions africaines",
      "Appui logistique et service après-vente performant",
      "Partenaires certifiés pour une durabilité garantie",
      "Solutions de financement adaptées"
    ],
    icon: "🚜"
  },
  {
    id: 2,
    title: "Équipements médicaux",
    description:
      "Fourniture d'équipements médicaux modernes, adaptés aux besoins des hôpitaux, cliniques et centres de santé africains, avec support à la mise en place de solutions de télémédecine.",
    image: "/medical.png",
    details: [
      "Matériel de diagnostic et équipements d'urgence",
      "Dispositifs de soins à domicile",
      "Plateformes de télémédecine interconnectées",
      "Formation du personnel médical",
      "Maintenance préventive et corrective"
    ],
    icon: "🏥"
  },
  {
    id: 3,
    title: "Coopération universitaire",
    description:
      "Mise en réseau entre universités africaines et canadiennes pour des partenariats de recherche, formations en double diplomation et mobilités étudiantes ou professorales.",
    image: "/cooperation.png",
    details: [
      "Accords de coopération institutionnels",
      "Programmes conjoints de formation",
      "Mobilités académiques et professionnelles",
      "Laboratoires de recherche partagés",
      "Valorisation des compétences locales"
    ],
    icon: "🎓"
  },
  {
    id: 4,
    title: "Tourisme d'affaires",
    description:
      "Organisation de missions économiques, séjours de prospection, voyages d'étude et forums d'investissement pour décideurs et entrepreneurs.",
    image: "/tourisme.png",
    details: [
      "Rencontres d'affaires ciblées",
      "Programmes sur mesure par secteur",
      "Accès aux réseaux économiques canadiens",
      "Logistique haut de gamme",
      "Suivi post-mission"
    ],
    icon: "✈️"
  },
  {
    id: 5,
    title: "Salons et événements",
    description:
      "Planification et gestion de salons, foires, conférences et forums thématiques sur la coopération Canada-Afrique.",
    image: "/medical.png",
    details: [
      "Plateformes de rencontre professionnelles",
      "Organisation clé en main",
      "Communication et promotion",
      "Gestion des participants",
      "Synthèses et suites opérationnelles"
    ],
    icon: "🎪",
    events: eventData // Intégration des événements
  },
];

const DomainesPage = () => {
  const [selected, setSelected] = useState(null);
  const [isHovering, setIsHovering] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(window.scrollY / totalHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundPos = useTransform(() => `${scrollProgress * 100}%`);

  return (
    <>
     

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* Hero Section */}
        <motion.section 
          className="relative py-32 px-6 md:px-12 lg:px-24 text-center text-white overflow-hidden"
          style={{
            background: 'linear-gradient(to right, #1e3a8a, #1e40af)',
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-[url('/event.jpg')] opacity-10"
            style={{
              backgroundPosition: backgroundPos,
              backgroundSize: 'cover',
            }}
          />
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Nos <span className="">Domaines</span> d'intervention
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                FOC agit comme catalyseur du développement entre le Canada et l'Afrique
              </motion.p>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-16 bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)',
            }}
          />
        </motion.section>

        {/* Domaines Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nos <span className="text-blue-600">Expertises</span> Clés
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domaines.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setIsHovering(item.id)}
                onMouseLeave={() => setIsHovering(null)}
                onClick={() => setSelected(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: isHovering === item.id ? 1.1 : 1 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <motion.div 
                    className="absolute top-4 right-4 text-4xl"
                    animate={{
                      y: isHovering === item.id ? [0, -5, 0] : 0,
                      scale: isHovering === item.id ? 1.2 : 1
                    }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 1.5 },
                      scale: { duration: 0.3 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-1 bg-blue-500 mb-4"
                  />
                  
                  <motion.button
                    whileHover={{ 
                      backgroundColor: '#1e40af',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-blue-600 text-white rounded-lg"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Modal détaillé */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                layoutId={`card-${selected.id}`}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-full">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                    />
                  </div>
                  
                  <div className="p-8">
                    <motion.h2 
                      className="text-3xl font-bold text-blue-900 mb-4"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selected.title}
                    </motion.h2>
                    
                    <motion.p
                      className="text-lg text-gray-700 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {selected.description}
                    </motion.p>
                    
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4 className="text-xl font-semibold text-blue-800 mb-3">Nos offres spécifiques :</h4>
                      <ul className="space-y-2">
                        {selected.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                          >
                            <span className="text-blue-500 mr-2">✓</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Section Événements (seulement pour le domaine Salons et événements) */}
                    {selected.id === 5 && selected.events && (
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <h4 className="text-xl font-semibold text-blue-800 mb-3">Nos prochains événements :</h4>
                        <div className="space-y-4">
                          {selected.events.map((event, i) => (
                            <motion.div
                              key={event.id}
                              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 + i * 0.1 }}
                            >
                              <h5 className="font-bold text-lg">{event.title}</h5>
                              <p className="text-gray-600 mb-2">{event.description}</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📅 {event.date}</span>
                                <span>📍 {event.location}</span>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-3 px-4 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium"
                              >
                                S'inscrire
                              </motion.button>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    
                    <motion.div
                      className="mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition w-full"
                      >
                        Contactez-nous pour en discuter
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section CTA */}
        <motion.section 
          className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Prêt à collaborer avec nous ?
            </motion.h2>
            
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Notre équipe est à votre disposition pour discuter de vos besoins spécifiques et trouver les meilleures solutions.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full shadow-lg"
              >
                Prendre contact
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-full shadow-lg"
              >
                Voir nos références
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default DomainesPage;