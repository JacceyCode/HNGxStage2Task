import Logo from "./Logo";
import Menu from "./Menu";
import SearchMovies from "./SearchMovies";

function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-4 p-1 text-white md:px-10 lg:px-24">
      <Logo />
      <SearchMovies />
      <Menu />
    </header>
  );
}

export default Header;
