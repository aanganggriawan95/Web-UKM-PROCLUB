import SectionTitle from "../Common/SectionTitle";
import SingleBPH from "./SingleTestimonial";
import DataBPH from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="BPH PRO-CLUB"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {DataBPH.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBPH blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;