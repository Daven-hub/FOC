import { motion, useScroll, useTransform } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowRightToLine } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EventHero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const navigate = useNavigate();
    
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    
    const images = [
        "/event.jpg",
        "/affaire.jpg",
        "/about.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            ref={ref}
            className="relative h-[100vh] min-h-[600px] overflow-hidden bg-foc-blue pt-16"
            style={{ isolation: 'isolate' }}
        >
            <div className="absolute inset-0 w-full h-full">
                {images.map((src, index) => (
                    <motion.div
                        key={src}
                        className="absolute inset-0 w-full h-full"
                        style={{ y: yBg, scale: 1.03 }}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: index === currentImage ? 1 : 0,
                            scale: index === currentImage ? 1.03 : 1.05
                        }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <OptimizedImage
                            src={src}
                            alt={`Événement professionnel ${index + 1}`}
                            className="w-full h-full object-cover object-left lg:object-center"
                            // priority={index === currentImage}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-foc-blue/90 via-foc-blue/50 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === currentImage ? 1 : 0 }}
                            transition={{ delay: 0.4, duration: 1.2 }}
                        />
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 container h-full flex items-center px-4 sm:px-6 md:px-8">
                <div className="w-full lg:w-3/5">
                    <motion.div
                        className="w-full max-w-2xl relative bg-black/30 lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                    >
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            <motion.span
                                className="text-xs sm:text-sm md:text-base flex items-center gap-2 text-white font-medium"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            >
                                <motion.span
                                    initial={{ rotate: -45, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <ArrowRightToLine size={16} />
                                </motion.span>
                                <motion.span transition={{ delay: 0.4 }}>
                                    ÉVÉNEMENTS EXCLUSIFS
                                </motion.span>
                            </motion.span>

                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ staggerChildren: 0.1 }}
                            >
                                <motion.span
                                    className="inline-block"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    Découvrez nos{" "}
                                </motion.span>
                                <motion.span
                                    className="inline-block text-white"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                                >
                                    Événements
                                </motion.span>
                            </motion.h1>

                            <motion.div
                                className="overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.p
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/85 max-w-2xl leading-relaxed"
                                    initial={{ y: 30 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.6, type: "spring", damping: 10 }}
                                >
                                    Rencontrez les leaders d'industrie et développez votre réseau professionnel 
                                    lors de nos événements exclusifs.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { staggerChildren: 0.1 } }}
                            >
                                <motion.div
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Button
                                        size="lg"
                                        onClick={() => navigate('/events')}
                                        className="group bg-foc-red hover:bg-foc-red/90 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <span className="flex items-center">
                                            <motion.span
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 3 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                Voir les événements
                                            </motion.span>
                                            <motion.span
                                                className="ml-2"
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <ArrowRight className="h-5 w-5" />
                                            </motion.span>
                                        </span>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-1.5 rounded-full transition-all ${index === currentImage ? 'bg-foc-red w-6' : 'bg-white/50 w-3'}`}
                        aria-label={`Aller à l'image ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    />
                ))}
            </div>
        </section>
    );
};

export default EventHero;