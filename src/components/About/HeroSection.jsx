import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: 'url(/recrutment.png)' }}
    >
      {/* Overlay sombre avec fondu */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-30"
        style={{ opacity: opacityBg }}
      />

      {/* Effet de parallaxe sur l'image de fond */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/recrutment.png)', y: yBg, zIndex: -1 }}
      />

      {/* Contenu centré */}
      <motion.div
        className="relative z-10 bg-black bg-opacity-60 p-6 md:p-8 rounded-xl text-white text-center max-w-3xl backdrop-blur-sm mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          À propos de <span className="text-blue-400">FOC Inc.</span>
        </motion.h1>
        <motion.p
          className="mt-2 text-base md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Créer des ponts économiques et éducatifs entre le Canada et l'Afrique
          francophone
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full flex items-center mx-auto gap-2 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorer nos services <FiChevronDown className="animate-bounce" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Chevron flottant en bas */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FiChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
