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
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mt-8 mb-4 text-theme">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-theme">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-semibold mt-5 mb-2 text-theme">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-semibold mt-4 mb-2 text-theme">
          {children}
        </h4>
      ),
      normal: ({ children }) => (
        <p className="text-base leading-relaxed my-4 text-gray-200">
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-5 space-y-2 text-gray-200">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-5 space-y-2 text-gray-200">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="ml-2">{children}</li>,
      number: ({ children }) => <li className="ml-2">{children}</li>,
    },
    marks: {
      link: ({ children, value }) => (
        <a
          href={value?.href}
          className="text-blue-500 underline hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return <PortableText value={value} components={components} />;
};
