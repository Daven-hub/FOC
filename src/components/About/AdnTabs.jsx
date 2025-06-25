import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sectionFade, item, hoverEffect, tapEffect } from "./SectionAnimations";

export default function AdnTabs() {
  const [activeTab, setActiveTab] = useState("mission");

  const TabContent = {
    mission: {
      title: "Notre mission",
      text:
        "Créer des passerelles concrètes entre les écosystèmes africains et canadiens, pour un développement mutuellement bénéfique.",
      img: "/mission.png",
    },
    vision: {
      title: "Notre vision",
      text:
        "Être un acteur de référence en matière de coopération Canada–Afrique, reconnu pour son efficacité, son expertise terrain et son impact.",
      img: "/vision.png",
    },
    valeurs: {
      title: "Nos valeurs",
      list: ["Intégrité", "Innovation", "Engagement", "Partage", "Excellence", "Transparence"],
      img: "/value.png",
    },
  };

  return (
    <motion.section
      className="py-20 px-6 md:px-20 bg-[#202c45] text-white"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold mb-12 text-center" variants={item}>
          Notre <span className="text-blue-400">ADN</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {Object.keys(TabContent).map((tab) => (
            <motion.button
              key={tab}
              className={`px-6 py-3 rounded-full font-medium capitalize ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={hoverEffect}
              whileTap={tapEffect}
              variants={item}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <motion.div className="bg-gray-800 rounded-2xl p-8 md:p-12 min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === "mission" && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">
                    {TabContent.mission.title}
                  </h3>
                  <p className="text-lg">{TabContent.mission.text}</p>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <img
                      src={TabContent.mission.img}
                      alt={TabContent.mission.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-30" />
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "vision" && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">
                    {TabContent.vision.title}
                  </h3>
                  <p className="text-lg">{TabContent.vision.text}</p>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <img
                      src={TabContent.vision.img}
                      alt={TabContent.vision.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-30" />
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "valeurs" && (
              <motion.div
                key="valeurs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">
                    {TabContent.valeurs.title}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TabContent.valeurs.list.map((value) => (
                      <motion.li
                        key={value}
                        className="flex items-center gap-2 bg-gray-700 px-4 py-3 rounded-lg"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        {value}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <img
                      src={TabContent.valeurs.img}
                      alt={TabContent.valeurs.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-30" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
