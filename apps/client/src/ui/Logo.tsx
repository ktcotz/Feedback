import { Routes } from "../typing/routes";
import { CustomLink } from "./CustomLink";

export const Logo = () => {
  return (
    <CustomLink to={Routes.Home} modifier="logo">
      <img src="./assets/logo.png" alt="Feedback" width={48} height={48} />
    </CustomLink>
  );
};
