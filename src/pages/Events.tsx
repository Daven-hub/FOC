import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar } from 'lucide-react';
import EventHero from '@/components/Events/EventHero';
import AnimatedSection from '@/components/Events/AnimatedSection';
import EventFilters from '@/components/Events/EventFilters';
import EventList from '@/components/Events/EventList';
import EventRegistrationForm from '@/components/Events/EventRegistrationForm';
import { events } from '@/data/events';
import { Event, FilterOption, MinimalEvent, RegistrationFormData } from '@/components/Events/types';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<MinimalEvent | null>(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

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
    if (activeFilter === 'upcoming') matchesFilter = new Date(event.start) > new Date();
    if (activeFilter === 'past') matchesFilter = new Date(event.start) < new Date();

    return matchesSearch && matchesFilter;
  });

  const handleRegister = (event: Event) => {
    navigate(`/events/${event.id}/register`);
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
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.2}>
              <div className="">
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end justify-between mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foc-blue mb-5 sm:mb-8 leading-tight">
                      Événements<span className="text-foc-red"> à venir</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                      Découvrez nos prochains rendez-vous professionnels
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-foc-blue text-foc-blue hover:bg-blue-50"
                    onClick={() => navigate('/events/calendar')}
                  >
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foc-blue leading-tight">
                  Tous nos <span className='text-foc-red'>événements</span>
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

      <Footer />
    </div>
  );
};

export default EventsPage;