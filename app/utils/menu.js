import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "About",
    icon: list,
    link: "/about",
  },
  {
    id: 3,
    title: "From",
    icon: check,
    link: "/from",
  },
  {
    id: 4,
    title: "Table",
    icon: todo,
    link: "/table",
  },
  {
    id: 5,
    title: "404 Not Found",
    icon: todo,
    link: "/404",
  },
];

export default menu;
