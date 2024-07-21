import { Logo } from "../ui/Logo";
import { Wrapper } from "../ui/Wrapper";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="py-4 border-b border-stone-200">
      <Wrapper>
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <Navigation />
        </div>
      </Wrapper>
    </header>
  );
};
