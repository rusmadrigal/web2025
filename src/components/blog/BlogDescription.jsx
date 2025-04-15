"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { blogSocials, tags } from "@/src/staticData/blog/blog";

const BlogDescription = ({ blog }) => {
  const description = blog?.blogInfo?.projectDescription;
  const images = description?.projectImage?.map((img) => ({ src: img }));

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div>
        <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
          {description?.descriptionTitle}
        </h3>
        <p className="text-regular leading-[2]">{description?.description}</p>
        <br />
        <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
          {description?.descriptionListsTitle}
        </h3>
        <ul className="text-regular leading-[2] list-disc ml-5 my-4">
          {description?.descriptionLists?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Imágenes clicables con Lightbox */}
        <div className="grid gap-5 my-8 sm:grid-cols-2 md:gap-8">
          {description?.projectImage?.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl xl:rounded-2xl cursor-zoom-in"
              onClick={() => {
                setActiveIndex(i);
                setIsOpen(true);
              }}
            >
              <Image
                width={300}
                height={300}
                src={item}
                className="w-full"
                alt={`Blog image ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Lightbox component */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={activeIndex}
          slides={images}
        />
      </div>

      {/* Footer con redes y tags */}
      <div className="items-start justify-between gap-8 pt-5 my-10 border-t border-dashed blog-footer max-sm:space-y-4 sm:flex border-greyBlack">
        <div className="flex flex-1 gap-3">
          <p className="text-black dark:text-white">Share:</p>
          <ul className="flex items-center space-x-4">
            {blogSocials?.map((item, i) => (
              <li key={i}>
                <a href={item?.link}>{item?.Icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 gap-3">
          <p className="text-black dark:text-white">Tags:</p>
          <div className="flex flex-wrap items-center gap-2.5">
            {tags?.map((tag, i) => (
              <a
                key={i}
                href={tag?.link}
                className="inline-block border border-dashed border-greyBlack rounded-md text-sm py-1.5 px-2 transition-all hover:text-theme dark:hover:text-white"
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
