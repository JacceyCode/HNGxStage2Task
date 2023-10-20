import { useMovies } from "../context/MovieContext";
import NavBar from "./NavBar";

function MobileNav() {
  const { openNav } = useMovies();
  console.log(openNav);

  return (
    <>
      {openNav && (
        <section className="absolute top-12 z-10 flex w-full justify-end bg-transparent text-stone-900 md:top-16  lg:hidden">
          <section className="w-6/12 rounded-l-3xl border-y-4 border-l-4 border-rose-700/70 bg-white p-2 md:w-4/12">
            <NavBar />
          </section>
        </section>
      )}
    </>
  );
}

export default MobileNav;
