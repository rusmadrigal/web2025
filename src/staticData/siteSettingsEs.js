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
    url: "/es-cr", // Ruta relativa
    text: "Rus Madrigal",
  },
  headersMenu: [
    {
      id: 1,
      title: "Inicio",
      selector: "/es-cr/#inicio", // Ruta relativa
      url: "/es-cr", // Ruta relativa
      Icon: <IoHomeOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "Acerca",
      selector: "/es-cr/#acerca", // Ruta relativa
      url: "/es-cr", // Ruta relativa
      Icon: <FaRegUser />,
      notVisibleRoutes: [],
    },
    {
      id: 3,
      title: "Servicios",
      selector: "/es-cr/#servicios", // Ruta relativa
      url: "/es-cr", // Ruta relativa
      Icon: <IoBriefcaseOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 4,
      title: "Skills",
      selector: "/es-cr/#skill", // Ruta relativa
      url: "/es-cr", // Ruta relativa
      Icon: <SlGraduation />,
      notVisibleRoutes: [],
    },
    {
      id: 5,
      title: "CV",
      selector: "/es-cr/#resume", // Ruta relativa
      url: "/es-cr", // Ruta relativa
      Icon: <FaRegFileAlt />,
      notVisibleRoutes: [],
    },
    {
      id: 8,
      title: "Opiniones",
      selector: "/es-cr/#opiniones", // Ruta relativa
      url: "/es-cr", // Ruta relativa
      Icon: <BiCommentDetail />,
      notVisibleRoutes: [],
    },
    {
      id: 9,
      title: "Contacto",
      selector: "/es-cr/#contacto", // Ruta relativa
      url: "/es-cr", // Ruta relativa
      Icon: <FaRegEnvelope />,
      notVisibleRoutes: [],
    },
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
