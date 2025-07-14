export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Español", value: "es" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
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
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for SEO and accessibility.",
            },
          ],
        },
        {
          type: "object",
          name: "youtube",
          title: "YouTube Embed",
          fields: [
            {
              name: "url",
              type: "url",
              title: "YouTube Video URL",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https"],
                  allowRelative: false,
                }).regex(
                  /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/,
                  {
                    name: "YouTube URL",
                    invert: false,
                  }
                ),
            },
          ],
          preview: {
            select: {
              url: "url",
            },
            prepare({ url }) {
              return {
                title: "YouTube Video",
                subtitle: url,
              };
            },
          },
        },
        {
          type: "file",
          name: "attachment",
          title: "File Attachment",
          fields: [
            {
              name: "description",
              type: "string",
              title: "Description",
            },
          ],
        },
      ],
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
