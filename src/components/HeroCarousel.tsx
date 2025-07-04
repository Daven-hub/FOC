
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, Calendar, Building, ChevronLeft, ChevronRight, ArrowRightToLine } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ direction, onClick }: { direction: 'prev' | 'next', onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 ${direction === 'prev' ? 'left-6' : 'right-6'
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
      subtitle: "Accompagnement sur mesure",
      description: "Bénéficiez de solutions sur mesure pour répondre aux besoins spécifiques de votre secteur d'activité.",
      icon: <Briefcase className="w-16 h-16 text-foc-red" />,
      imageUrl: "/recrutement.jpg",
      cta: "Nos solutions"
    },
    {
      title: "Services Événementiels",
      subtitle: "Évènements Pro & Carrière",
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnHover: true,
    // prevArrow: <CustomArrow direction="prev" />,
    // nextArrow: <CustomArrow direction="next" />,
    customPaging: () => (
      <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-colors duration-300" />
    ),
    dotsClass: "slick-dots hero-carousel-dots",
  };

  return (
    <section className="relative overflow-hidden hero-carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative flex flex-col justify-end items-center h-[500px] px-[6%] md:h-[calc(100vh+20px)]">
            <div className="absolute w-full h-full aspect-video inset-0">
              <img 
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foc-blue/100 via-foc-blue/65 md:via-foc-blue/85 to-black/40" />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-foc-blue/100 via-foc-blue/50 to-foc-blue/60" /> */}
              <div className="absolute inset-0 bg-black/50 md:bg-black/30" />
            </div>
             {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50" /> */}
            <div className="w-full h-[500px] md:h-[calc(100vh+20px)] flex flex-col justify-center md:w-[70%]">
              <motion.div
                className="w-full space-y-4 pl-5 md:pl-10 py-6 md:py-10 relative border-l-[4px] border-foc-red"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className='absolute top-0 left-0 w-[17%] bg-gradient-to-r from-foc-red/90 via-foc-red-light/35 to-foc-blue/20 h-[4px]' />
                <div className='absolute bottom-0 left-0 w-[65%] h-[4px] bg-gradient-to-r from-foc-red/90 via-foc-red-light/35 to-foc-blue/20' />
                <motion.span style={{ margin: 0 }}
                  className="text-[.8rem] flex items-center gap-2 text-white drop-shadow-2xl"
                // initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <ArrowRightToLine size={20}/> {slide.title}
                </motion.span>

                <motion.h2
                  className="text-[1.6rem] md:text-[4.2rem] font-poppins uppercase leading-[1.3] m-0 font-bold text-white drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {slide.subtitle}
                </motion.h2>

                <motion.div
                  className='mt-5'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Button
                    size="sm"
                    className="group w-full md:w-[60%] bg-gradient-to-r from-foc-red to-foc-red-light hover:from-foc-red-dark hover:to-foc-red text-white px-8 py-6 md:py-7 text-sm font-semibold shadow-2xl shadow-foc-red/25 border-0 transform hover:scale-105 transition-all duration-300"
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
