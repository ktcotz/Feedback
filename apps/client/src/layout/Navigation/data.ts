import { Routes } from "../../typing/routes";
import { NavigationItemData } from "./NavigationItem";

export const navigationData: (NavigationItemData & { id: number })[] = [
  {
    id: 1,
    to: Routes.Home,
    title: "About us",
    modifier: "nav",
  },
  {
    id: 2,
    to: Routes.Home,
    title: "Partners",
    modifier: "nav",
  },
  {
    id: 3,
    to: Routes.Home,
    title: "FAQ",
    modifier: "nav",
  },
  {
    id: 4,
    to: Routes.Home,
    title: "Contact",
    modifier: "nav",
  },
];
