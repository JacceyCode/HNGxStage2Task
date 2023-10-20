import Logo from "../ui/Logo";
import Menu from "../ui/Menu";
import SearchMovies from "../ui/SearchMovies";

function MobileHeader() {
  return (
    <section className="flex items-center justify-between">
      <span className="lg:hidden">
        <Logo />
      </span>

      <span className="rounded-lg bg-rose-700">
        <SearchMovies />
      </span>

      <span>
        <Menu />
      </span>
    </section>
  );
}

export default MobileHeader;
