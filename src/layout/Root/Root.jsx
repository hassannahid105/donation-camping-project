import { Outlet } from "react-router-dom";
import Navbar from "../../component/Header/Navbar/Navbar";
import Hero from "../../component/Header/Hero/Hero";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="max-w-[1300px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
