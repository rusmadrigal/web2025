"use client";

import { useState } from "react";
import Button from "../ui/Button";
import SectionHeading from "../shared/SectionHeading";
import SingleBlog from "./SingleBlog";
import { allBlogs } from "@/src/content/blogs/allBlogs";

const Blog = () => {
  const [showMore, setShowMore] = useState(3);

  // 🔍 Filtrar artículos válidos
  const validBlogs = allBlogs.filter(
    (blog) =>
      blog?.slug &&
      blog?.title &&
      blog?.image?.thumbnail &&
      blog?.category &&
      blog?.date
  );

  return (
    <div
      data-scroll-index="6"
      id="blog"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <SectionHeading
          title="BLOG"
          heading="Latest"
          coloredHeading="Insights"
          description="In this section, you can find the latest SEO articles related to the projects I’ve created, as well as interesting insights into the search engine industry."
        />

        <div className="blog-list md:space-y-7.5 space-y-5">
          {validBlogs.slice(0, showMore).map((blog, i) => (
            <SingleBlog key={i} blog={blog} />
          ))}
        </div>

        {showMore < validBlogs.length && (
          <div className="mt-10 text-center more-blogs md:mt-13">
            <Button text="More Post" onClick={() => setShowMore(validBlogs.length)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
