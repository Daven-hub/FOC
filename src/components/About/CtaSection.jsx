import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";

export default function CtaSection() {
  return (
    <motion.section
      className="relative py-32 px-6 md:px-20 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('/pattern.png')] bg-repeat"></div>
      </motion.div>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Prêt à <span className="text-blue-300">collaborer</span> avec nous ?
        </motion.h2>
        <motion.p
          className="text-xl mb-10 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Participez à nos événements ou contactez-nous pour un partenariat
          stratégique entre le Canada et l’Afrique.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail /> Nous contacter
          </motion.button>
          <motion.button
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white hover:text-blue-900 transition"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMapPin /> Nos événements
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
