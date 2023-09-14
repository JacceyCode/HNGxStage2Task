import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-4">
      <img src="/images/tv.png" alt="logo" />
      <span className="text-2xl font-extrabold">MovieBox</span>
    </Link>
  );
}

export default Logo;
