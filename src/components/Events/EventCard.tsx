import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';
import EventTag from './EventTag';
import { Event } from './types';

interface EventCardProps {
    event: Event;
    expanded: boolean;
    onToggleExpand: () => void;
    onRegister: () => void;
}

const EventCard = ({ event, expanded, onToggleExpand, onRegister }: EventCardProps) => {
    const eventDate = new Date(event.start || '');
    const formattedDate = eventDate.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedTime = eventDate.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            whileHover={{ y: -2 }}
        >
            <Card className="border-0">
                <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                        {/* Colonne de gauche - Date et image */}
                        <div className="lg:w-48 bg-blue-50 p-6 flex flex-col items-center justify-center border-r border-gray-200">
                            <div className="text-center mb-4">
                                <div className="text-3xl font-bold text-blue-600">
                                    {eventDate.getDate()}
                                </div>
                                <div className="text-sm uppercase text-gray-600 font-medium">
                                    {eventDate.toLocaleDateString('fr-FR', { month: 'short' })}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                    {formattedTime}
                                </div>
                            </div>

                            <OptimizedImage
                                src={event.image}
                                alt={event.title}
                                className="w-24 h-24 object-cover rounded-lg"
                                width={96}
                                height={96}
                            />
                        </div>

                        {/* Contenu principal */}
                        <div className="flex-1 p-6">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1">
                                    {/* En-tête */}
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {event.title}
                                            </h3>
                                            <p className="text-blue-600 font-medium">
                                                {event.subtitle}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <EventTag color="blue">
                                                {event.type}
                                            </EventTag>
                                            {event.status === 'Ouvert' && (
                                                <EventTag color="green">Inscriptions ouvertes</EventTag>
                                            )}
                                        </div>
                                    </div>

                                    {/* Métadonnées */}
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-blue-500" />
                                            <span>{formattedDate}</span>
                                        </div>
                                        {event.location && (
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-blue-500" />
                                                <span>{event.location}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-blue-500" />
                                            <span>{formattedTime}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 mb-6 line-clamp-2">
                                        {event.description}
                                    </p>
                                </div>

                                {/* Colonne de droite - CTA */}
                                <div className="lg:w-48 flex flex-col gap-3">
                                    <Button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                                        size="lg"
                                        onClick={onRegister}
                                    >
                                        S'inscrire
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-medium"
                                        size="lg"
                                        onClick={onToggleExpand}
                                    >
                                        {expanded ? 'Moins de détails' : 'Plus de détails'}
                                        <ArrowRight size={16} className={`ml-1 transition-transform ${expanded ? 'rotate-90' : ''}`} />
                                    </Button>
                                </div>
                            </div>

                            {/* Section étendue */}
                            <AnimatePresence>
                                {expanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="mt-6 pt-6 border-t border-gray-200"
                                    >
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Détails de l'événement</h4>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                {event.longDescription && (
                                                    <p className="text-gray-700">{event.longDescription}</p>
                                                )}

                                                {event.process && event.process.length > 0 && (
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-3">
                                                            Déroulement
                                                        </h5>
                                                        <ul className="space-y-2">
                                                            {event.process.map((step, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                                                    <span className="text-blue-500">•</span>
                                                                    <span>{step}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="space-y-6">
                                                {event.objectives && event.objectives.length > 0 && (
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-3">
                                                            Objectifs
                                                        </h5>
                                                        <ul className="space-y-2">
                                                            {event.objectives.map((objective, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                                                    <span className="text-blue-500">•</span>
                                                                    <span>{objective}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {event.img && (
                                                    <div className="mt-4">
                                                        <OptimizedImage
                                                            src={event.img}
                                                            alt="Illustration de l'événement"
                                                            className="w-full rounded-lg"
                                                            width={400}
                                                            height={250}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default EventCard;