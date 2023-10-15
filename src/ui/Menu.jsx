import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";

function Menu() {
  return (
    <section className="flex items-center gap-2">
      <Link
        className="hidden sm:flex lg:text-2xl lg:font-extrabold lg:text-gray-100"
        to="#"
      >
        Sign in
      </Link>
      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-700">
        <HiMenuAlt4 />
      </button>
    </section>
  );
}

export default Menu;
