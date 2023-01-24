import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
} from "../images";
import { FaHammer, FaTshirt, FaHome, FaGripLines } from "react-icons/fa";

let icons = [
  <FaHammer className="text-xl" />,
  <FaGripLines className="text-xl" />,
  <FaHome className="text-xl" />,
  <FaTshirt className="text-xl" />,
];

export const NAVIGATION_LINKS = [
  {
    id: 1,
    tx: "Inicio",
    path: "/",
  },
  {
    id: 2,
    tx: "Trabajos",
    path: "/works",
  },
  /* {
    id: 3,
    tx: "Iniciar Sesión",
    path: "/login",
  }, */
];

export const HOME_EXPERIENCE = [
  {
    id: 1,
    value: 100,
    text: "Trabajos realizados",
  },
  {
    id: 2,
    value: 6,
    text: "Años de experiencia",
  },
  {
    id: 3,
    value: 10,
    text: "Trabajos colaborativos",
  },
];

export const COMPANY_SERVICES_CARDS = [
  {
    id: 1,
    title: "Madera",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique tenetur non nostrum obcaecati, repellat ut.",
  },
  {
    id: 2,
    title: "Pladur",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique tenetur non nostrum obcaecati, repellat ut.",
  },
  {
    id: 3,
    title: "Interiores",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique tenetur non nostrum obcaecati, repellat ut.",
  },
  {
    id: 4,
    title: "Pullovers",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique tenetur non nostrum obcaecati, repellat ut.",
  },
];

export const COMPANY_WORKS_DONE = [
  {
    id: 1,
    image: img1,
    category: "Interiores",
    alt: "img1",
    title: `imagen de muestra 1`
  },
  {
    id: 2,
    image: img2,
    category: "Interiores",
    alt: "img2",
    title: `imagen de muestra 2`
  },
  {
    id: 3,
    image: img3,
    category: "Interiores",
    alt: "img3",
    title: `imagen de muestra 3`
  },
  {
    id: 4,
    image: img4,
    category: "Madera",
    alt: "img4",
    title: `imagen de muestra 4`
  },
  {
    id: 5,
    image: img5,
    category: "Madera",
    alt: "img5",
    title: `imagen de muestra 5`
  },
  {
    id: 6,
    image: img6,
    category: "Madera",
    alt: "img6",
    title: `imagen de muestra 6`
  },
  {
    id: 7,
    image: img7,
    category: "Pladur",
    alt: "img7",
    title: `imagen de muestra 7`
  },
  {
    id: 8,
    image: img8,
    category: "Pladur",
    alt: "img8",
    title: `imagen de muestra 8`
  },
  {
    id: 9,
    image: img9,
    category: "Pullovers",
    alt: "img9",
    title: `imagen de muestra 9`
  },
  {
    id: 10,
    image: img10,
    category: "Pullovers",
    alt: "img10",
    title: `imagen de muestra 10`
  },
];

export const WORKS_CATEGORIES = [
  {
    id: 1,
    category: "Madera",
    ico: icons[0],
  },
  {
    id: 2,
    category: "Pladur",
    ico: icons[1],
  },
  {
    id: 3,
    category: "Interiores",
    ico: icons[2],
  },
  {
    id: 4,
    category: "Pullovers",
    ico: icons[3],
  },
];

export const SIDEBAR_ADMIN_MENU = [
  {
    title: "Administrar Pins",
    icon: 0,
    submenu: true,
    submenuItems: [
      {
        title: "Crear Pin",
        link: "/create_pin",
      },
    ],
  },
  /* {
      title: "Totales",
      icon: 1,
      submenu: true,
      submenuItems: [
          {
              title: "Submenu 1"
          },
          {
              title: "Submenu 2"
          },
          {
              title: "Submenu 3"
          },
      ]
  },
  {
      title: "Fiscalización",
      icon: 2,
      submenu: true,
      submenuItems: [
          {
              title: "Submenu 1"
          },
          {
              title: "Submenu 2"
          },
          {
              title: "Submenu 3"
          },
      ]
  }, */
];
