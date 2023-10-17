import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <header className="flex items-center justify-between p-2 lg:hidden">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/images/tv.png"
          className="flex h-10 w-10 items-center justify-center rounded-full"
          alt="logo"
        />
        <span className="font-sans text-2xl font-semibold">MovieBox</span>
      </Link>

      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-700">
        <HiMenuAlt4 />
      </button>
    </header>
  );
}

export default MobileNav;
