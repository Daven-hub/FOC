
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, Calendar, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-foc-red" />,
      title: "Recrutement International",
      description: "Connectez-vous avec des talents du monde entier grâce à notre réseau international d'experts en recrutement"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-foc-red" />,
      title: "Placement Professionnel",
      description: "Solutions de placement personnalisées pour répondre aux besoins spécifiques de votre entreprise"
    },
    {
      icon: <Calendar className="w-12 h-12 text-foc-red" />,
      title: "Services Événementiels",
      description: "Organisation d'événements de recrutement et de networking pour maximiser vos opportunités"
    },
    {
      icon: <Building className="w-12 h-12 text-foc-red" />,
      title: "Centre d'Affaires",
      description: "Accompagnement complet pour le développement de votre activité à l'international"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foc-blue mb-6">
            Nos <span className="text-foc-red">Services</span> d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services conçus pour propulser votre succès 
            à l'international avec l'expertise de Franchise Opportunities Canada Inc.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 text-center p-8 hover:bg-foc-blue/5">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-foc-red/10 rounded-2xl group-hover:bg-foc-red/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foc-blue mb-4">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Section CTA */}
        <div className="bg-gradient-to-r from-foc-blue to-foc-blue-light rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Prêt à découvrir nos solutions ?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous dès aujourd'hui pour une consultation personnalisée
          </p>
          <Button 
            size="lg" 
            className="bg-foc-red hover:bg-foc-red-dark text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg shadow-foc-red/25 border-0"
          >
            Demander une consultation gratuite
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
