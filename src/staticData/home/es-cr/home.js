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

import nextjsImage from "/public/assets/img/skill/nextjs.svg";
import screamingfrogImage from "/public/assets/img/skill/screamingfrog.svg";
import tailwindImage from "/public/assets/img/skill/tailwind.svg";
import htmlImage from "/public/assets/img/skill/html.svg";
import wordpressImage from "/public/assets/img/skill/wordpress.svg";
import jsImage from "/public/assets/img/skill/js.svg";
import semrusImage from "/public/assets/img/skill/semrush.svg";

import partner1Image from "/public/assets/img/partners/logo1.png";
import partner2Image from "/public/assets/img/partners/logo2.png";
import partner3Image from "/public/assets/img/partners/logo3.png";
import partner4Image from "/public/assets/img/partners/logo4.png";
import partner5Image from "/public/assets/img/partners/logo5.png";

import userImage from "/public/assets/img/user-sidebar-thumb.png";
import userImageLight from "/public/assets/img/user-sidebar-thumb-light.png";

import portfolioImage1Thumb from "/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage1 from "/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage2Thumb from "/public/assets/img/portfolio/portfolio-img2.png";
import portfolioImage2 from "/public/assets/img/portfolio/portfolio-img2.png";

import portfolioImage3Thumb from "/public/assets/img/portfolio/portfolio-img3.png";
import portfolioImage3 from "/public/assets/img/portfolio/portfolio-img3.png";

import portfolioImage4Thumb from "/public/assets/img/portfolio/portfolio-img4.png";
import portfolioImage4 from "/public/assets/img/portfolio/portfolio-img4.png";

import projectInner1Image from "/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "/public/assets/img/blog/article-inner2.png";

import blog1Thumbnail from "/public/assets/img/blog/article1.png";
import blog1Image from "/public/assets/img/blog/article1.png";
import blog2Thumbnail from "/public/assets/img/blog/article2.png";
import blog2Image from "/public/assets/img/blog/article2.png";
import blog3Thumbnail from "/public/assets/img/blog/article3.png";
import blog3Image from "/public/assets/img/blog/article3.png";

import author1 from "/public/assets/img/testimonial/author1.png";
import author2 from "/public/assets/img/testimonial/author2.png";
import { IoHomeOutline } from "react-icons/io5";

