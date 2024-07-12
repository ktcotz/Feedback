import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api");

      const data = await res.text();

      console.log(data);
    };
    fetchData();
  }, []);

  return <h1>Hello Turbo!</h1>;
};
