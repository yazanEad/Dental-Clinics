import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const cards = [
  { id: 1, title: "React", text: "Build interfaces" },
  { id: 2, title: "Motion", text: "Create animations" },
  { id: 3, title: "UI", text: "Design experiences" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Test() {
  const [selected, setSelected] = useState(null);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "#f3f4f6",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Motion Cards
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 30,
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={item}
            layoutId={`card-${card.id}`}
            whileHover={{ y: -8, scale: 1.03 }}
            onClick={() => setSelected(card)}
            style={{
              padding: 24,
              borderRadius: 24,
              background: "white",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.45)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 420,
                padding: 32,
                borderRadius: 28,
                background: "white",
              }}
            >
              <h2>{selected.title}</h2>
              <p>{selected.text}</p>

              <button onClick={() => setSelected(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
