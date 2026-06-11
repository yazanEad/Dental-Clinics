import { AiFillCaretRight } from "react-icons/ai"
import { Link } from "react-router-dom"
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../utils/motionPresets";

function Video({video}) {
  return (
    <div>
      <div className="container-fluid container-lg">
              <motion.div
                className="video-wrapper"
                variants={cardAppear}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                custom={0}
              >
                <video
                  className="video-element"
                  src={video} 
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <Link to="https://www.youtube.com/" className="video-icon">
                  <AiFillCaretRight />
                </Link>
              </motion.div>
            </div>
    </div>
  )
}

export default Video
