
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, Calendar, Building, ArrowLeft } from 'lucide-react';
import Subtitle from './Subtitle';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-16 h-16 text-foc-red" />,
      title: "Recrutement International",
      description: "Connectez-vous avec des talents du monde entier grâce à notre réseau international d'experts"
    },
    {
      icon: <Briefcase className="w-16 h-16 text-foc-red" />,
      title: "Placement Professionnel",
      description: "Solutions de placement personnalisées pour répondre à vos besoins spécifiques"
    },
    {
      icon: <Calendar className="w-16 h-16 text-foc-red" />,
      title: "Services Événementiels",
      description: "Organisation d'événements de recrutement et de networking pour maximiser vos opportunités"
    },
    {
      icon: <Building className="w-16 h-16 text-foc-red" />,
      title: "Centre d'Affaires<br></br>",
      description: "Accompagnement complet pour le développement de votre activité à l'international"
    }
  ];

  return (
    <section id="services" className="py-12 relative md:py-20 px-[6%]">
      <div className="absolute w-full h-full md:h-[75%] z-[0] aspect-video inset-0">
        <img
          src={"/uploads/banner.jpg"}
          alt="banner_foc.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foc-blue/100 via-foc-blue/90 to-foc-blue-dark/60 md:to-black/30" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="flex flex-col relative">
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Subtitle titre={'Nos services'} color={'text-foc-red'} />
            <div className="mb-8 mt-3">

              <p className="text-[1rem] md:text-lg text-white/80 max-w-xl leading-relaxed">
                Découvrez notre gamme complète de services conçus pour propulser votre succès
                à l'international avec l'expertise de Franchise Opportunities Canada Inc.
              </p>
            </div>
          </div>
          <div className='hidden md:flex items-center gap-2.5'>
            <div className='cursor-pointer group hover:bg-white transition-all duration-300 p-3 rounded-full border border-white/40'><ArrowLeft size={20} className='text-white transition-all duration-300 group-hover:text-black' /></div>
            <div className='cursor-pointer group hover:bg-white transition-all duration-300 p-3 rounded-full border border-white/40'><ArrowRight size={20} className='text-white transition-all duration-300 group-hover:text-black' /></div>
          </div>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group rounded-[5px] border hover:shadow-md transition-all duration-300 bg-white text-center p-5 md:p-4">
              <CardHeader className="space-y-6">
                <CardTitle className="text-xl font-poppins text-start font-bold text-foc-blue" dangerouslySetInnerHTML={{__html:service.title}} />
                  {/* {service.title} */}
                {/* </CardTitle> */}
                <div className="p-3 h-[140px] md:h-[120px] icon-service w-full bg-foc-red/10 flex justify-center items-center group-hover:bg-foc-red/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <p className="text-gray-600 text-start leading-relaxed text-[1rem] md:text-[.9rem]">
                  {service.description}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
