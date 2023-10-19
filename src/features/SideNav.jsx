import Logo from "../ui/Logo";
import { NavLink } from "react-router-dom";
import QuizBox from "./QuizBox";
import {
  HiOutlineCalendar,
  HiOutlineHome,
  HiOutlineLogout,
} from "react-icons/hi";
import { BsCameraReels } from "react-icons/bs";
import { PiMonitorPlay } from "react-icons/pi";

function SideNav() {
  const font =
    "font-serif pl-10 text-lg text-stone-500 w-full hover:bg-pink-100 h-[5rem] flex gap-3 justify-start items-center hover:border-e-rose-700 hover:border-e-4";

  const activeFont = "bg-pink-100 border-e-rose-700 border-e-4";

  return (
    <aside className="fixed hidden h-screen flex-col items-center justify-stretch gap-8 rounded-r-[3rem] border-2 py-8 lg:flex">
      <Logo />

      <nav className="flex flex-col items-center justify-between gap-1">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeFont + font : font)}
        >
          <HiOutlineHome />
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? activeFont + font : font)}
        >
          <BsCameraReels />
          Movies
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeFont + font : font)}
        >
          <PiMonitorPlay />
          TV Series
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeFont + font : font)}
        >
          <HiOutlineCalendar />
          Upcoming
        </NavLink>

        <QuizBox />

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeFont + font : font)}
        >
          <HiOutlineLogout /> Log out
        </NavLink>
      </nav>
    </aside>
  );
}

export default SideNav;
