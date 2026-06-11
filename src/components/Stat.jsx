import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../utils/motionPresets";

function Stat({item, index = 0}) {
  return (
    <motion.div
      variants={cardAppear}
      initial="hidden"
      whileInView="visible"
      viewport={cardViewport}
      custom={index}
    >
      <div  className="col">
        <h1>{item.value}</h1>
        <p>{item.label}</p>
      </div>
    </motion.div>
  );
}

export default Stat
