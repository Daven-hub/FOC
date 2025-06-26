
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, Calendar, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ direction, onClick }: { direction: 'prev' | 'next', onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 ${
      direction === 'prev' ? 'left-6' : 'right-6'
    }`}
  >
    {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
  </button>
);

const HeroCarousel = () => {
  const slides = [
    {
      title: "Recrutement International",
      subtitle: "Connectez-vous avec des talents du monde entier",
      description: "Découvrez notre réseau international d'experts en recrutement pour trouver les meilleurs profils pour votre entreprise.",
      icon: <Users className="w-16 h-16 text-foc-red" />,
      imageUrl: "/recrutement.jpg",
      cta: "Découvrir nos talents"
    },
    {
      title: "Placement Professionnel",
      subtitle: "Solutions de placement personnalisées",
      description: "Bénéficiez de solutions sur mesure pour répondre aux besoins spécifiques de votre secteur d'activité.",
      icon: <Briefcase className="w-16 h-16 text-foc-red" />,
      imageUrl: "/recrutement.jpg",
      cta: "Nos solutions"
    },
    {
      title: "Services Événementiels",
      subtitle: "Événements de recrutement et networking",
      description: "Participez à nos événements exclusifs pour maximiser vos opportunités de recrutement.",
      icon: <Calendar className="w-16 h-16 text-foc-red" />,
      imageUrl: "/event.jpg",
      cta: "Nos événements"
    },
    {
      title: "Centre d'Affaires",
      subtitle: "Accompagnement international",
      description: "Développez votre activité à l'international avec notre expertise complète en développement d'affaires.",
      icon: <Building className="w-16 h-16 text-foc-red" />,
      imageUrl: "/affaire.jpg",
      cta: "Nous accompagner"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    customPaging: () => (
      <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-colors duration-300" />
    ),
    dotsClass: "slick-dots hero-carousel-dots",
  };

  return (
    <section className="relative min-h-screen overflow-hidden hero-carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative min-h-screen">

            <div className="absolute inset-0">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              <div className="absolute inset-0 bg-foc-blue/20" />
            </div>

            <div className="relative z-10 min-h-screen flex items-center" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
              <motion.div 
                className="w-full max-w-4xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {slide.title}
                </motion.h1>
     
                <motion.h2 
                  className="text-2xl lg:text-3xl font-semibold text-foc-red mb-8 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {slide.subtitle}
                </motion.h2>
    
                <motion.p 
                  className="text-xl text-white/95 leading-relaxed max-w-3xl mb-12 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  {slide.description}
                </motion.p>
       
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-foc-red to-foc-red-light hover:from-foc-red-dark hover:to-foc-red text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl shadow-foc-red/25 border-0 transform hover:scale-105 transition-all duration-300"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroCarousel;
