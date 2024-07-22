import { CustomLink } from "../../ui/CustomLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useMediaQuery } from "@uidotdev/usehooks";
import { navigationData } from "./data";
import { NavigationItem } from "./NavigationItem";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const isMobile = useMediaQuery("(max-width:640px)");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="self-stretch flex items-center justify-center ">
      <ul
        className={`absolute top-20 right-0 flex-col flex gap-4 border-l pb-8 border-b border-stone-300 bg-stone-50 sm:flex-row sm:h-full sm:static sm:pb-0 sm:border-0 ${isOpen ? "visible opacity-100 translate-x-0" : "invisible opacity-0 translate-x-full"} transition-all`}
      >
        {navigationData.map((item) => (
          <NavigationItem {...item} key={item.id} />
        ))}
        <li className="h-full flex items-center justify-center">
          <CustomLink to={"#"} modifier="primary">
            Sign up
          </CustomLink>
        </li>
      </ul>

      {isMobile && (
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
        </button>
      )}
    </div>
  );
};
