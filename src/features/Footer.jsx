import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaSquareFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-4">
      <section className="flex items-center justify-center gap-12">
        <IconContext.Provider value={{ size: "35px" }}>
          <a href="#">
            <FaSquareFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </IconContext.Provider>
      </section>
      <section className="flex flex-col items-center justify-center sm:flex-row sm:gap-10">
        <Link className="px-2 font-bold text-black" to="#">
          Conditions of Use
        </Link>
        <Link className="px-2 font-bold text-black" to="#">
          Privacy & Policy
        </Link>
        <Link className="px-2 font-bold text-black" to="#">
          Press Room
        </Link>
      </section>
      <section className="text-center">
        &copy; 2023 MyMovieBox - JacceyCode(HNGx)
      </section>
    </footer>
  );
}

export default Footer;
