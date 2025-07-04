import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowRightToLine } from 'lucide-react';

const EventHero = () => {
    return (
        <section className="relative h-[70vh] md:h-[75vh] overflow-hidden bg-gray-900">
            {/* Image de fond */}
            <div className="absolute inset-0">
                <OptimizedImage
                    src="/event.jpg"
                    alt="Événements professionnels"
                    className="w-full h-full object-cover opacity-85"
                // sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foc-blue/100 via-foc-blue/50 to-foc-blue/60" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50" /> */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenu compact */}
            <div className="relative z-10 container h-full flex items-center px-6 md:px-8">
                <motion.div
                    className="w-full max-w-4xl pl-8 md:pl-12 py-12 relative border-l-2 border-foc-red"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Lignes décoratives plus courtes */}
                    <div className='absolute top-0 left-0 w-[25%] bg-foc-red h-[1.5px]' />
                    <div className='absolute bottom-0 left-0 w-[40%] bg-foc-red h-[1.5px]' />

                    <div className="space-y-5">
                        <motion.span
                            className="text-xs md:text-sm flex items-center gap-2 text-white font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <ArrowRightToLine size={14} /> SALONS PROFESSIONNELS
                        </motion.span>

                        <motion.h1
                            className="text-3xl md:text-5xl lg:text-[3.5rem] leading-tight font-bold text-white"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="text-white">
                                Événements Premium
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-sm md:text-base text-blue-100/85 max-w-xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Rencontrez les leaders d'industrie et développez votre réseau professionnel.
                        </motion.p>

                        <motion.div
                            className="pt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button
                                size="lg"
                                className="group bg-foc-red hover:bg-foc-red text-white px-7 py-3 rounded-full text-base font-medium shadow-lg  transition-all"
                            >
                                Voir le calendrier
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Micro effet de vague subtil */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-400/5 to-transparent" />
        </section>
    );
};

export default EventHero;