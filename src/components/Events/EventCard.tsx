import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';
import EventTag from './EventTag';
import { Event } from './types';
import { Link } from 'react-router-dom';

interface EventCardProps {
    event: Event;
    onRegister: () => void;
}

const EventCard = ({ event, onRegister }: EventCardProps) => {
    const eventDate = new Date(event.start);
    const formattedDate = eventDate.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedTime = eventDate.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const bgColor = event.type === 'En ligne' ? 'bg-foc-blue/10' : 'bg-foc-red/10';
    const borderColor = event.type === 'En ligne' ? 'border-foc-blue' : 'border-foc-blue';
    const textColor = event.type === 'En ligne' ? 'text-foc-blue' : 'text-foc-red';

    return (
        <motion.div
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${borderColor} ${bgColor}`}
            whileHover={{ y: -5, scale: 1.01 }}
        >
            <Card className="border-0 bg-transparent">
                <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                        <div className={`lg:w-48 p-6 flex flex-col items-center justify-center border-r ${borderColor} ${bgColor}`}>
                            <div className="text-center mb-4">
                                <div className={`text-4xl font-bold ${textColor}`}>
                                    {eventDate.getDate()}
                                </div>
                                <div className={`text-sm uppercase font-bold ${textColor}`}>
                                    {eventDate.toLocaleDateString('fr-FR', { month: 'short' })}
                                </div>
                                <div className={`text-xs mt-1 ${textColor}/80`}>
                                    {formattedTime}
                                </div>
                            </div>

                            <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-white shadow-md">
                                <OptimizedImage
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                    width={96}
                                    height={96}
                                />
                            </div>
                        </div>

                        <div className="flex-1 p-6 bg-white">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                {event.title}
                                            </h3>
                                            <p className={`font-semibold ${textColor}`}>
                                                {event.subtitle}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <EventTag color={event.type === 'En ligne' ? 'blue' : 'red'}>
                                                {event.type}
                                            </EventTag>
                                            {event.status === 'Ouvert' && (
                                                <EventTag color="green">Inscriptions ouvertes</EventTag>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className={textColor} />
                                            <span>{formattedDate}</span>
                                        </div>
                                        {event.location && (
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className={textColor} />
                                                <span>{event.location}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className={textColor} />
                                            <span>{formattedTime}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-6">
                                        {event.description}
                                    </p>
                                </div>

                                <div className="lg:w-48 flex flex-col gap-3">
                                    <Button
                                        onClick={onRegister}
                                        className={`w-full ${event.type === 'En ligne' ? 'bg-foc-blue hover:bg-foc-blue/90' : 'bg-foc-red hover:bg-foc-red/90'} text-white font-bold shadow-md`}
                                        size="lg"
                                    >
                                        S'inscrire
                                    </Button>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
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
                                                            <span className={textColor}>•</span>
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
                                                            <span className={textColor}>•</span>
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
                                                    className="w-full rounded-lg border-2 border-gray-200"
                                                    width={400}
                                                    height={250}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default EventCard;