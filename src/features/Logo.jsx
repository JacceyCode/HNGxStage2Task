import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-4">
      <img
        src="/images/tv.png"
        className="flex h-12 w-12 items-center justify-center rounded-full"
        alt="logo"
      />
      <span className="hidden lg:inline-flex lg:text-2xl lg:font-extrabold">
        MovieBox
      </span>
    </Link>
  );
}

export default Logo;
