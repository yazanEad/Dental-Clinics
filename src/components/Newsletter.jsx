
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../utils/motionPresets";

function Newsletter() {
  return (
    <div className="container-fluid container-lg">
      <motion.div
        className="newsletter d-flex flex-column flex-md-row  justify-content-between align-items-center gap-4 "
        variants={cardAppear}
        initial="hidden"
        whileInView="visible"
        viewport={cardViewport}
        custom={0}
      >
        <h4>
          Subscribe for exclusive <br /> content & news
        </h4>
        <div>
          <div className="newsletter-form-wrapper">
            <input
              type="email"
              className="newsletter-input"
              placeholder="name@email.com"
            />
            <button className="butt bg-black">Subscribe</button>
          </div>
          <p className="mt-4 text-black">Enter your company email…</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Newsletter