export const introduce = {
  iconBox: {
    Icon: <IoHomeOutline className="text-theme" size={14} />,
    title: "Inicio",
  },
  heading: {
    heading1: "Consultor SEO",
    heading2: "Costa Rica 🇨🇷",
  },
  desc: (
    <p>
      {" "}
      <span className="font-medium text-black dark:text-white/90">
        Consultor SEO en Costa Rica con más de 15 años de experiencia.
      </span>{" "}
      Me especializo en optimización de sitios web para motores de búsqueda como
      Google, Bing y Agentes AI tales como: ChatGPT & DeepSeek.
    </p>
  ),
  jobs: [
    {
      id: 1,
      title: "Disponible",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
    {
      id: 2,
      title: "Inglés & Español",
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
    field: "Teléfono",
    value: "+(506) 8777 3420",
  },
  {
    field: "WahtsApp",
    value: "+(506) 8777 3420",
  },
  {
    field: "Idioma",
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
  designations: ["Consultor SEO", "Front-End Developer", "Pura Vida!"],
  basicInfo: [
    {
      id: 1,
      field: "Locación",
      value: "Costa Rica",
    },
    {
      id: 2,
      field: "Ciudad",
      value: "San Jose",
    },
    {
      id: 3,
      field: "SEO desde",
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
    title: "SERVICIOS",
    heading: "Servicios",
    coloredHeading: "SEO",
    description:
      "Dentro del Posicionamiento web en motores de búsqueda (SEO) hay diferentes servicios, los cuales optimizan un área puntual del un proyecto. Estos servicios pueden ser utilizados de forma independiente o en conjunto, dependiendo de las necesidades del cliente. A continuación, se presentan los servicios que ofrezco:",
  },
  servicesData: [
    {
      id: 1,
      number: "01",
      title: "SEO Técnico",
      desc: "El SEO técnico se centra en la optimización de la infraestructura del sitio web, asegurando que sea accesible y comprensible para los motores de búsqueda.",
      icon: <WebDevIcon />,
    },
    {
      id: 2,
      number: "02",
      title: "SEO On-page",
      desc: "El SEO on-page se enfoca en la optimización del contenido y la estructura de las páginas individuales para mejorar su relevancia y visibilidad en los motores de búsqueda.",
      icon: <UiUxIcon />,
    },
    {
      id: 3,
      number: "03",
      title: "SEO Local",
      desc: "El SEO local se centra en optimizar la presencia en línea de un negocio para atraer tráfico local relevante, mejorando su visibilidad en búsquedas geográficas.",
      icon: <SeoIcon />,
    },
    {
      id: 4,
      number: "04",
      title: "SEO Internacional",
      desc: "El SEO internacional se enfoca en optimizar un sitio web para atraer tráfico de diferentes países y regiones, teniendo en cuenta las diferencias culturales y lingüísticas.",
      icon: <EmailIcon />,
    },
  ],
};

export const skills = {
  skillsHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "SKILLS",
    heading: "Stacks",
    coloredHeading: "Tecnológicos",
    description:
      "Un Stack Tecnológico está compuesto por el lenguaje con el que tu sitio está creado, así como otros elementos que lo hacen accesible al usuario. En gran medida la estrategia SEO depende del tipo de tecnología que se haya desplegado en tu proyecto, a continuación te cuento algunas de las tecnologías con las que suelo trabajar.",
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
    title: "CV",
    heading: "Experiencia",
    coloredHeading: "Laboral",
    description:
      "Soy un profesional con más de 14 años de experiencia en SEO, especializado en la optimización de sitios web para motores de búsqueda como Google y Bing. He trabajado en diversas industrias, incluyendo viajes, finanzas y comercio electrónico. Mi enfoque se centra en el SEO técnico, la optimización on-page y la creación de estrategias efectivas para mejorar la visibilidad y el rendimiento de los sitios web.",
  },
  resumeData: [
    {
      platform: "Publicis Groupe",
      duration: "Feb, 2023 - Current",
      position: "Media Delivery Associate Director",
      description:
        "SEO Lead para Publicis Groupe en la división Global Delivery LATAM. Además de gestionar las estrategias SEO para las marcas europeas, tengo un papel de liderazgo en LATAM, responsable del crecimiento del equipo y de colaborar con el equipo de negocio cuando se incorporan nuevos clientes SEO.",
    },
    {
      platform: "SportsBook Review",
      duration: "2022 - 2023",
      position: "Technical SEO Manager",
      description:
        "Me uní a SportsBook Review por primera vez en 2016, me tomé un breve descanso y volví en 2022. Trabajé como Director Técnico de SEO, supervisando todos los aspectos de la optimización a nivel de código para el sitio web principal, así como otros sitios bajo la marca matriz. Mi trabajo implicaba principalmente lenguajes de programación como PHP y ReactJS.",
    },
    {
      platform: "TripAdvisor",
      duration: "2018-2021",
      position: "Technical SEO Specialist",
      description:
        "Tuve la oportunidad de trabajar con Tripadvisor como contratista. Mi función se centraba en la optimización a nivel de código, y también colaboraba con el equipo de analítica web.",
    },
  ],
};

export const educations = {
  educationsHeading: {
    icon: "",
    title: "",
    heading: "Educación",
    coloredHeading: "Universitaria",
    description:
      "Cursé la Licenciatura en Administración de Empresas con énfasis en Mercadotecnia en la U Latina, campus San Pedro. Adicionalmente, he completado estudios en línea a través de varias plataformas, cubriendo temas como GA-4, Semrush, Tableau, Adobe, y más.",
  },
  educationsData: [
    {
      institution: "U Latina, Costa Rica",
      duration: "2009-2014",
      degree: "Lic. En Administración de Empresas",
      description:
        "Licenciatura en Administración de Empresas con énfasis en Mercadotecnia. Durante mis estudios, adquirí conocimientos en diversas áreas de la administración, incluyendo marketing, finanzas y gestión empresarial.",
    },
    {
      institution: "Boston Institute, Costa Rica",
      duration: "2012 - 2017",
      degree: "Front-End Development",
      description:
        "Programa de desarrollo Front-End, donde adquirí habilidades en HTML, CSS y JavaScript. Aprendí a crear sitios web interactivos y atractivos utilizando estas tecnologías.",
    },
    {
      institution: "U Sabana, Colombia",
      duration: "2023",
      degree: "Agile Project Management",
      description:
        "Programa de gestión de proyectos ágiles, donde aprendí a aplicar metodologías ágiles en la gestión de proyectos. Esto me permitió mejorar la eficiencia y la colaboración en equipos de trabajo.",
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
    title: "OPINIONES",
    heading: "Reseñas en",
    coloredHeading: "LinkedIn",
    description:
      "Aquí tienes algunas reseñas extraídas de mi perfil de LinkedIn. Puedes verificar su autenticidad visitando mi perfil oficial: linkedin.com/in/rusmadrigal/.",
  },
  testimonialsData: [
    {
      id: 1,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Descubrir verdaderos y buenos SEO en Centroamérica es algo así como
          encontrar una aguja en un pajar.{" "}
          <span className="font-semibold text-theme">
            Si te encuentras con Rus, has encontrado una aguja de oro. ¡Cuídale!
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
          <span className="font-semibold text-theme">Rus</span> es un joven
          polifacético con excelentes dotes de atención al cliente. Siempre
          responde con una actitud profesional, animada y genuinamente atenta a
          todos los proyectos de trabajo bajo su responsabilidad.
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
    title: "CONTACTO",
    heading: "¿Necesitas",
    coloredHeading: "SEO?",
    description:
      "Si tienes alguna pregunta o necesitas más información sobre mis servicios, no dudes en ponerte en contacto conmigo. Estoy aquí para ayudarte a mejorar tu presencia en línea y alcanzar tus objetivos de SEO.",
  },
  contactInfoData: [
    {
      id: 1,
      field: "Locación",
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
