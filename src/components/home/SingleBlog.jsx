import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog, lang = "en" }) => {
  const { slug, title, date, coverImage, metaDescription } = blog;

  return (
    <Link href={`/${lang === "es" ? "es-cr/insights" : "insights"}/${slug}`}>
      <div className="grid md:gap-2 grid-cols-12 overflow-hidden article group bg-flashWhite dark:bg-metalBlack items-center rounded-2xl p-3.5 mt-8">
        {/* Imagen del blog */}
        <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
          <div className="block w-full overflow-hidden rounded-xl">
            <Image
              src={coverImage || "/fallback.jpg"}
              alt={title || "Blog post"}
              width={300}
              height={250}
              className="object-cover object-center w-full h-full min-h-[288px] transition-all duration-300 ease-in-out max-h-60 md:min-h-60 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Contenido del blog */}
        <div className="relative flex flex-col col-span-12 px-3 pt-6 pb-2 md:p-5 post-content sm:col-span-6 md:col-span-7">
          <div className="flex items-center gap-5 text-sm font-medium tags">
            <span className="transition-colors hover:text-theme">
              {new Date(date).toLocaleDateString(
                lang === "es" ? "es-CR" : "en-US"
              )}
            </span>
          </div>

          <div className="post-title mt-3 md:mt-4.5 mb-4 md:mb-6">
            <p className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl hover:text-theme">
              {title}
            </p>
          </div>

          {metaDescription && (
            <p className="text-sm text-black/80 dark:text-white/60 line-clamp-3 mb-4">
              {metaDescription}
            </p>
          )}

          <div className="read-details">
            <p className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white">
              {lang === "es" ? "Leer artículo" : "Read More"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBlog;
