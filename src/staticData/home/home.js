import BrandingIcon from "@/src/components/icons/home/BrandingIcon";
import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import {
  FaBlog,
  FaBriefcase,
  FaFolderOpen,
  FaGraduationCap,
  FaRegEnvelopeOpen,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { BiCheckDouble, BiCommentCheck } from "react-icons/bi";

import nextjsImage from "@/public/assets/img/skill/nextjs.svg";
import screamingfrogImage from "@/public/assets/img/skill/screamingfrog.svg";
import tailwindImage from "@/public/assets/img/skill/tailwind.svg";
import htmlImage from "@/public/assets/img/skill/html.svg";
import wordpressImage from "@/public/assets/img/skill/wordpress.svg";
import jsImage from "@/public/assets/img/skill/js.svg";
import semrusImage from "@/public/assets/img/skill/semrush.svg";

import partner1Image from "@/public/assets/img/partners/logo1.png";
import partner2Image from "@/public/assets/img/partners/logo2.png";
import partner3Image from "@/public/assets/img/partners/logo3.png";
import partner4Image from "@/public/assets/img/partners/logo4.png";
import partner5Image from "@/public/assets/img/partners/logo5.png";

import userImage from "@/public/assets/img/user-sidebar-thumb.png";
import userImageLight from "@/public/assets/img/user-sidebar-thumb-light.png";

import portfolioImage1Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage1 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage2Thumb from "@/public/assets/img/portfolio/portfolio-img2.png";
import portfolioImage2 from "@/public/assets/img/portfolio/portfolio-img2.png";

import portfolioImage3Thumb from "@/public/assets/img/portfolio/portfolio-img3.png";
import portfolioImage3 from "@/public/assets/img/portfolio/portfolio-img3.png";

import portfolioImage4Thumb from "@/public/assets/img/portfolio/portfolio-img4.png";
import portfolioImage4 from "@/public/assets/img/portfolio/portfolio-img4.png";

import projectInner1Image from "@/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "@/public/assets/img/blog/article-inner2.png";

import blog1Thumbnail from "@/public/assets/img/blog/article1.png";
import blog1Image from "@/public/assets/img/blog/article1.png";
import blog2Thumbnail from "@/public/assets/img/blog/article2.png";
import blog2Image from "@/public/assets/img/blog/article2.png";
import blog3Thumbnail from "@/public/assets/img/blog/article3.png";
import blog3Image from "@/public/assets/img/blog/article3.png";

import author1 from "@/public/assets/img/testimonial/author1.png";
import author2 from "@/public/assets/img/testimonial/author2.png";
import { IoHomeOutline } from "react-icons/io5";

export const introduce = {
  iconBox: {
    Icon: <IoHomeOutline className="text-theme" size={14} />,
    title: "WELCOME",
  },
  heading: {
    heading1: "Technical SEO",
    heading2: "& Data Enthusiast",
  },
  desc: (
    <p>
      {" "}
      <span className="font-medium text-black dark:text-white/90">
        Senior Technical SEO & Data Enthusiast
      </span>{" "}
      Passionate about SEO since 2009. Specialist in Technical SEO with
      experience in Web Development and Digital Analytics.
    </p>
  ),
  jobs: [
    {
      id: 1,
      title: "Available for work",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
    {
      id: 2,
      title: "English & Spanish",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
  ],
};

export const partners = [
  {
    imgUrl: partner1Image,
    altText: "Sportsbook Review",
    link: "https://bit.ly/3Zivq8z",
  },
  {
    imgUrl: partner2Image,
    altText: "Publicis Groupe",
    link: "#",
  },
  {
    imgUrl: partner3Image,
    altText: "Tripadvisor",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Tripadvisor",
    link: "#",
  },
  {
    imgUrl: partner5Image,
    altText: "Strategic Group",
    link: "#",
  },
];

export const technologies = [
  {
    id: 1,
    title: "HTML5 & CSS3",
    skill: "90",
    url: "#",
  },
  {
    id: 2,
    title: "NextJS",
    skill: "80",
    url: "#",
  },
  {
    id: 3,
    title: "SQL",
    skill: "70",
    url: "#",
  },
  {
    id: 4,
    title: "Looker Studio",
    skill: "90",
    url: "#",
  },
  {
    id: 5,
    title: "Tableau",
    skill: "60",
    url: "#",
  },
  {
    id: 6,
    title: "Power BI",
    skill: "60",
    url: "#",
  },
  {
    id: 7,
    title: "Adobe Analytics",
    skill: "65",
    url: "#",
  },
  {
    id: 8,
    title: "Jira Software",
    skill: "70",
    url: "#",
  },
  {
    id: 9,
    title: "Semrush",
    skill: "90",
    url: "#",
  },
  {
    id: 10,
    title: "Screaming Frog",
    skill: "90",
    url: "#",
  },
  {
    id: 11,
    title: "Hrefs",
    skill: "90",
    url: "#",
  },
  {
    id: 9,
    title: "WordPress",
    skill: "90",
    url: "#",
  },
];

export const userDetails = [
  {
    field: "Phone",
    value: "+(506) 8777 3420",
  },
  {
    field: "WahtsApp",
    value: "+(506) 8777 3420",
  },
  {
    field: "Language",
    value: "English, Spanish",
  },
  {
    field: "Email",
    value: "rusbenmadrigal@gmail.com",
  },
  {
    field: "GitHub",
    value: "github.com/soyrussmadrigal",
  },
];

export const userDetailsSidebar = {
  userImage: userImage,
  userImageLight: userImageLight,
  userName: "Rus Madrigal",
  designations: ["Technical SEO", "Data enthusiast", "Front-End Developer"],
  basicInfo: [
    {
      id: 1,
      field: "Residence",
      value: "Costa Rica",
    },
    {
      id: 2,
      field: "City",
      value: "San Jose",
    },
    {
      id: 3,
      field: "SEO since",
      value: "2009",
    },
  ],
  skillsInfo: [
    {
      id: 1,
      name: "HTML",
      value: 90,
    },
    {
      id: 2,
      name: "CSS",
      value: 80,
    },
    {
      id: 3,
      name: "JS",
      value: 90,
    },
    {
      id: 4,
      name: "NextJS",
      value: 70,
    },
  ],
};

export const projectExperiences = [
  {
    title: "Years Of Experience",
    count: 14,
    postFix: true,
  },
  {
    title: "Travel Indsutry",
    count: 10,
    postFix: true,
  },
  {
    title: "Financial Industry",
    count: 7,
    postFix: true,
  },
  {
    title: "Enterprise Industry",
    count: 10,
    postFix: false,
  },
];

export const services = {
  servicesHeading: {
    icon: <FaBriefcase className="text-theme" />,
    title: "SERVICES",
    heading: "My",
    coloredHeading: "Knowledge",
    description:
      "Here’s a detailed summary of my expertise, highlighting my skills in SEO, Analytics, and Coding. These areas reflect a blend of technical proficiency and strategic insight, making me well-suited to drive impactful digital growth and performance.",
  },
  servicesData: [
    {
      id: 1,
      number: "01",
      title: "Technical SEO",
      desc: "In-depth expertise in technical SEO, with a strong focus on optimizing website performance.",
      icon: <WebDevIcon />,
    },
    {
      id: 2,
      number: "02",
      title: "On-page SEO",
      desc: "Comprehensive knowledge of on-page SEO, including content optimization, internal linking strategies & metadata.",
      icon: <UiUxIcon />,
    },
    {
      id: 3,
      number: "03",
      title: "Web Analytics",
      desc: "Proficient in web analytics tools and platforms, including GA-4, Tag Manager, Tableau, Adobe Analytics, and Looker Studio.",
      icon: <SeoIcon />,
    },
    {
      id: 4,
      number: "04",
      title: "General SEO Consulting",
      desc: "Experienced in SEO consulting, including resolving queries, conducting audits, and providing strategic guidance to enhance online visibility.",
      icon: <EmailIcon />,
    },
  ],
};

export const skills = {
  skillsHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "SKILLS",
    heading: "Tools &",
    coloredHeading: "Tech Stack",
    description:
      "I am proficient in a variety of SEO tools and tech stacks. Below is a list of the ones I use most frequently in my daily work.",
  },
  skillsData: [
    {
      image: nextjsImage?.src,
      percent: 70,
      name: "NextJS",
    },
    {
      image: htmlImage?.src,
      percent: 85,
      name: "HTML5",
    },
    {
      image: tailwindImage?.src,
      percent: 70,
      name: "Tailwind",
    },
    {
      image: jsImage?.src,
      percent: 80,
      name: "JavaScript",
    },
    {
      image: wordpressImage?.src,
      percent: 85,
      name: "WordPress",
    },
    {
      image: screamingfrogImage?.src,
      percent: 80,
      name: "Screaming Frog",
    },
    {
      image: semrusImage?.src,
      percent: 90,
      name: "Semrush",
    },
  ],
};

export const resume = {
  resumeHeading: {
    icon: <FaFolderOpen className="text-theme" />,
    title: "RESUME",
    heading: "Work",
    coloredHeading: "Experience",
    description:
      "Below, you will find information about the companies I've worked for and the roles I've held. This list provides a summary of the most important details (I value your time), but it does not include every company I have worked for.",
  },
  resumeData: [
    {
      platform: "Publicis Groupe",
      duration: "Feb, 2023 - Current",
      position: "Media Delivery Associate Director",
      description:
        "SEO Lead for Publicis Groupe in the Global Delivery LATAM division. In addition to managing SEO strategies for European brands, I hold a leadership role in LATAM, responsible for growing the team and collaborating with the business team when new SEO clients are onboarded.",
    },
    {
      platform: "SportsBook Review",
      duration: "2022 - 2023",
      position: "Technical SEO Manager",
      description:
        "I first joined SportsBook Review in 2016, took a brief hiatus, and returned in 2022. I worked as a Technical SEO Manager, overseeing all aspects of code-level optimization for the main website as well as other sites under the parent brand. My work primarily involved programming languages such as PHP and ReactJS.",
    },
    {
      platform: "TripAdvisor",
      duration: "2018-2021",
      position: "Technical SEO Specialist",
      description:
        "I had the opportunity to work with Tripadvisor as a contractor. My role focused on code-level optimization, and I also collaborated with the web analytics team.",
    },
  ],
};

export const educations = {
  educationsHeading: {
    icon: "",
    title: "",
    heading: "My",
    coloredHeading: "Education",
    description:
      "I’m someone who values experience and proactivity over degrees. I pursued a Bachelor's degree in Business Administration with an emphasis in Marketing at U Latina, San Pedro campus. Additionally, I have completed online studies through various platforms, covering topics such as GA-4, Semrush, Tableau, Adobe, and more.",
  },
  educationsData: [
    {
      institution: "U Latina, Costa Rica",
      duration: "2009-2014",
      degree: "Business Bachelor Degree",
      description:
        "Bachelor's Degree in Business Administration with an emphasis in Marketing.",
    },
    {
      institution: "Boston Institute, Costa Rica",
      duration: "2012 - 2017",
      degree: "Front-End Development",
      description:
        "Introduction to Object-Oriented Programming with a focus on Front-End Development. During this course, I learned to work with PHP, JavaScript, CSS, HTML, frameworks, and other technologies centered on Front-End development.",
    },
    {
      institution: "U Sabana, Colombia",
      duration: "2023",
      degree: "Agile Methodologies",
      description:
        "Project management preparation program focused on Agile methodologies, such as Scrum.",
    },
  ],
};

export const portfolio = {
  portfolioHeading: {
    icon: <GrTasks className="text-theme" />,
    title: "PORTFOLIO",
    heading: "Featured ",
    coloredHeading: "Projects",
    description:
      "Below, you can find some of the projects I’ve worked on. These are personal projects categorized as “experiments,” so they do not reflect a commercial focus. Additionally, all the information shared is 100% my own work.",
  },
  projectsData: [
    {
      id: 1,
      image: {
        thumbnail: portfolioImage1Thumb?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "SEO Experiment",
        thumbnailText2: "Optimization",
      },
      type: "seo",
      title: "Arauze.com - SEO experiment project in the Italian market",
      slug: "arauze-website-experiment",
      
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "TYPE",
          value: "Experiment",
        },
        {
          field: "MARKET:",
          value: "Italyn",
        },
        {
          field: "DURATION",
          value: "12 months",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Arauze.com is an experimental project where various tests have been conducted to analyze how Google's algorithm behaves throughout 2023.",
        descriptionLists: [
          "It is an Italian language project, focused on finance.",
          "The project started on January 1, 2023.",
          "The project received a penalty for AI-generated content.",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    /*
    {
      id: 2,
      image: {
        thumbnail: portfolioImage2Thumb?.src,
        image: portfolioImage2?.src,
        thumbnailText1: "SEO",
        thumbnailText2: "Optimization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 3,
      image: {
        thumbnail: portfolioImage3Thumb?.src,
        image: portfolioImage3?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 4,
      image: {
        thumbnail: portfolioImage4Thumb?.src,
        image: portfolioImage4?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    */
  ],
};

export const blogs = {
  blogsHeading: {
    icon: <FaBlog className="text-theme" />,
    title: "BLOG",
    heading: "Latest",
    coloredHeading: "Insights",
    description:
      "In this section, you can find the latest SEO articles related to the projects I’ve created, as well as interesting insights into the search engine industry.",
  },
  blogsData: [
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "SEO",
      date: "03 Jan 2025",
      title: "Ranking Behavior of Arauze.com with AI-Generated Content",
      slug: "arauze-seo-project",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Rus Madrigal",
          },
          {
            field: "CATEGORY:",
            value: "SEO",
          },
          {
            field: "POSTED ON:",
            value: "December 25, 2024",
          },
        ],
        projectDescription: {
          descriptionTitle: "Lessons learned from the 2024 SEO experiment",
          description:
            "This has been an experiment project started on January 1, 2024. Over the last 12 months the project has experienced increases in indexed keywords and organic traffic.In mid-August, 2024 the project suffered an algorithmic penalty for 100% AI generated content. In the last few months I have managed to get some organic traffic back to the project by removing the AI-generated content and improving other important content.",
          descriptionListsTitle: "SEO experiment highlights",
          descriptionLists: [
            "It is an Italian language project, focused on finance.",
            "The project started on January 1, 2023.",
            "The project received a penalty for AI-generated content.",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    /*
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog3Thumbnail?.src,
        image: blog3Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Homeward bound: Crafting a productive home office",
      slug: "homeward-bound-crafting-a-productive-home-office",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    */
  ],
};

export const testimonials = {
  testimonialsHeading: {
    icon: <BiCommentCheck className="text-theme" />,
    title: "TESTIMONIAL",
    heading: "LinkedIn",
    coloredHeading: "Reviews",
    description:
      "Here are some reviews extracted from my LinkedIn profile. You can verify their authenticity by visiting my official profile: linkedin.com/in/rusmadrigal/.",
  },
  testimonialsData: [
    {
      id: 1,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Discovering true and good SEO's in Central America is something like
          finding a needle in a haystack.{" "}
          <span className="font-semibold text-theme">
            If you come upon Rusbell you have found a golden needle. Take care
            of it!
          </span>{" "}
        </div>
      ),
      name: "Rodigo De Bedout",
      position: "Web Design & Development",
    },
    {
      id: 2,
      image: author2?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          <span className="font-semibold text-theme">Rusbell</span> is a multi
          talented young man with excellent customer service skills. He always
          responds with a professional, up beat and genuinely attentive attitude
          to all work projects under his responsibility.
        </div>
      ),
      name: "Faith Anne Mulvihill",
      position: "Licensed Real Estate Broker Chicago",
    },
    /*
    {
      id: 3,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
    */
  ],
};

export const contactInfo = {
  contactInfoHeading: {
    icon: <FaRegEnvelopeOpen className="text-theme" />,
    title: "CONTACT",
    heading: "Contact",
    coloredHeading: "Me.",
    description:
      "If you need to get in touch with me, please use the contact methods listed below. I’ll do my best to respond as quickly as possible.",
  },
  contactInfoData: [
    {
      id: 1,
      field: "Location",
      data: "San Jose, Costa Rica",
      Icon: <LocationIcon />,
    },
    {
      id: 2,
      field: "E-mail",
      data: "rusbenmadrigal@gmail.com",
      Icon: <EmailIcon />,
    },
    {
      id: 3,
      field: "WhatsApp",
      data: "+506 8777 3420",
      Icon: <PhoneIcon />,
    },
  ],
};
