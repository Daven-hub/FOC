
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet et chaque interaction avec nos clients."
    },
    {
      icon: Heart,
      title: "Intégrité",
      description: "Notre approche transparente et éthique guide toutes nos décisions et partenariats."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et méthodes pour rester à la pointe."
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Chaque service est livré selon les plus hauts standards de qualité professionnelle."
    }
  ];

  return (
    <section id="apropos" className="py-16 bg-white" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
      <div className="mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              À propos de <span className="text-foc-red">FOC</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Franchise Opportunities Canada Inc. est votre partenaire de confiance pour naviguer 
              dans le paysage complexe des opportunités internationales. Depuis notre création, 
              nous avons bâti une réputation d'excellence en aidant les entreprises et les 
              professionnels à réaliser leurs ambitions mondiales.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Notre équipe d'experts combine une connaissance approfondie des marchés internationaux 
              avec une approche personnalisée pour chaque client. Nous croyons que chaque succès 
              de nos clients est notre propre succès.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-foc-blue mb-2">15+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-foc-red mb-2">98%</div>
                <div className="text-gray-600">Satisfaction client</div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Nos Valeurs Fondamentales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-foc-blue">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-gradient-to-r from-foc-blue to-foc-blue-light rounded-full">
                        <value.icon className="text-white" size={24} />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
