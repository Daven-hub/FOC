
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-[6%] text-white py-16">
      <div className="mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/uploads/logo.png" 
                alt="FOC Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Franchise Opportunities Canada Inc. - Votre partenaire de confiance pour 
              les opportunités internationales. Nous connectons les talents aux 
              entreprises et créons des ponts vers le succès mondial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-foc-blue rounded-lg hover:bg-foc-blue-light transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-foc-red rounded-lg hover:bg-foc-red-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-foc-blue rounded-lg hover:bg-foc-blue-light transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-foc-red transition-colors">
                  Recrutement International
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foc-red transition-colors">
                  Placement Professionnel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foc-red transition-colors">
                  Services Événementiels
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foc-red transition-colors">
                  Centre d'Affaires
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-foc-red" size={16} />
                <span className="text-gray-300 text-sm">
                400 - 257 rue Sherbrooke Est, Montréal, H2X 1E3, QC, Canada
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-foc-red" size={16} />
                <span className="text-gray-300 text-sm">+1 (438) 388-3606</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-foc-red" size={16} />
                <span className="text-gray-300 text-sm">info@foc-cof.ca</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Franchise Opportunities Canada Inc. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
