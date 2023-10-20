import Logo from "../ui/Logo";
import Menu from "../ui/Menu";
import SearchMovies from "../ui/SearchMovies";

function MobileHeader() {
  return (
    <section className="flex items-center justify-between">
      <span className="lg:hidden">
        <Logo />
      </span>

      <span className="rounded-lg bg-pink-500">
        <SearchMovies />
      </span>

      <span className="rounded-lg lg:bg-pink-500">
        <Menu />
      </span>
    </section>
  );
}

export default MobileHeader;
