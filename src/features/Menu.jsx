import { Link } from "react-router-dom";

function Menu() {
  return (
    <section className="inline-flex items-center gap-2">
      <Link className="text-2xl font-extrabold text-gray-100" to="">
        Sign in
      </Link>
      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-700">
        <img src="/images/Menu alt 4.png" alt="menu-icon" />
      </button>
    </section>
  );
}

export default Menu;
