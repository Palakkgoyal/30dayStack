import { useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { BsCalendar3 } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const navData = [
  { text: "Home", path: "/", icon: <GrHomeRounded /> },
  { text: "Assingments", path: "/assignment", icon: <BsCalendar3 /> },
  {
    text: "Certificates",
    path: "/certificate",
    icon: <LuBadgeCheck className="text-2xl -mr-1" />,
  },
  { text: "Ask a question", path: "/contact", icon: <FaRegQuestionCircle /> },
];

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const windowWidth = useScreenSize();
  const isSmallScreen = windowWidth < 1200;

  return (
    <nav
      className={`${
        isSmallScreen
          ? "px-6 py-4 relative bg-[var(--grey-8)]"
          : "w-[300px] bg-white bottom-0 pt-10 pl-10 fixed"
      } left-0 top-0  select-none`}
    >
      <div className="flex justify-between items-center z-50">
        <h1 className={`${isSmallScreen ? "" : "mb-16"} text-3xl font-medium`}>
          <span className="text-[var(--blue-violet)]">30</span> DayStack
        </h1>
        {isSmallScreen && (
          <GiHamburgerMenu
            className="text-3xl text-[var(--grey-80)] cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
        )}
      </div>

      {(!isSmallScreen || open) && (
        <ul
          className={`${
            isSmallScreen
              ? "absolute top-[100%] bg-[var(--white)] w-full left-0 px-6 pt-8"
              : ""
          } transition-transform ease-in-out`}
        >
          {navData.map((el, idx) => (
            <NavEl {...el} key={idx} setOpen={setOpen} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideBar;

const NavEl = ({ text, path, icon, setOpen }) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  return (
    <li
      onClick={() => {
        navigate(path);
        setOpen(false);
      }}
      className={`${
        currentPath == path ? "opacity-100" : "opacity-70"
      } font-medium flex items-center gap-4 mb-10 cursor-pointer hover:opacity-100 transition-all ease-in-out`}
    >
      <span className="text-xl text-[var(--blue-violet)]">{icon}</span>
      <p className="text-lg">{text}</p>
    </li>
  );
};
