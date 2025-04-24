"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const BlogDescription = ({ blog }) => {
  const content = blog?.content;

  const images =
    blog?.projectDescription?.projectImage?.map((img) =>
      typeof img === "string" ? { src: img } : { src: img?.url }
    ) || [];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-12 text-gray-300">
      {/* ✅ Contenido del post */}
      {content && (
        <div className="mt-10 text-gray-200 text-lg leading-relaxed space-y-6">
          <PortableText
            value={content}
            components={{
              block: {
                h2: ({ children }) => (
                  <h2 className="mt-10 mb-4 text-2xl font-semibold text-theme">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 mb-3 text-xl font-semibold text-gray-100">
                    {children}
                  </h3>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-theme pl-4 italic text-gray-400 my-6">
                    {children}
                  </blockquote>
                ),
                normal: ({ children }) => (
                  <p className="text-gray-200 leading-relaxed">{children}</p>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc ml-6 space-y-2">{children}</ul>
                ),
              },
              listItem: {
                bullet: ({ children }) => <li>{children}</li>,
              },
            }}
          />
        </div>
      )}

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={activeIndex}
        slides={images}
      />
    </div>
  );
};

export default BlogDescription;
