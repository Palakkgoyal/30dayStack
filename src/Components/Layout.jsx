import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import useScreenSize from "../hooks/useScreenSize";

const Layout = () => {
  const windowWidth = useScreenSize();
  const isSmallScreen = windowWidth < 1200;

  return (
    <div>
      <SideBar />
      <div
        className={`${
          isSmallScreen ? "" : "ml-[300px]"
        } bg-[var(--grey-8)] p-1 min-h-screen`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
