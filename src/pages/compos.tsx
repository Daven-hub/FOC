
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-to-r from-foc-blue to-blue-700 h-[calc(100vh-80px)]">
      <div className="container mx-auto min-h-screen flex items-center" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
        <div className="grid grid-cols-10 gap-0 items-center w-full">
          <div className="col-span-7 text-white animate-slide-in-left pr-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Salons internationaux
              <br />
              <span className="text-white">de recrutement d'étudiants</span>
              <br />
              <span className="text-yellow-400">& Événements de speed-dating d'agents</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-blue-100 leading-relaxed">
              Recrutez des étudiants internationaux qualifiés et travaillez avec un réseau 
              puissant d'agents pré-vérifiés du monde entier.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Événements à venir
              </Button>
            </div>
          </div>

          {/* Contenu visuel - 30% */}
          <div className="col-span-3 relative animate-fade-in">
            <div className="relative">
              <OptimizedImage
                src="/lovable-uploads/b06c6365-8547-4f11-8002-635c39777956.png"
                alt="Salon de recrutement international"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Éléments décoratifs réduits */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-80"></div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-400 rounded-full opacity-70"></div>
              <div className="absolute bottom-8 -right-4 w-14 h-14 bg-yellow-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
