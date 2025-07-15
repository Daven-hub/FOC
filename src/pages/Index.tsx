
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import About from '@/components/AboutComponent';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import WhatWeDo from '@/components/WhatWeDo';
import Events from '@/components/Events';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <Hero />
      <main>
        <About />
        <Services />
        <Events />
        <div className='px-[6%] my-10 md:my-20'>
          <div className="flex px-8 py-10 md:py-12 flex-col justify-center items-center bg-gradient-to-r from-foc-blue to-foc-blue-light rounded-lg text-center text-white">
            <h3 className="text-[1.4rem] md:text-[2.4rem] font-bold mb-2 md:mb-1">
              Prêt à découvrir nos solutions ?
            </h3>
            <p className="text-[.9rem] md:text-[1.1rem] leading-[1.2] mb-5 md:mb-6 text-blue-100">
              Contactez-nous dès aujourd'hui pour une consultation personnalisée
            </p>
            <Button
              className="bg-foc-red w-full md:w-fit hover:bg-foc-red-dark text-white px-16 py-5 md:py-6 rounded-full text-[.65rem] md:text-sm font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg shadow-foc-red/25 border-0"
            >
              Demander une consultation gratuite
              <ArrowRight className="ml-1" size={20} />
            </Button>
          </div>
        </div>
        <WhatWeDo />
        <Statistics />
        {/* <Contact /> */}

      </main>
      <Footer />
    </div>
  );
};

export default Index;
