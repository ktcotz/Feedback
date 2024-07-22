import { Logo } from "../ui/Logo";
import { Wrapper } from "../ui/Wrapper";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  return (
    <header className=" border-b border-stone-200 py-4 sm:py-0">
      <Wrapper>
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <Navigation />
        </div>
      </Wrapper>
    </header>
  );
};
