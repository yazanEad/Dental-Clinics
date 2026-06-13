import BlogCard from "./BlogCard";

function BlogList({ blogs, animateOnLoad = false }) {
  return (
    <div className="container container-lg">
      <div className="blogList row row-cols-1   row-cols-md-2  row-cols-lg-3 g-4 ">
        {blogs.map((itme, index) => {
          return (
            <BlogCard
              key={itme.slug}
              blog={itme}
              index={index}
              animateOnLoad={animateOnLoad}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogList
