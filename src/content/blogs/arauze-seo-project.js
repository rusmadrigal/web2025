import blogImage from "@/public/assets/img/blog/article1.png";

const post = {
  image: {
    thumbnail: blogImage.src,
    image: blogImage.src,
  },
  category: "SEO",
  date: "03 Jan 2025",
  title: "Ranking Behavior of Arauze.com with AI-Generated Content",
  slug: "arauze-seo-project",
  metaDescription:
    "Learn how Arauze.com recovered from an AI-content penalty through smart SEO fixes and strategic updates.",

  blogInfo: {
    projectHeading: {
      title: "Blog Details",
    },
    projectInfo: [
      { field: "POSTED BY", value: "Rus Madrigal" },
      { field: "CATEGORY", value: "SEO" },
      { field: "POSTED ON", value: "December 25, 2024" },
    ],
    projectDescription: {
      descriptionTitle: "Lessons learned from the 2024 SEO experiment",
      description:
        "This has been an experiment project started on January 1, 2024. Over the last 12 months the project has experienced increases in indexed keywords and organic traffic. In mid-August, 2024 the project suffered an algorithmic penalty for 100% AI-generated content. In the last few months I have managed to get some organic traffic back to the project by removing the AI-generated content and improving other important content.",
      descriptionListsTitle: "SEO experiment highlights",
      descriptionLists: [
        "It is an Italian language project, focused on finance.",
        "The project started on January 1, 2023.",
        "The project received a penalty for AI-generated content.",
      ],
      projectImage: [blogImage.src],
    },
  },
};

export default post;
