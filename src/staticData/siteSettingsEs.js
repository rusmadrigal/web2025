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
    url: "/es-cr",
    text: "Rus Madrigal",
  },
  headersMenu: [
    {
      id: 1,
      title: "Inicio",
      selector: "#inicio", // Actualizado
      url: "/es-cr/",
      Icon: <IoHomeOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "Acerca",
      selector: "https://rusmadrigal.com/es-cr/#acerca", // Actualizado
      url: "https://rusmadrigal.com/es-cr/",
      Icon: <FaRegUser />,
      notVisibleRoutes: [],
    },
    {
      id: 3,
      title: "Servicios",
      selector: "https://rusmadrigal.com/es-cr/#servicios", // Actualizado
      url: "https://rusmadrigal.com/es-cr/",
      Icon: <IoBriefcaseOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 4,
      title: "https://rusmadrigal.com/es-cr/Skills",
      selector: "https://rusmadrigal.com/es-cr/#skill", // Actualizado
      url: "https://rusmadrigal.com/es-cr/",
      Icon: <SlGraduation />,
      notVisibleRoutes: [],
    },
    {
      id: 5,
      title: "CV",
      selector: "https://rusmadrigal.com/es-cr/#resume", // Actualizado
      url: "https://rusmadrigal.com/es-cr/",
      Icon: <FaRegFileAlt />,
      notVisibleRoutes: [],
    },
    {
      id: 8,
      title: "Opiniones",
      selector: "https://rusmadrigal.com/es-cr/#opiniones", // Actualizado
      url: "https://rusmadrigal.com/es-cr/",
      Icon: <BiCommentDetail />,
      notVisibleRoutes: [],
    },
    {
      id: 9,
      title: "Contacto",
      selector: "https://rusmadrigal.com/es-cr/#contacto", // Actualizado
      url: "https://rusmadrigal.com/es-cr/",
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
