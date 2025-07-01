import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
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
    { id: 'online', label: 'Événements en ligne' },
    { id: 'in-person', label: 'Événements présenciels' },
    { id: 'hybrid', label: 'Événements hybrides' },
    { id: 'upcoming', label: 'À venir' },
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.tags && event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

    let matchesFilter = true;
    if (activeFilter === 'online') matchesFilter = event.type === 'En ligne';
    if (activeFilter === 'in-person') matchesFilter = event.type === 'Présentiel';
    if (activeFilter === 'hybrid') matchesFilter = event.type === 'Hybride';
    if (activeFilter === 'upcoming') matchesFilter = event.status === 'Bientôt';

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
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <EventHero />

      <main className="relative z-10">
        <section className="bg-white py-12 shadow-sm">
          <div className="container mx-auto px-6">
            <AnimatedSection delay={0.2}>
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end justify-between mb-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Trouvez votre prochain événement
                    </h2>
                    <p className="text-gray-600">
                      Filtrez par type, date ou mot-clé pour trouver l'événement parfait
                    </p>
                  </div>
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {activeFilter === 'all' ? 'Tous les événements' : filters.find(f => f.id === activeFilter)?.label}
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