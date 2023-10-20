import { useMovies } from "../context/MovieContext";

function MobileNav() {
  const { openNav } = useMovies();
  console.log(openNav);

  return (
    openNav && (
      <section className="absolute bg-white text-stone-900">MOBLIE NAV</section>
    )
  );
}

export default MobileNav;
