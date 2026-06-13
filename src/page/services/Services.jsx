import ServicesList from "../../components/ServicesList";
import TalkToUs from "../../components/TalkToUs";
import {  services } from "../../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../../utils/motionPresets";

function Services() {
  return (
    <div>
      <div className="container-fluid container-lg ">
        <div className="text-center mt-5 ">
          <motion.p
            className="fw-medium"
            variants={cardAppear}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            custom={0}
          >
            Services
          </motion.p>
          <motion.h1
            className=" my-4 col-12 col-lg-9 mx-auto"
            variants={cardAppear}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            custom={1}
          >
            Expertise in preventive and restorative care
          </motion.h1>
          <motion.div
            variants={cardAppear}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            custom={2}
          >
            <Link to="/contact">
              <button className="butt">Contact us</button>
            </Link>
          </motion.div>
        </div>
      </div>
      <ServicesList services={services} animateOnLoad />
      <TalkToUs />
    </div>
  );
}

export default Services
