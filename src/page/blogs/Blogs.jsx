import { Link } from "react-router-dom";
import TalkToUs from "../../components/TalkToUs";
import { blogPosts } from "../../assets/assets";
import BlogList from "../../components/BlogList";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../../utils/motionPresets";

function Blogs() {
  return (
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
          <p className="fw-medium">Blogs</p>
          <h1 className=" my-4 col-12 col-lg-9 mx-auto">
            Stay updated with dental wellness tips
          </h1>
          <Link to="/contact">
            <button className="butt">Contact us</button>
          </Link>
        </motion.div>
      </div>
      <BlogList blogs={blogPosts} />
      <TalkToUs />
    </div>
  );
}

export default Blogs
