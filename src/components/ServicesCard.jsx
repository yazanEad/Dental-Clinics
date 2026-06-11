import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../utils/motionPresets";



function ServicesCard({ service, index = 0 }) {
  return (
      <motion.div
        className="service-card  col-12 col-md-6 col-lg-4"
        variants={cardAppear}
        initial="hidden"
        whileInView="visible"
        viewport={cardViewport}
        custom={index}
      >
        <Link to={`/services/${service.Slug}`}>
        <div className="service-img">
          <img src={service.CoverImage} alt="" />
        </div>
        <p className="d-flex align-items-center gap-2 mt-4 mb-3 rating">
          <FaStar className="star" /> {service.Rating}
        </p>
        <div className="d-flex justify-content-between ">
          <p className="service-title"> {service.Name}</p>
          <div className="arrow border">
            <FaArrowRight />
          </div>
        </div>
        <p className="service-desc">{service.ShortDescription}</p>
        </Link>
      </motion.div>
    
  );
}

export default ServicesCard;
