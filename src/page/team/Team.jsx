import { Link } from "react-router-dom";
import TalkToUs from "../../components/TalkToUs";
import TeamList from "../../components/TeamList";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../../utils/motionPresets";

function Team() {
  return (
    <div>
      <div>
        <div>
          <div className="container-fluid container-lg ">
            <motion.div
              className="text-center mt-5 "
              variants={cardAppear}
              initial="hidden"
              whileInView="visible"
              viewport={cardViewport}
              custom={0}
            >
              <p className="fw-medium">Meet our team</p>
              <h1 className=" my-4 col-12 col-lg-9 mx-auto">
                Professionals committed to exceptional care
              </h1>
              <Link to="/contact">
                <button className="butt">Contact us</button>
              </Link>
            </motion.div>
          </div>
          <TeamList />
          <TalkToUs />
        </div>
      </div>
    </div>
  );
}

export default Team
