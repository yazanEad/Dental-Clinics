import { Link } from "react-router-dom";
import TalkToUs from "../../components/TalkToUs";
import { blogPosts } from "../../assets/assets";
import BlogList from "../../components/BlogList";

function Blogs() {
  return (
    <div>
      <div className="container-fluid container-lg ">
        <div className="text-center mt-5 ">
          <p className="fw-medium">Blogs</p>
          <h1 className=" my-4 col-12 col-lg-9 mx-auto">
            Stay updated with dental wellness tips
          </h1>
          <Link to="/contact">
            <button className="butt">Contact us</button>
          </Link>
        </div>
      </div>
      <BlogList blogs={blogPosts} />
      <TalkToUs />
    </div>
  );
}

export default Blogs
