import Logo from "./Logo";
import Menu from "./Menu";
import SearchMovies from "./SearchMovies";

function Header() {
  return (
    <header className="absolute top-1 flex h-[5rem] w-full items-center justify-between px-2 py-5 leading-6 text-white lg:px-20">
      <Logo />
      <SearchMovies />
      <Menu />
    </header>
  );
}

export default Header;
