
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contactez-<span className="text-foc-red">nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Prêt à transformer vos ambitions en réalité ? Notre équipe d'experts 
            est là pour vous accompagner dans votre parcours vers le succès international.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Informations de contact - 2 colonnes */}
          <div className="lg:col-span-2 relative">
            <Card className="h-full shadow-xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-foc-blue to-foc-blue-light text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">
                  Nos Coordonnées
                </CardTitle>
                <p className="text-blue-100">
                  Nous sommes là pour vous aider
                </p>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-foc-blue rounded-xl group-hover:bg-foc-blue-dark transition-colors">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    {/* <h4 className="font-semibold text-gray-800 text-lg mb-2">Adresse</h4> */}
                    <p className="text-gray-600 leading-relaxed">
                      400 - 257 rue Sherbrooke Est<br />
                      Montréal, H2X 1E3<br />
                      QC, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-foc-red rounded-xl group-hover:bg-foc-red-dark transition-colors">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    {/* <h4 className="font-semibold text-gray-800 text-lg mb-2">Téléphone</h4> */}
                    <p className="text-gray-600 text-lg font-medium">+1 (438) 388-3606</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-foc-blue rounded-xl group-hover:bg-foc-blue-dark transition-colors">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    {/* <h4 className="font-semibold text-gray-800 text-lg mb-2">Email</h4> */}
                    <p className="text-gray-600 text-lg font-medium">contact@foc-cof.ca</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-foc-red rounded-xl group-hover:bg-foc-red-dark transition-colors">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    {/* <h4 className="font-semibold text-gray-800 text-lg mb-2">Horaires</h4> */}
                    <div className="text-gray-600 space-y-1">
                      <p><span className="font-medium">Lun - Ven:</span> 9h00 - 18h00</p>
                      <p><span className="font-medium">Samedi:</span> 10h00 - 16h00</p>
                      <p><span className="font-medium">Dimanche:</span> Fermé</p>
                    </div>
                  </div>
                </div>

                {/* Section CTA dans la carte de contact */}
                <div className="mt-8 md:absolute md:bottom-4 md:w-[90%] md:left-1/2 md:-translate-x-1/2 p-6 bg-gradient-to-r from-foc-blue/10 to-foc-red/10 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Consultation gratuite</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Réservez votre consultation gratuite dès maintenant pour discuter de vos besoins.
                  </p>
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-foc-blue to-foc-blue-light hover:from-foc-blue-dark hover:to-foc-blue text-white"
                  >
                    Réserver maintenant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact - 3 colonnes */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-foc-red to-foc-red-light text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">
                  Envoyez-nous un message
                </CardTitle>
                <p className="text-red-100">
                  Nous vous répondrons dans les plus brefs délais
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Prénom *
                      </label>
                      <Input 
                        placeholder="Votre prénom"
                        className="h-12 border-gray-300 focus:border-foc-blue focus:ring-foc-blue/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Nom *
                      </label>
                      <Input 
                        placeholder="Votre nom"
                        className="h-12 border-gray-300 focus:border-foc-blue focus:ring-foc-blue/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Adresse email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="votre.email@exemple.com"
                      className="h-12 border-gray-300 focus:border-foc-blue focus:ring-foc-blue/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Service d'intérêt
                    </label>
                    <select className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-foc-blue focus:ring-2 focus:ring-foc-blue/20 transition-all bg-white">
                      <option value="">Sélectionnez un service</option>
                      <option value="recrutement">Recrutement International</option>
                      <option value="placement">Placement Professionnel</option>
                      <option value="evenements">Services Événementiels</option>
                      <option value="centre">Centre d'Affaires</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Décrivez votre projet ou vos besoins en détail..."
                      rows={6}
                      className="border-gray-300 focus:border-foc-blue focus:ring-foc-blue/20 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 h-4 w-4 text-foc-blue border-gray-300 rounded focus:ring-foc-blue/20"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      J'accepte que mes données soient utilisées pour me recontacter concernant ma demande. *
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-foc-red to-foc-red-light hover:from-foc-red-dark hover:to-foc-red text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Send className="mr-2" size={20} />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
