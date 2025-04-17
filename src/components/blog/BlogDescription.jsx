"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { blogSocials, tags } from "@/src/staticData/blog/blog";

const BlogDescription = ({ blog }) => {
  const content = blog?.content?.raw;

  const images =
    blog?.projectDescription?.projectImage?.map((img) =>
      typeof img === "string" ? { src: img } : { src: img?.url }
    ) || [];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-12 text-gray-300">
      {/* ✅ Contenido Rich Text con texto casi blanco */}
      {content && (
        <div className="text-gray-200 text-lg leading-relaxed space-y-6">
          <RichText
            content={content}
            renderers={{
              p: ({ children }) => (
                <p className="text-gray-200 leading-relaxed">{children}</p>
              ),
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
              bold: ({ children }) => (
                <strong className="font-semibold text-white">{children}</strong>
              ),
              ul: ({ children }) => (
                <ul className="list-disc ml-6 space-y-2">{children}</ul>
              ),
              li: ({ children }) => <li>{children}</li>,
            }}
          />
        </div>
      )}

      {/* 🖼 Imágenes clicables con Lightbox */}
      {images.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl cursor-zoom-in"
              onClick={() => {
                setActiveIndex(i);
                setIsOpen(true);
              }}
            >
              <Image
                width={300}
                height={300}
                src={img.src}
                className="w-full object-cover rounded-xl"
                alt={`Blog image ${i + 1}`}
              />
            </div>
          ))}
        </div>
      )}

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={activeIndex}
        slides={images}
      />

      {/* 🔗 Footer: redes y tags */}
      <div className="flex flex-col gap-6 pt-10 border-t border-dashed border-greyBlack sm:flex-row sm:justify-between text-gray-300">
        <div className="flex gap-3 items-center">
          <p className="text-white">Share:</p>
          <ul className="flex items-center space-x-4">
            {blogSocials?.map((item, i) => (
              <li key={i}>
                <a href={item?.link}>{item?.Icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-white">Tags:</p>
          <div className="flex flex-wrap gap-2.5">
            {tags?.map((tag, i) => (
              <a
                key={i}
                href={tag?.link}
                className="inline-block border border-dashed border-greyBlack rounded-md text-sm py-1.5 px-2 transition-all hover:text-theme"
              >
                {tag?.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
