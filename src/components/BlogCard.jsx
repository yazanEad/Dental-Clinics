import { FaArrowRight } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../utils/motionPresets";

function BlogCard({ blog, index = 0, animateOnLoad = false }) {
  const animationProps = animateOnLoad
    ? { initial: "hidden", animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: cardViewport };

  return (
    <motion.div
      className="col"
      variants={cardAppear}
      {...animationProps}
      custom={index}
    >
      <Link to={`/blogs/${blog.slug}`}>
        <div className="blog-card">
          <div className="blog-image">
            <img src={blog.coverImage} alt="" />
            <div className="arrow border">
              <FaArrowRight />
            </div>
          </div>
          <h6 className="my-3">{blog.title}</h6>
          <div className="d-flex align-items-center gap-3">
            <div className="dlog-time">
              <MdOutlineCalendarMonth />
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="dlog-time">
              <GoClock /> {blog.readingTime} min read
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default BlogCard
