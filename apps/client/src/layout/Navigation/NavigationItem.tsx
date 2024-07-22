import { Routes } from "../../typing/routes";
import { CustomLink, CustomLinkModifier } from "../../ui/CustomLink";

export type NavigationItemData = {
  title: string;
  to: Routes;
  modifier: CustomLinkModifier;
};

export const NavigationItem = ({ title, to, modifier }: NavigationItemData) => {
  return (
    <li className="py-6 px-12 sm:py-8 sm:px-0 h-full flex items-center justify-center group border-l sm:border-b sm:border-l-0 border-transparent hover:border-purple-600 transition-all">
      <CustomLink to={to} modifier={modifier}>
        {title}
      </CustomLink>
    </li>
  );
};
