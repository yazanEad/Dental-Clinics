import { useParams } from "react-router-dom";
import TalkToUs from "../../components/TalkToUs";
import { blogPosts } from "../../assets/assets";
import "./blogDetails.css"
import { useEffect } from "react";

function BlogDetails() {
    let { slug } = useParams();

    let blog = blogPosts.filter((ele) => ele.slug === slug)[0];
     useEffect(()=>{
        window.scrollTo(0, 0);
       },[slug])
  return (
    <div>
      <div className="container-fluid container-lg">
        <div className=" text-center py-5">
          <div className="d-flex align-items-center justify-content-center gap-3">
            <div className="dlog-time py-1 px-2 border  rounded-pill fw-medium">
              {blog.readingTime} min read
            </div>
            <div className="dlog-time fw-medium">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
          <h1 className="blogDetails_tilte my-3 col-12 col-lg-9 mx-auto">
            {blog.title}
          </h1>
        </div>
        <div className="blogDetails_image">
          <img src={blog.coverImage} alt="" />
        </div>
        <div className="blogDetails_container col-12 col-lg-10 mx-auto ">
          <h3 className="my-4">{blog.Content.IntroductionTitle} </h3>
          {blog.Content.intro.map((intro) => {
            return <p className="blogDetails_description ">{intro}</p>;
          })}
          {blog.Content.sections.map((item) => {
            return (
              <>
                <h4 className="my-4">{item.title}</h4>
                <p className="blogDetails_description ">{item.body}</p>
              </>
            );
          })}
        </div>
      </div>
      <TalkToUs />
    </div>
  );
}

export default BlogDetails
