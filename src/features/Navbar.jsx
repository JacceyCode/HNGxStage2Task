import Logo from "./Logo";
import Menu from "./Menu";
import SearchMovies from "./SearchMovies";

function Navbar() {
  return (
    <nav className="flex h-[5rem] items-center justify-between px-[6rem] py-5 leading-6 text-white">
      <Logo />
      <SearchMovies />
      <Menu />
    </nav>
  );
}

export default Navbar;
