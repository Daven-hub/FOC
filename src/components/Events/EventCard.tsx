import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import { Clock, Users, MapPin, ExternalLink, Target, ListChecks, AlertTriangle } from 'lucide-react';
import EventTag from './EventTag';
import { Event } from './types';

interface EventCardProps {
    event: Event;
    expanded: boolean;
    onToggleExpand: () => void;
    onRegister: () => void;
}

const EventCard = ({ event, expanded, onToggleExpand, onRegister }: EventCardProps) => {
    return (
        <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5 }}
        >
            <Card className="border-0">
                <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-40 bg-gray-50 p-6 flex flex-col items-center justify-center border-r border-gray-200">
                            <motion.div
                                className="text-center mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* <div className="text-3xl font-bold text-gray-900">
                                    {event.date.day}
                                </div>
                                <div className="text-sm uppercase text-gray-500 font-medium">
                                    {event.date.month} {event.date.year}
                                </div> */}
                            </motion.div>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {/* <EventTag color={
                                    event.type === 'En ligne' ? 'blue' :
                                        event.type === 'Présentiel' ? 'red' : 'purple'
                                }>
                                    {event.type}
                                </EventTag>
                                {event.status === 'Bientôt' && (
                                    <EventTag color="yellow">À venir</EventTag>
                                )} */}
                                {event.status === 'Ouvert' && (
                                    <EventTag color="green">Inscription ouverte</EventTag>
                                )}
                            </div>
                        </div>

                       
                        <div className="flex-1 p-6">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1">
                                    
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                {event.title}
                                            </h3>
                                            <p className="text-lg text-blue-600 font-medium mb-4">
                                                {event.subtitle}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {event.tags?.map((tag, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ type: 'spring', stiffness: 300 }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-6">
                                        {event.description}
                                    </p>

                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
                                        {/* <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin size={16} className="text-blue-500" />
                                            <span>Mode: <span className="font-medium text-gray-800">{event.type}</span></span>
                                        </div> */}
                                        {/* <div className="flex items-center gap-2 text-gray-600">
                                            <Users size={16} className="text-blue-500" />
                                            <span>Participants: <span className="font-medium text-gray-800">{event.participants?.employers || 0} employeurs</span></span>
                                        </div> */}
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock size={16} className="text-blue-500" />
                                            <span>Statut: <span className="font-medium text-gray-800">{event.status}</span></span>
                                        </div>
                                        {/* <div className="flex items-center gap-2 text-gray-600">
                                            <Users size={16} className="text-blue-500" />
                                            <span>Candidats: <span className="font-medium text-gray-800">{event.participants?.jobSeekers || 0} inscrits</span></span>
                                        </div> */}
                                    </div>
                                </div>

                                
                                <div className="lg:w-64 flex flex-col">
                                    <motion.div
                                        className="relative rounded-lg overflow-hidden mb-4 h-40"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <OptimizedImage
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                            width={256}
                                            height={160}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                            <div className="flex justify-between text-white text-xs">
                                                <span>{event.category}</span>
                                                <span>{event.restrictions}</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <div className="flex flex-col gap-3">
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Button
                                                className="w-full bg-destructive hover:bg-destructive text-white font-medium"
                                                size="lg"
                                                onClick={onRegister}
                                            >
                                                S'inscrire maintenant
                                            </Button>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Button
                                                variant="outline"
                                                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                                                size="lg"
                                                onClick={onToggleExpand}
                                            >
                                                {expanded ? 'Moins de détails' : 'Plus de détails'}
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                        
                            <AnimatePresence>
                                {expanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="mt-6 pt-6 border-t border-gray-200"
                                    >
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">À propos de cet événement</h4>
                                        <p className="text-gray-700 mb-6">{event.longDescription}</p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                           
                                            <div className="space-y-8">
                                               
                                                {event.process && event.process.length > 0 && (
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                                            <ListChecks size={16} className="text-blue-500" />
                                                            Déroulement
                                                        </h5>
                                                        <ul className="space-y-2">
                                                            {event.process.map((step, i) => (
                                                                <motion.li
                                                                    key={i}
                                                                    className="flex items-start gap-2 text-gray-700"
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: i * 0.05 }}
                                                                >
                                                                    <span className="text-blue-500">→</span>
                                                                    <span>{step}</span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                               
                                                <div>
                                                    <img
                                                        src={event.img}
                                                        alt="Illustration de l'événement"
                                                        className="w-full h-96 rounded-lg "
                                                    />
                                                </div>
                                            </div>


                                            {/* Colonne droite */}
                                            <div className="space-y-8">
                                                {/* Objectifs */}
                                                {event.objectives && event.objectives.length > 0 && (
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                                            <Target size={16} className="text-blue-500" />
                                                            Objectifs
                                                        </h5>
                                                        <ul className="space-y-2">
                                                            {event.objectives.map((objective, i) => (
                                                                <motion.li
                                                                    key={i}
                                                                    className="flex items-start gap-2 text-gray-700"
                                                                    initial={{ opacity: 0, x: 10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: i * 0.05 }}
                                                                >
                                                                    <span className="text-blue-500">•</span>
                                                                    <span>{objective}</span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Enjeux */}
                                                {event.challenges && event.challenges.length > 0 && (
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                                            <AlertTriangle size={16} className="text-blue-500" />
                                                            Enjeux
                                                        </h5>
                                                        <ul className="space-y-2">
                                                            {event.challenges.map((challenge, i) => (
                                                                <motion.li
                                                                    key={i}
                                                                    className="flex items-start gap-2 text-gray-700"
                                                                    initial={{ opacity: 0, x: 10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: i * 0.05 }}
                                                                >
                                                                    <span className="text-blue-500">•</span>
                                                                    <span>{challenge}</span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Intervenants */}
                                                {event.speakers && event.speakers.length > 0 && (
                                                    <div>
                                                        {/* <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                                            <Users size={16} className="text-blue-500" />
                                                            Intervenants
                                                        </h5> */}
                                                        {/* <div className="flex flex-wrap gap-4">
                                                            {event.speakers.map((speaker, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                                                                    whileHover={{ y: -3 }}
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: i * 0.1 }}
                                                                >
                                                                    <motion.div
                                                                        className="w-10 h-10 rounded-full overflow-hidden bg-gray-200"
                                                                        whileHover={{ rotate: 5 }}
                                                                    >
                                                                        <OptimizedImage
                                                                            src={speaker.image}
                                                                            alt={speaker.name}
                                                                            width={40}
                                                                            height={40}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </motion.div>
                                                                    <div>
                                                                        <div className="font-medium text-gray-900">{speaker.name}</div>
                                                                        <div className="text-xs text-gray-500">{speaker.title}</div>
                                                                    </div>
                                                                </motion.div>
                                                            ))}
                                                        </div> */}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Lien vers le programme */}
                                        {/* {event.link && (
                                            <div className="mt-6 flex justify-end">
                                                <motion.div whileHover={{ x: 5 }}>
                                                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                                                        <Button variant="link" className="text-blue-600 hover:text-blue-800">
                                                            Voir le programme complet <ExternalLink size={16} className="ml-1" />
                                                        </Button>
                                                    </a>
                                                </motion.div>
                                            </div>
                                        )} */}
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