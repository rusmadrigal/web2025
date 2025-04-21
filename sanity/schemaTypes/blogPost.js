export default {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
      { name: "title", title: "Title", type: "string" },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
      },
      { name: "metaTitle", title: "Meta Title", type: "string" },
      { name: "metaDescription", title: "Meta Description", type: "text" },
      { name: "excerpt", title: "Excerpt", type: "text" },
      { name: "date", title: "Date", type: "datetime" },
      {
        name: "coverImage",
        title: "Cover Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "author",
        title: "Author",
        type: "reference",
        to: [{ type: "author" }],
      },
      {
        name: "categories",
        title: "Categories",
        type: "array",
        of: [{ type: "reference", to: [{ type: "category" }] }],
      },
    ],
  };
  