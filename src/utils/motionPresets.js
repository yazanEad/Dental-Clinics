export const cardViewport = {
  once: true,
  amount: 0.25,
};

export const cardAppear = {
  hidden: {
    opacity: 0,
    y: 42,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      mass: 0.9,
      delay: index * 0.08,
    },
  }),
};
