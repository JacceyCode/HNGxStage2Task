import Logo from "./Logo";
import Menu from "./Menu";
import SearchMovies from "./SearchMovies";

function Header() {
  return (
    <header className="absolute top-1 w-full">
      <nav className="flex h-[5rem] items-center justify-between px-[6rem] py-5 leading-6 text-white">
        <Logo />
        <SearchMovies />
        <Menu />
      </nav>
    </header>
  );
}

export default Header;
