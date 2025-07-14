"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PortableTextRenderer } from "../shared/PortableTextRenderer";

const BlogDescription = ({ blog }) => {
  const content = blog?.content;

  // Asegurar que el array de imágenes sea válido
  const images = Array.isArray(blog?.projectDescription?.projectImage)
    ? blog.projectDescription.projectImage.map((img) =>
        typeof img === "string" ? { src: img } : { src: img?.url }
      )
    : [];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-12 text-gray-300">
      {/* ✅ Contenido del blog con imágenes, YouTube, adjuntos, etc. */}
      {content && (
        <div className="mt-10 text-gray-200 text-lg leading-relaxed space-y-6 prose prose-invert max-w-none">
          <PortableTextRenderer value={content} lang="es" />
        </div>
      )}

      {/* Lightbox seguro: solo se renderiza si hay imágenes */}
      {images.length > 0 && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={activeIndex}
          slides={images}
        />
      )}
    </div>
  );
};

export default BlogDescription;
