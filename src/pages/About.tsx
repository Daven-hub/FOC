import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Eye, Award, ArrowRight, Play, Globe, Briefcase, Smile, BarChart2, Phone, Mail, MapPin } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightToLine } from 'lucide-react';
// Import pour le carrousel
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const partners = [
    { name: "Partner 1", logo: "/uploads/logo.png" },
    { name: "Partner 2", logo: "/uploads/logo.png" },
    { name: "Partner 3", logo: "/uploads/logo.png" },
    { name: "Partner 4", logo: "/uploads/logo.png" },
    { name: "Partner 5", logo: "/uploads/logo.png" },
  ];

  const features = [
    {
      icon: Target,
      title: "Milliers d'Opportunités Disponibles",
      description: "Accédez à une vaste base de données d'opportunités professionnelles dans le monde entier."
    },
    {
      icon: Users,
      title: "Le Bon Poste Pour Vos Compétences",
      description: "Trouvez le poste parfait qui correspond à vos compétences et aspirations professionnelles."
    },
    {
      icon: Globe,
      title: "Accès International",
      description: "Découvrez des opportunités dans plus de 50 pays à travers le monde."
    }
  ];

  const visionCards = [
    {
      icon: Users,
      title: "Qui Sommes-Nous ?",
      description: "Nous sommes une équipe d'experts dédiés à connecter les talents avec les meilleures opportunités internationales.",
      link: "En savoir plus",
      color: "from-blue-500/20 to-blue-700/20"
    },
    {
      icon: Eye,
      title: "Notre Vision",
      description: "Devenir la référence mondiale pour les opportunités de carrière internationale et le développement professionnel.",
      link: "En savoir plus",
      color: "from-purple-500/20 to-purple-700/20"
    },
    {
      icon: Target,
      title: "Notre Mission",
      description: "Faciliter l'accès aux opportunités internationales et accompagner chaque professionnel vers le succès.",
      link: "En savoir plus",
      color: "from-red-500/20 to-red-700/20"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Armand Ngaketcha Njafang",
      role: "Founder",
      image: "/dr.jpeg",
      animationDelay: 0.1,
      linkedin: "",
      facebook: "",
    },
    {
      name: "Jeremy Dubois",
      role: "Co-Founder",
      image: "/dubois.png",
      animationDelay: 0.2,
      linkedin: "#",
      facebook: "#",
    },

  ];

  const stats = [
    { label: "Placement d'Emplois", value: "90%", color: "bg-orange-500", icon: Briefcase },
    { label: "Satisfaction Clients", value: "95%", color: "bg-green-500", icon: Smile },
    { label: "Croissance Annuelle", value: "75%", color: "bg-blue-500", icon: BarChart2 }
  ];

  const happyFacts = [
    { number: "10K+", text: "Candidats Placés", emoji: "🎯" },
    { number: "50+", text: "Pays Couverts", emoji: "🌎" },
    { number: "30+", text: "Années d'Expérience", emoji: "🏆" },
    { number: "100%", text: "Engagement", emoji: "❤️" }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "+1 234 567 890",
      action: "Appeler maintenant"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@focportail.com",
      action: "Envoyer un email"
    },
    {
      icon: MapPin,
      title: "Bureau",
      info: "123 Rue des Opportunités, Paris",
      action: "Voir sur la carte"
    }
  ];

  return (
    <>
      <Header />

      <div className="relative">
        <section
          ref={ref}
          className="relative h-screen min-h-[800px] overflow-hidden bg-foc-blue pt-16"
          style={{ isolation: 'isolate' }}  
        >
          <motion.div
            className="absolute inset-0 w-full h-full lg:w-2/5 lg:left-auto lg:right-0"
            style={{
              y: yBg,
              scale: 1.05
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <OptimizedImage
              src="/abouts.png"
              alt="Événements professionnels"
              className="w-full h-full object-cover object-left lg:object-center"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-foc-blue/90 via-foc-blue/50 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            />
          </motion.div>

          {/* Contenu texte avec animations enrichies */}
          <div className="relative z-10 container h-full flex items-center px-4 sm:px-6 md:px-8">
            <div className="w-full lg:w-3/5">
              <motion.div
                className="w-full max-w-2xl relative bg-black/30 lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              >
                <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                  <motion.span
                    className="text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-2 text-white font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.span
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <ArrowRightToLine size={18} />
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      SALONS PROFESSIONNELS
                    </motion.span>
                  </motion.span>

                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[5.5rem] leading-tight font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      À propos de{" "}
                    </motion.span>

                    <motion.span
                      className="inline-block text-white"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        textShadow: [
                          "0 0 8px rgba(255,255,255,0.3)",
                          "0 0 15px rgba(255,255,255,0.4)",
                          "0 0 8px rgba(255,255,255,0.3)"
                        ]
                      }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100,
                        textShadow: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      Nous
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.p
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/85 max-w-2xl leading-relaxed"
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.7,
                        type: "spring",
                        damping: 10
                      }}
                    >
                      Découvrez notre histoire, notre mission et notre engagement à créer des opportunités exceptionnelles pour votre carrière.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Button
                        size="lg"
                        className="group bg-foc-red hover:bg-foc-red/90 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium shadow-lg hover:shadow-xl transition-all"
                      >
                        <span className="flex items-center">
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            Nous joindre
                          </motion.span>
                          <motion.span
                            className="ml-3"
                            initial={{ x: 0 }}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <ArrowRight className="h-6 w-6" />
                          </motion.span>
                        </span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Effets décoratifs expérimentaux */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 50],
                  x: [0, (Math.random() - 0.5) * 30],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 3
                }}
              />
            ))}
          </motion.div>
        </section>

        {/* Happy Facts Section */}
        {/* <section className="py-8 sm:py-12 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {happyFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{fact.number}</div>
                <div className="text-xs sm:text-sm text-white/90 flex items-center justify-center gap-1 sm:gap-2">
                  <span>{fact.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

        {/* About Section */}
        <section className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
          {/* Effets de fond décoratifs */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-foc-blue/10 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-foc-red/10 blur-3xl"></div>

          <div className="container mx-auto ">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-center">
              {/* Colonne images avec animations améliorées */}
              <div className="relative w-full lg:w-1/2">
                <motion.div
                  className="grid grid-cols-2 gap-4 sm:gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2,
                        delayChildren: 0.3
                      }
                    }
                  }}
                >
                  {/* Grande image avec effet vidéo */}
                  <motion.div
                    className="space-y-4 sm:space-y-6"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <OptimizedImage
                        src="/immigrate.png"
                        alt="Team working"
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                        width={400}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                      <motion.div
                        className="absolute inset-0 bg-foc-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ opacity: 0 }}
                      />

                      <Button
                        size="icon"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-foc-blue hover:bg-white rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-all"
                      // whileHover={{ scale: 1.1 }}
                      // whileTap={{ scale: 0.95 }}
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </motion.div>

                  {/* Deux petites images */}
                  <motion.div
                    className="space-y-4 sm:space-y-6 mt-8 sm:mt-12"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group">
                      <OptimizedImage
                        src="/school.png"
                        alt="Professional meeting"
                        className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        width={400}
                        height={200}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group">
                      <OptimizedImage
                        src="/aprouved.png"
                        alt="Professional meeting"
                        className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        width={400}
                        height={200}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Colonne texte avec animations améliorées */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <motion.p
                  className="text-xs sm:text-sm uppercase tracking-[0.2em] text-foc-blue mb-3 sm:mb-5 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  À PROPOS DE NOUS
                </motion.p>

                <motion.h2
                  className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold text-foc-blue mb-5 sm:mb-8 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  Trouvez Votre <motion.span
                    className="text-foc-red"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    viewport={{ once: true }}
                  >Emploi de Rêve</motion.span>
                  <br className="hidden sm:block" /> Et Votre Chemin de Carrière
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Chez FOC, nous nous engageons à transformer les aspirations professionnelles en réalités concrètes.
                  Notre expertise de plus de 30 ans nous permet d'offrir des solutions personnalisées pour chaque profil.
                </motion.p>

                <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl hover:bg-gray-50/80 transition-colors group cursor-default"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                      viewport={{ once: true }}
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(249, 250, 251, 0.9)"
                      }}
                    >
                      <motion.div
                        className="bg-blue-100 p-3 rounded-full flex-shrink-0 group-hover:bg-foc-blue transition-colors"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-foc-blue group-hover:text-white transition-colors" />
                      </motion.div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-foc-blue transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button className="bg-foc-red hover:bg-foc-red/90 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                      En Savoir Plus <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-28 bg-gray-900 text-white overflow-hidden">
          {/* Effet de fond décoratif */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foc-blue/30 via-transparent to-transparent"></div>
          </div>

          <div className="mx-auto text-center" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
            {/* En-tête avec animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-foc-blue mb-4 font-medium">
                MISSION
              </p>
              <motion.h2
                className="text-2xl sm:text-2xl md:text-2xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Explorez Des Milliers d'Emplois <motion.span
                  className="text-foc-red"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                >Chez FOC</motion.span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Notre mission est de créer des ponts entre les talents exceptionnels et les opportunités mondiales,
                en offrant un accompagnement personnalisé à chaque étape de votre parcours professionnel.
              </motion.p>
            </motion.div>

            {/* Grille de cartes avec animations en cascade */}
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {visionCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-gray-800/50 border border-gray-700 hover:border-foc-blue transition-all duration-300 h-full group backdrop-blur-sm">
                    <CardContent className="p-8 text-center flex flex-col h-full">
                      <motion.div
                        className="bg-foc-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-foc-red transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <card.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-foc-blue transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                        {card.description}
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button
                          variant="link"
                          className="text-foc-blue hover:text-foc-red p-0 transition-colors"
                        >
                          {card.link} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Effets décoratifs supplémentaires */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative overflow-hidden rounded-2xl">
                <OptimizedImage
                  src="/partenaire.png"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-900">Conseil en Carrière</h4>
                  <p className="text-sm text-gray-600">Accompagnement personnalisé pour votre évolution professionnelle</p>
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wide text-foc-blue mb-2 sm:mb-4">POURQUOI NOUS CHOISIR</p>
                <h2 className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold text-foc-blue mb-5 sm:mb-8 leading-tight">
                  Nous Créons <span className="text-foc-red">Plus d'Emplois</span><br />
                  Que Toute Autre Agence
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Notre approche unique combine technologie de pointe et expertise humaine pour offrir des résultats exceptionnels.
                  Avec un taux de réussite de plus de 90%, nous sommes fiers de notre engagement envers l'excellence.
                </p>

                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{stat.label}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${stat.color}`}
                            style={{ width: stat.value }}
                          ></div>
                        </div>
                        <span className="font-semibold text-gray-900 w-12">{stat.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Carousel */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-foc-blue mb-4">NOTRE ÉQUIPE</p>
              <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-5xl font-bold text-white mb-5 sm:mb-8 leading-tight">
                Rencontrez Nos <span className="text-foc-red">Experts</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
                Une équipe passionnée de professionnels dédiés à votre succès,
                avec une expertise reconnue dans le domaine du recrutement international.
              </p>
            </div>

            {/* Grille Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full max-w-xs group"
                >
                  <div className="relative overflow-hidden rounded-lg h-80">
                    <img
                      src={member.image}
                      alt={`Portrait de ${member.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />

                    {/* Overlay au survol */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-foc-blue mb-4">{member.role}</p>

                      {/* Icônes réseaux sociaux - Toujours visibles mais désactivées si liens vides */}
                      <div className="flex space-x-4 justify-center">
                        <a
                          href={member.linkedin || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-full bg-white/10 backdrop-blur-sm ${member.linkedin ? "hover:bg-[#0077B5] cursor-pointer" : "opacity-50 cursor-default"} transition-all`}
                          aria-label={`LinkedIn de ${member.name}`}
                          onClick={!member.linkedin ? (e) => e.preventDefault() : undefined}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>

                        <a
                          href={member.facebook || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-full bg-white/10 backdrop-blur-sm ${member.facebook ? "hover:bg-[#1877F2] cursor-pointer" : "opacity-50 cursor-default"} transition-all`}
                          aria-label={`Facebook de ${member.name}`}
                          onClick={!member.facebook ? (e) => e.preventDefault() : undefined}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Infos visibles */}
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-foc-blue">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="  text-center" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
            <motion.div
              className="bg-foc-blue p-0.5 sm:p-1 rounded-xl sm:rounded-2xl max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 lg:p-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foc-blue mb-4 sm:mb-6">
                  Prêt à <span className="text-foc-red">Transformer</span> Votre Carrière ?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
                  Rejoignez des milliers de professionnels qui ont trouvé leur emploi de rêve grâce à notre accompagnement expert.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-foc-red hover:bg-foc-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      Commencer Maintenant
                      <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-foc-blue text-foc-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      Contactez-nous
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;




function SocialIcon({ url, type, name, mobile = false }) {
  const config = {
    linkedin: {
      color: "hover:bg-[#0077B5]",
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      ),
      label: "LinkedIn"
    },
    facebook: {
      color: "hover:bg-[#1877F2]",
      icon: (
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      ),
      label: "Facebook"
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${mobile ? "p-2" : "p-3"} rounded-full bg-white/10 backdrop-blur-sm ${config[type].color} hover:scale-110 transition-all`}
      aria-label={`${config[type].label} de ${name}`}
    >
      <svg
        className={mobile ? "w-6 h-6" : "w-5 h-5"}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        {config[type].icon}
      </svg>
    </a>
  );
}