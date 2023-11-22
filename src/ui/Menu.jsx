import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Menu() {
  const { openNav, setOpenNav } = useMovies();

  return (
    <section className="flex items-center gap-1 px-2 py-1">
      <Link
        className="hidden rounded-lg bg-red-700 px-3 py-1 font-sans font-semibold lg:flex lg:text-2xl lg:text-white"
        to="#"
      >
        Sign in
      </Link>

      <button
        onClick={() => setOpenNav((openNav) => !openNav)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-700 transition-all duration-300 ease-linear lg:hidden"
      >
        {openNav ? <AiOutlineClose /> : <HiMenu />}
      </button>
    </section>
  );
}

export default Menu;
