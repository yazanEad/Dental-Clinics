import heroImige from '../../assets/heroImage.jpg'
import { FiPhone } from "react-icons/fi";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <section className="hero-section pt-3 pb-5 ">
      <div className="container-fluid container-lg">
        <div className="row row-cols-1 row-cols-md-2 align-items-center  g-4">
          {/* Left */}
          <div className="col ">
            {/* Community */}
            <div className="community-box mb-3">
              <p className="mb-0 ms-2 small-text">
                Healthy smiles, happy lives.
              </p>
            </div>

            {/* Title */}
            <h1 className="hero-title">
              Bringing brighter smiles to your family
            </h1>

            {/* Description */}
            <p className="hero-desc mt-2">
              Experience personalized dental care designed to meet your unique
              needs. From preventive checkups to advanced oral health and
              confidence are always at their best.
            </p>

            {/* Buttons */}
            <div className="d-flex  gap-3 my-4">
              <button className="butt">Book Now</button>

              <div className=" d-flex  align-items-center gap-3">
                <div className="contactIcon">
                  <FiPhone />
                </div>
                <div>
                  <p className="mb-0 text-black contactTitle">Contact us</p>
                  <p className="mb-0 contactNmber">(123) 456 789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <motion.div className="col hero-img">
            <img src={heroImige} alt="" className="img-fluid " />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection

