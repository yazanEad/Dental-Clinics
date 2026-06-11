

import { BsBoxFill, BsHeartFill } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../../utils/motionPresets";

 function IntroductionCards() {
  return (
    <section className="">
      <div className="container-fluid container-lg">
        <div className="introduction row g-3">
          {/* Card 1 */}
          <motion.div
            className="col-12 col-md-4"
            variants={cardAppear}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            custom={0}
          >
            <div className="introduction-card">
              <div className="introduction-icon">
                <FaMagic />
              </div>
              <p className="introduction-title">Personalized care</p>
              <p>
                Every smile is unique, and our treatments are tailored to meet
                your specific needs. From preventive carefully.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="col-12 col-md-4"
            variants={cardAppear}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            custom={1}
          >
            <div className="introduction-card ">
              <div className="introduction-icon">
                <BsBoxFill />
              </div>
              <p className="introduction-title">Advanced technology</p>
              <p>
                We use state-of-the-art tools and techniques to deliver precise,
                efficient, and effective treatments.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="col-12 col-md-4"
            variants={cardAppear}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            custom={2}
          >
            <div className="introduction-card ">
              <div className="introduction-icon">
                <BsHeartFill />
              </div>
              <p className="introduction-title">Team that cares</p>
              <p>
                Our dedicated team combines expertise with compassion, ensuring
                you feel supported at every step.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionCards
