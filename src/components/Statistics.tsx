
import React from 'react';
import { Calendar, Users, Briefcase, Search, TrendingUp } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: <Calendar className="w-8 h-8 text-gray-600" />,
      number: "366",
      label: "MANIFESTATIONS AU TOTAL"
    },
    {
      icon: <Users className="w-8 h-8 text-gray-600" />,
      number: "3 781",
      label: "EMPLOYEURS PARTICIPANTS",
      highlight: true
    },
    {
      icon: <Users className="w-8 h-8 text-gray-600" />,
      number: "25 897",
      label: "DEMANDEURS D'EMPLOI INSCRITS"
    },
    {
      icon: <Search className="w-8 h-8 text-gray-600" />,
      number: "19 655",
      label: "OFFRES D'EMPLOI PUBLIÉES",
      highlight: true
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gray-600" />,
      number: "69 712",
      label: "NOMBRE TOTAL DE DEMANDES D'EMPLOI"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Les Journées l'emploi en <span className="text-foc-red">chiffres</span> depuis 2013
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-lg p-8 text-center border-2 border-gray-200 hover:shadow-lg transition-all duration-300 ${
                stat.highlight ? 'border-yellow-400' : ''
              }`}
            >
              {stat.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full"></div>
              )}
              
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              
              <div className="text-4xl font-bold text-gray-800 mb-4">
                {stat.number}
              </div>
              
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
