
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
      label: "NOMBRE DE DEMANDE D'EMPLOI"
    }
  ];

  return (
    <section className="py-10 md:py-20 px-[6%]">
      <div className="">
        <div className="text-center mb-8">
          <h2 className="text-[1.3rem] leading-[1.3] uppercase lg:text-[1.9rem] font-bold text-gray-700">
            Les Journées de l'emploi en <span className="text-foc-red">chiffres</span> depuis 2013
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:shadow-lg transition-all duration-300 ${
                stat.highlight ? 'border-foc-red-dark' : ''
              }`}
            >
              {stat.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-foc-red-light rounded-full"></div>
              )}
              
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              
              <div className="text-4xl font-bold text-gray-800 mb-4">
                {stat.number}
              </div>
              
              <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">
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
