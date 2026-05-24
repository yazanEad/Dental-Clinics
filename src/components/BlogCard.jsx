import { FaArrowRight } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="col">
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
    </div>
  );
}

export default BlogCard
