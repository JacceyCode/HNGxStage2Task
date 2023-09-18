import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="absolute -bottom-28 left-[5%] h-fit space-y-4 pb-8 md:bottom-4 md:left-[25%] md:-mb-24 md:w-96 md:space-y-6 lg:left-[30%] xl:left-[40%]">
      <section className="flex justify-center gap-12">
        <img src="/images/fa-brands_facebook-square.png" alt="facebook-icon" />
        <img src="/images/fa-brands_instagram.png" alt="instagram-icon" />
        <img src="/images/fa-brands_twitter.png" alt="twitter-icon" />
        <img src="/images/fa-brands_youtube.png" alt="youtube-icon" />
      </section>
      <section className="flex items-center">
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
      <section className="flex justify-center">
        &copy; 2023 MyMovieBox by JacceyCode (HNGx)
      </section>
    </footer>
  );
}

export default Footer;
