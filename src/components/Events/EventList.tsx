import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from './EventCard';
import { Event } from './types';
import { useNavigate } from 'react-router-dom';

interface EventListProps {
  events: Event[];
  activeFilter: string;
  expandedEvent: number | null;
  onToggleExpand: (eventId: number) => void;
  onRegister: (event: Event) => void;
}

const EventList = ({ 
  events, 
  activeFilter, 
  expandedEvent, 
  onToggleExpand, 
  onRegister 
}: EventListProps) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {events.length > 0 ? (
        <div className="grid gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              exit={{ opacity: 0 }}
            >
              <EventCard
                event={event}
                // expanded={expandedEvent === event.id}
                // onToggleExpand={() => onToggleExpand(event.id)}
                onRegister={() => onRegister(event)}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center py-16"
        >
          <div className="mx-auto max-w-md">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Search size={48} className="mx-auto text-gray-400 mb-4" />
            </motion.div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Aucun événement trouvé
            </h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche ou consultez notre calendrier complet.
            </p>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600"
              onClick={() => {
                navigate('/events');
              }}
            >
              Voir tous les événements
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventList;