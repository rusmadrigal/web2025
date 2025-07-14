import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/src/lib/sanityImage";

export const PortableTextRenderer = ({ value, lang = "es" }) => {
  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null;
        return (
          <div className="my-6">
            <Image
              src={urlForImage(value).width(800).fit("max").url()}
              alt={value.alt || "Imagen del artículo"}
              width={800}
              height={500}
              className="rounded-xl mx-auto"
            />
          </div>
        );
      },
      youtube: ({ value }) => {
        const videoId = value.url.split("v=")[1]?.split("&")[0];
        return (
          <div className="my-6 aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full rounded-lg"
              title="YouTube video"
            ></iframe>
          </div>
        );
      },
      attachment: ({ value }) => (
        <div className="my-4">
          <a
            href={value.asset?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            📎{" "}
            {value.description ||
              (lang === "es" ? "Descargar archivo" : "Download file")}
          </a>
        </div>
      ),
    },
  };

  return <PortableText value={value} components={components} />;
};
