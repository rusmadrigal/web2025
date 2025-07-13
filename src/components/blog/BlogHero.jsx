import Image from "next/image";

const BlogHero = ({ blog, lang = "en" }) => {
  const isES = lang.startsWith("es"); // Detecta "es", "es-CR", "es-MX", etc.

  const headingTitle = isES ? "Reflexiones SEO" : "SEO Insights";

  const image = blog?.coverImage || "/assets/img/blog/article1.png";

  const infoList = [
    {
      field: isES ? "Publicado por" : "Posted by",
      value: blog?.author || (isES ? "Desconocido" : "Unknown"),
    },
    {
      field: isES ? "Fecha" : "Date",
      value: new Date(blog?.date).toLocaleDateString(isES ? "es-CR" : "en-US"),
    },
    {
      field: isES ? "Categorías" : "Categories",
      value:
        blog?.categories?.length > 0
          ? blog.categories.join(", ")
          : isES
            ? "Sin categoría"
            : "Uncategorized",
    },
  ];

  return (
    <div>
      {/* Etiqueta superior */}
      <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-gray-300 border border-gray-700 rounded-4xl">
        🧠 {headingTitle}
      </div>

      {/* Título del post */}
      <h1 className="text-3xl font-bold text-theme mt-7 lg:mt-10 lg:text-4xl leading-snug tracking-tight">
        {blog?.title}
      </h1>

      {/* Imagen destacada */}
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          width={800}
          height={500}
          src={image}
          className="w-full object-cover rounded-xl"
          alt="Blog Thumbnail Image"
        />
      </div>

      {/* Meta información */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-6 text-sm border-t border-b border-gray-700 py-4">
        {infoList.map((item, i) => (
          <div key={i}>
            <h6 className="font-semibold text-theme uppercase tracking-wide text-xs">
              {item?.field}
            </h6>
            <p className="text-gray-300">{item?.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHero;
