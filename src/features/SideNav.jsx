import Logo from "../ui/Logo";
import { NavLink } from "react-router-dom";
import QuizBox from "./QuizBox";

function SideNav() {
  const font =
    "font-serif lg:pl-20 text-lg text-stone-500 hover:bg-pink-100 w-full h-[5rem] flex justify-start items-center hover:border-e-rose-700 hover:border-e-4";

  const activeFont = "bg-pink-100 border-e-rose-700 border-e-4 ";

  return (
    <nav className="hidden md:fixed md:left-0 md:flex md:h-screen md:w-[12%] md:flex-col md:items-center md:justify-between md:rounded-r-[3rem] md:border-2 md:border-gray-400 md:py-4 lg:w-[15%] lg:items-center lg:justify-between lg:py-8">
      <Logo />

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeFont + font : font)}
      >
        🏠 Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? activeFont + font : font)}
      >
        🎥 Movies
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeFont + font : font)}
      >
        📺 TV Series
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeFont + font : font)}
      >
        📆 Upcoming
      </NavLink>
      <QuizBox />
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeFont + font : font)}
      >
        <span className="rotate-90 scale-125">📤</span> Log out
      </NavLink>
    </nav>
  );
}

export default SideNav;
