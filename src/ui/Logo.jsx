import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/images/tv.png"
        className="flex h-10 w-10 items-center justify-center rounded-full"
        alt="logo"
      />
      <span className="hidden font-sans font-semibold sm:flex lg:text-2xl">
        MovieBox
      </span>
    </Link>
  );
}

export default Logo;
