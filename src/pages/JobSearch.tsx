import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Briefcase, Clock, DollarSign, ChevronRight, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { jobListings } from '@/data/jobs';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Bannière Hero Animée */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/affaires.png"
            alt="Carrières au FOC-COF"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-gray-900/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center py-12 md:py-20">
          <motion.div
            className="text-center max-w-3xl mx-auto px-4"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.p
              className="text-xs sm:text-sm uppercase tracking-wider text-blue-300 mb-4 md:mb-6 font-medium"
              variants={itemVariants}
            >
              Rejoignez notre équipe engagée
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight"
              variants={itemVariants}
            >
              <span className="text-white">Opportunités de </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                carrière
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Contribuez à notre mission d'accompagnement professionnel et développez vos compétences dans un environnement stimulant.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById('job-listings').scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  Voir les postes disponibles
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Principale */}
      <main className="container mx-auto px-4 py-12 md:py-16" id="job-listings">
        {/* Barre de recherche améliorée */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-12 -mt-10 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Rechercher par poste, lieu ou secteur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-12"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <Filter size={18} />
              Filtres
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-6">
              Rechercher
            </Button>
          </div>

          {/* Filtres avancés (toggle) */}
          {filtersOpen && (
            <motion.div
              className="mt-6 pt-6 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de contrat</label>
                  <div className="space-y-2">
                    {['CDI', 'CDD', 'Stage', 'Temporaire'].map((type) => (
                      <div key={type} className="flex items-center">
                        <input type="checkbox" id={type} className="h-4 w-4 text-blue-600 rounded" />
                        <label htmlFor={type} className="ml-2 text-gray-700">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                  <div className="space-y-2">
                    {['Montréal', 'Laval', 'Longueuil', 'Télétravail'].map((loc) => (
                      <div key={loc} className="flex items-center">
                        <input type="checkbox" id={loc} className="h-4 w-4 text-blue-600 rounded" />
                        <label htmlFor={loc} className="ml-2 text-gray-700">{loc}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Secteur d'activité</label>
                  <div className="space-y-2">
                    {['Formation', 'Services sociaux', 'Gestion', 'Administration'].map((sector) => (
                      <div key={sector} className="flex items-center">
                        <input type="checkbox" id={sector} className="h-4 w-4 text-blue-600 rounded" />
                        <label htmlFor={sector} className="ml-2 text-gray-700">{sector}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Colonne principale des offres */}
          <div className="flex-1">
            <div className="mb-8">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {filteredJobs.length} postes disponibles
              </motion.h2>
              <p className="text-gray-600">
                Découvrez les opportunités au sein de notre organisation
              </p>
            </div>

            {/* Liste des offres avec animations */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border-l-4 ${job.urgent ? 'border-red-500' : 'border-blue-500'} hover:shadow-md transition-all`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800">{job.title}</h3>
                          {job.urgent && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                              Urgent
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-3">
                          <span className="flex items-center gap-2">
                            <Briefcase size={16} className="text-blue-500" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={16} className="text-blue-500" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <DollarSign size={16} className="text-blue-500" />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock size={16} className="text-blue-500" />
                            {job.schedule}
                          </span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="flex items-center gap-2 group mt-4 md:mt-0"
                      >
                        Voir l'offre
                        <ChevronRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{job.posted}</span>
                        <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                          {job.sector}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar - Pourquoi nous rejoindre */}
          <div className="lg:w-80 space-y-6">
            <motion.div
              className="bg-blue-50 rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-bold text-xl text-blue-800 mb-5 flex items-center gap-2">
                <Star className="text-blue-600" size={20} />
                Pourquoi nous choisir ?
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: <Users size={18} className="text-blue-600" />, text: "Équipe bienveillante et collaborative" },
                  { icon: <Award size={18} className="text-blue-600" />, text: "Formations continues gratuites" },
                  { icon: <TrendingUp size={18} className="text-blue-600" />, text: "Opportunités d'évolution" },
                  { icon: <Briefcase size={18} className="text-blue-600" />, text: "Horaires flexibles" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-bold text-xl text-gray-800 mb-5">Processus de recrutement</h3>
              <ol className="space-y-5">
                {[
                  "Dépôt de candidature en ligne",
                  "Évaluation initiale",
                  "Entretien téléphonique",
                  "Rencontre en personne",
                  "Offre d'emploi"
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center font-medium text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-bold text-xl mb-4">Vous ne trouvez pas votre poste ?</h3>
              <p className="mb-5 text-blue-100">
                Envoyez-nous une candidature spontanée et nous vous contacterons si un poste correspond à votre profil.
              </p>
              <Button variant="secondary" className="w-full">
                Postuler spontanément
              </Button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobSearch;