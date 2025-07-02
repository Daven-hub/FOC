import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const EventHero = () => {
    return (
        <section className="relative min-h-[50vh] md:min-h-[70vh] overflow-hidden">
           
            <div className="absolute inset-0">
                <OptimizedImage
                    src="/event.jpg"
                    alt="Événements professionnels"
                    className="w-full h-full object-cover"

                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-gray-900/80" />
            </div>

            
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center py-12 md:py-20">
                <div className="text-center max-w-3xl mx-auto px-4">
                    <motion.p
                        className="text-xs sm:text-sm uppercase tracking-wider text-blue-300 mb-4 md:mb-6 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                      
                    </motion.p>

                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-white">Salons des </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            événements premium
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Connectez-vous avec les entreprises leaders et accélérez votre carrière.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Button
                            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center">
                                Voir le calendrier
                                <motion.span
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="ml-2"
                                >
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </motion.span>
                            </span>
                            {/* <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span> */}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EventHero;