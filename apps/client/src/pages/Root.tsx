import { Header } from "../layout/Header";
import { Outlet } from "react-router";
import { Wrapper } from "../ui/Wrapper";

export const Root = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Header />
      <Wrapper>
        <main>
          <Outlet />
        </main>
      </Wrapper>
    </div>
  );
};
