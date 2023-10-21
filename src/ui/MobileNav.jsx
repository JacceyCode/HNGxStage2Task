import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import NavBar from "./NavBar";

function MobileNav() {
  const { openNav, setOpenNav } = useMovies();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 && setOpenNav(false);
    });
  }, [setOpenNav]);

  return (
    <>
      {openNav && (
        <section
          onClick={() => setOpenNav((openNav) => !openNav)}
          className="absolute top-0 z-10 flex h-full w-full justify-end bg-transparent pr-2 pt-12 text-stone-900 md:pr-8 lg:hidden"
        >
          <section className="h-fit w-6/12 rounded-3xl border-4 border-rose-700/70 bg-white p-2 md:w-4/12">
            <NavBar />
          </section>
        </section>
      )}
    </>
  );
}

export default MobileNav;
