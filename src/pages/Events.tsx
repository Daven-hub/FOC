import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar, MapPin, Clock } from 'lucide-react';
import { Event, FilterOption, MinimalEvent, RegistrationFormData } from '@/components/Events/types';
import EventHero from '@/components/Events/EventHero';
import AnimatedSection from '@/components/Events/AnimatedSection';
import EventFilters from '@/components/Events/EventFilters';
import EventList from '@/components/Events/EventList';
import EventRegistrationForm from '@/components/Events/EventRegistrationForm';
import { events } from '@/data/events';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<MinimalEvent | null>(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filters: FilterOption[] = [
    { id: 'all', label: 'Tous les événements' },
    { id: 'online', label: 'En ligne' },
    { id: 'in-person', label: 'Présentiel' },
    { id: 'upcoming', label: 'À venir' },
    { id: 'past', label: 'Passés' },
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.tags && event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

    let matchesFilter = true;
    if (activeFilter === 'online') matchesFilter = event.type === 'En ligne';
    if (activeFilter === 'in-person') matchesFilter = event.type === 'Présentiel';
    if (activeFilter === 'upcoming') matchesFilter = new Date(event.start || '') > new Date();
    if (activeFilter === 'past') matchesFilter = new Date(event.start || '') < new Date();

    return matchesSearch && matchesFilter;
  });

  const handleRegister = (event: Event) => {
    setSelectedEvent({
      id: event.id,
      title: event.title
    });
    setIsRegistrationOpen(true);
    setRegistrationSuccess(false);
  };

  const handleSubmitRegistration = async (formData: RegistrationFormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setRegistrationSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <EventHero />

      <main className="relative z-10">
        {/* Section de filtres */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.2}>
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end justify-between mb-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Événements à venir
                    </h2>
                    <p className="text-gray-600">
                      Découvrez nos prochains rendez-vous professionnels
                    </p>
                  </div>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Calendar className="mr-2 h-4 w-4" />
                    Voir le calendrier
                  </Button>
                </div>

                <EventFilters
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                  filters={filters}
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Liste des événements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {activeFilter === 'all' ? 'Tous nos événements' : filters.find(f => f.id === activeFilter)?.label}
                  <span className="text-gray-500 ml-2 text-lg font-normal">
                    ({filteredEvents.length} {filteredEvents.length > 1 ? 'résultats' : 'résultat'})
                  </span>
                </h2>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Trier par :</span>
                  <Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
                    Date <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <EventList
              events={filteredEvents}
              activeFilter={activeFilter}
              expandedEvent={expandedEvent}
              onToggleExpand={(eventId) => setExpandedEvent(expandedEvent === eventId ? null : eventId)}
              onRegister={handleRegister}
            />
          </div>
        </section>
      </main>

      {selectedEvent && (
        <EventRegistrationForm
          event={selectedEvent}
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
          onSubmit={handleSubmitRegistration}
          isSubmitting={isSubmitting}
          success={registrationSuccess}
        />
      )}

      <Footer />
    </div>
  );
};

export default EventsPage;