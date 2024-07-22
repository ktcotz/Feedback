import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import twMerge from "clsx";

export type CustomLinkModifier = "primary" | "logo" | "nav";

type CustomLinkProps = {
  children: ReactNode;
  modifier?: CustomLinkModifier;
};

export const CustomLink = ({
  children,
  modifier = "primary",
  ...rest
}: CustomLinkProps & LinkProps) => {
  const base = "rounded-sm font-semibold";

  const modifiers: Record<CustomLinkModifier, string> = {
    primary:
      "bg-purple-600 py-2 px-4 rounded-lg text-stone-50 transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-600 focus:ring-offset-2",
    logo: "",
    nav: "text-stone-700 transition group-hover:text-stone-800 focus:outline-none focus:ring focus:ring-purple-600 focus:ring-offset-2",
  };

  const className = twMerge(base, modifiers[modifier]);

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
};
