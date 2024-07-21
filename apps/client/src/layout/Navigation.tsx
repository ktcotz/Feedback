import { CustomLink } from "../ui/CustomLink";
import { ReactSVG } from "react-svg";
import { useMediaQuery } from "@uidotdev/usehooks";

export const Navigation = () => {
  const isMobile = useMediaQuery("(max-width:640px)");

  return (
    <div>
      <ul className="flex items-center gap-4">
        <li>
          <CustomLink to={"#"}>About us</CustomLink>
        </li>
        <li>
          <CustomLink to={"#"}>Partners</CustomLink>
        </li>
        <li>
          <CustomLink to={"#"}>FAQ</CustomLink>
        </li>
        <li>
          <CustomLink to={"#"}>Contact</CustomLink>
        </li>
        <li>
          <CustomLink to={"#"}>Sign up</CustomLink>
        </li>
      </ul>
      {isMobile && (
        <button>
          <ReactSVG
            src="./assets/shared/mobile/icon-hamburger.svg"
            height={24}
            width={24}
            className="stroke-black"
          />
        </button>
      )}
    </div>
  );
};
