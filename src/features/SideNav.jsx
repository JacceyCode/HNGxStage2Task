import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import QuizBox from "./QuizBox";

function SideNav() {
  const font =
    "font-serif pl-20 text-lg text-stone-500 active:bg-pink-100 active:opacity-40 w-full h-[5rem] flex justify-start items-center active:border-e-rose-700 active:border-e-4";

  return (
    <nav className="fixed left-0 flex h-screen w-[15%] flex-col items-center justify-between rounded-r-[3rem] border-2 border-gray-400 py-8">
      <Logo />

      <NavLink to="/" className={font}>
        🏠 Home
      </NavLink>
      <NavLink to="/movies" className={font}>
        🎥 Movies
      </NavLink>
      <NavLink to="#" className={font}>
        📺 TV Series
      </NavLink>
      <NavLink to="#" className={font}>
        📆 Upcoming
      </NavLink>
      <QuizBox />
      <NavLink to="#" className={font}>
        <span className="rotate-90 scale-125">📤</span> Log out
      </NavLink>
    </nav>
  );
}

export default SideNav;
