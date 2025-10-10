
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Heart, Zap, ArrowRight, Play, Users } from 'lucide-react';
import { Button } from './ui/button';
import OptimizedImage from './OptimizedImage';
import { NavLink } from 'react-router-dom';

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
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <div className="grid lg:grid-cols-2 gap-14">
            <div className="relative">
              <div className="grid grid-cols-2 w-full h-full gap-4">
                <div className="h-full overflow-hidden rounded-2xl w-full relative">
                  <div className="relative h-full overflow-hidden rounded-2xl mt-12">
                    <OptimizedImage
                      src="/uploads/banner.jpg"
                      alt="Team working"
                      className="absolute w-full h-full object-cover"
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute inset-0 bg-blue-600/20"></div>
                    <Button
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-blue-600 hover:bg-white rounded-full"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="relative space-y-4">
                  <div className="bg-foc-blue-light text-white py-8 px-8 rounded-2xl">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm">Années d'Expérience</div>
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src="/uploads/banner.jpg"
                      alt="Professional meeting"
                      className="absolute w-full h-[calc(100%-136px)] overflow-hidden rounded-2xl object-cover"
                      width={300}
                      height={130}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm uppercase tracking-wide text-foc-blue mb-4">À PROPOS DE NOUS</p>
              <h2 className="text-4xl font-bold text-black/70 mb-6">
                Trouvez Votre <span className="text-foc-red">Emploi de Rêve</span><br />
                Et Votre Chemin de Carrière
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chez FOC, nous nous engageons à transformer les aspirations professionnelles en réalités concrètes. 
                Notre expertise de plus de 30 ans nous permet d'offrir des solutions personnalisées pour chaque profil.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-foc-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <NavLink to={"/about"} className="bg-foc-blue flex items-center w-fit hover:bg-blue-700 text-white px-6 py-3 rounded-full">
                En Savoir Plus <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </div>
          </div>
    </section>
  );
};

export default About;
