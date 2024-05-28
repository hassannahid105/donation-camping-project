import { Outlet } from "react-router-dom";
import Navbar from "../../component/Header/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1300px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
