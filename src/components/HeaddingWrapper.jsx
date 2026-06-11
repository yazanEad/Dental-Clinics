import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../utils/motionPresets";

function HeaddingWrapper({titleOne,titleTwo}) {
  return (
    <div className="container-fluid container-md">
      <motion.div
        className=" text-center  col-md-8 col-lg-7 mx-auto "
        style={{paddingTop:"60px"}}
        variants={cardAppear}
        initial="hidden"
        whileInView="visible"
        viewport={cardViewport}
        custom={0}
      >
        <p className="titleOne">{titleOne}</p>
        <h2 className="titleTwo">{titleTwo}</h2>
      </motion.div>
    </div>
  );
}

export default HeaddingWrapper
