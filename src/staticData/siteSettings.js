import logo from "@/public/assets/img/site-logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";
import {
  FaRegFileAlt,
  FaRegEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { LiaBlogSolid } from "react-icons/lia";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegUser, FaYoutube } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";

export const siteSettings = {
  logo: {
    image: logo?.src,
    alt: "Rus Madrigal",
    url: "/", // Ruta relativa
    text: "Rus Madrigal",
  },
  headersMenu: [
    {
      id: 1,
      title: "Home",
      selector: "#home", // Ruta relativa
      url: "/", // Ruta relativa
      Icon: <IoHomeOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "About",
      selector: "#about", // Ruta relativa
      url: "/", // Ruta relativa
      Icon: <FaRegUser />,
      notVisibleRoutes: [],
    },
    {
      id: 3,
      title: "Services",
      selector: "#service", // Ruta relativa
      url: "/", // Ruta relativa
      Icon: <IoBriefcaseOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 4,
      title: "Skills",
      selector: "#skill", // Ruta relativa
      url: "/", // Ruta relativa
      Icon: <SlGraduation />,
      notVisibleRoutes: [],
    },
    {
      id: 5,
      title: "Resume",
      selector: "#resume", // Ruta relativa
      url: "/", // Ruta relativa
      Icon: <FaRegFileAlt />,
      notVisibleRoutes: [],
    },
    {
      id: 8,
      title: "Testimonials",
      selector: "#testimonial", // Ruta relativa
      url: "/", // Ruta relativa
      Icon: <BiCommentDetail />,
      notVisibleRoutes: [],
    },
    {
      id: 9,
      title: "Contact",
      selector: "#contact", // Ruta relativa
      url: "/", // Ruta relativa
      Icon: <FaRegEnvelope />,
      notVisibleRoutes: [],
    },
  ],
  locationMenu: [
    {
      id: 1,
      name: "Spanish",
      tooltip: "Spanish",
      Icon: (
        <span role="img" aria-label="Spanish">
          🇨🇷
        </span>
      ),
      url: "/es-cr", // Ruta relativa
    },
    /* {
      id: 2,
      name: "Linkedin",
      tooltip: "Share with Linkedin",
      Icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/rusmadrigal/",
    },*/
  ],
  socialMedias: [
    {
      id: 1,
      name: "YouTube",

      tooltip: "YouTube",
      Icon: <FaYoutube />,
      url: "https://www.youtube.com/@rusmadrigal",
    },
    {
      id: 2,
      name: "Linkedin",
      tooltip: "Share with Linkedin",
      Icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/rusmadrigal/",
    },
  ],

  preloader: {
    image: logo?.src,
  },
};
