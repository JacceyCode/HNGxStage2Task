import Navbar from "../features/Navbar";
import DescriptionBox from "../features/DescriptionBox";
import PaginationBox from "../features/PaginationBox";

function Header() {
  return (
    <header className="relative h-[600px] bg-black bg-[url('./images/Poster.png')] bg-cover font-bold text-white">
      <Navbar />
      <DescriptionBox />
      <PaginationBox />
    </header>
  );
}

export default Header;
