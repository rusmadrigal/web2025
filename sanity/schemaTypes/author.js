export default {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
      { name: "name", title: "Name", type: "string" },
      {
        name: "bio",
        title: "Bio",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
      },
    ],
  };
  