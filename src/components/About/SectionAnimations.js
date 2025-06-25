// Animations partagées
export const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const hoverEffect = {
  scale: 1.02,
  transition: { duration: 0.3 },
};

export const tapEffect = {
  scale: 0.98,
};
