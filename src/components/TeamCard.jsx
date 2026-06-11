import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../utils/motionPresets";

function TeamCard({ doctor, index = 0}) {
  return (
    <motion.div
      className="col"
      variants={cardAppear}
      initial="hidden"
      whileInView="visible"
      viewport={cardViewport}
      custom={index}
    >
      <Link to={`/team/${doctor.slug}`}>
        <div className="doctor-card">
          <div className="doctor-image">
            <img src={doctor.image} alt="" />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4 mb-2 ">
            <p className="doctor-title mb-0"> {doctor.name}</p>
            <div className="arrow border">
              <FaArrowRight />
            </div>
          </div>
          <p className="doctor-role"> {doctor.role}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default TeamCard
