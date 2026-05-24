import BlogCard from "./BlogCard";

function BlogList({ blogs }) {
  return (
    <div className="container container-lg">
      <div className="blogList row row-cols-1   row-cols-md-2  row-cols-lg-3 g-4 ">
        {blogs.map((itme) => {
          return <BlogCard key={itme.slug} blog={itme} />;
        })}
      </div>
    </div>
  );
}

export default BlogList
