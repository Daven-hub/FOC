
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Users, MapPin, Clock, Filter, Search } from 'lucide-react';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const events = [
    {
      id: 1,
      date: {
        day: '24',
        month: 'Jun',
        year: '2025'
      },
      title: 'Make it in Germany 2025',
      subtitle: 'Take your chance!',
      description: "Join us for an exciting online recruitment event where leading employers from a variety of industries are on the lookout for talented professionals like you! This virtual fair is your gateway to valuable insights into the German labour market, the recognition process for your qualifications, and essential tips for navigating the application process in Germany. Whether you're actively searching for a new position or simply exploring your career...",
      image: '/lovable-uploads/f1f38554-ad78-458a-b7ef-e7d5fc2858bb.png',
      type: 'En ligne, Événement de recrutement',
      status: 'Ouvert',
      restrictions: 'Aucun(e)',
      participants: { employers: 140, jobSeekers: 86 },
      link: '#'
    },
    {
      id: 2,
      date: {
        day: '15',
        month: 'Jul',
        year: '2025'
      },
      title: 'Canada Job Fair 2025',
      subtitle: 'Opportunités au Canada',
      description: "Découvrez les meilleures opportunités d'emploi au Canada lors de ce salon virtuel. Rencontrez des employeurs canadiens de premier plan et explorez les possibilités de carrière dans diverses industries. Obtenez des conseils sur l'immigration et le processus de candidature au Canada.",
      image: '/uploads/banner.jpg',
      type: 'En ligne, Événement de recrutement',
      status: 'Ouvert',
      restrictions: 'Aucun(e)',
      participants: { employers: 95, jobSeekers: 120 },
      link: '#'
    }
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-foc-blue to-foc-blue-light py-16">
          <div className="container mx-auto px-6">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Événements de <span className="text-yellow-400">Recrutement</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Découvrez nos salons de recrutement internationaux et connectez-vous avec les meilleurs employeurs du monde entier
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Rechercher par mot-clé"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-gray-300"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  <Filter size={16} className="mr-2" />
                  FILTRES
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                </Button>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8">
                  TROUVER
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Parcourir les manifestations
          </h2>

          <div className="space-y-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Date Card */}
                    <div className="lg:w-32 bg-white p-6 flex flex-col items-center justify-center border-r">
                      <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold mb-2">
                        {event.date.month}
                      </div>
                      <div className="text-3xl font-bold text-gray-800">
                        {event.date.day}
                      </div>
                      <div className="text-sm text-gray-600">
                        {event.date.year}
                      </div>
                      <div className="mt-4">
                        <MapPin className="text-gray-400" size={20} />
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-lg text-foc-red font-medium mb-4">
                            {event.subtitle}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-600">À propos:</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-600">Type de manifestation:</span>
                              <p className="text-gray-800">{event.type}</p>
                            </div>
                            <div className="md:col-span-1">
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {event.description}
                              </p>
                            </div>
                            <div>
                              <div className="mb-2">
                                <span className="font-medium text-gray-600">Statut de l'inscription:</span>
                                <p className="text-gray-800">{event.status}</p>
                              </div>
                              <div>
                                <span className="font-medium text-gray-600">Restrictions d'inscription:</span>
                                <p className="text-gray-800">{event.restrictions}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Event Image and Stats */}
                        <div className="lg:w-80">
                          <div className="relative">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="absolute top-3 right-3 flex gap-2">
                              <div className="bg-white/90 px-3 py-1 rounded flex items-center gap-1 text-sm">
                                <Users size={14} className="text-foc-blue" />
                                <span className="font-semibold">{event.participants.employers}</span>
                              </div>
                              <div className="bg-white/90 px-3 py-1 rounded flex items-center gap-1 text-sm">
                                <Users size={14} className="text-foc-red" />
                                <span className="font-semibold">{event.participants.jobSeekers}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 space-y-2">
                            <Button 
                              className="w-full bg-foc-blue hover:bg-foc-blue-dark text-white"
                              size="lg"
                            >
                              S'inscrire à l'événement
                            </Button>
                            <Button 
                              variant="outline" 
                              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                              size="lg"
                            >
                              En savoir plus
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
