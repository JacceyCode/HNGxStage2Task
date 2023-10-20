import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Menu() {
  const { openNav, setOpenNav } = useMovies();

  return (
    <section className="flex items-center gap-1 px-2 py-1">
      <Link
        className="hidden font-sans font-semibold sm:flex lg:text-2xl lg:text-gray-800"
        to="#"
      >
        Sign in
      </Link>

      <button
        onClick={() => setOpenNav((openNav) => !openNav)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-700 lg:hidden"
      >
        {openNav ? <AiOutlineClose /> : <HiMenu />}
      </button>
    </section>
  );
}

export default Menu;
