import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const NavbarContainer = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
};

export default NavbarContainer;
