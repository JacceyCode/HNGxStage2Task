import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mx-auto my-10 flex h-28 w-96 flex-col gap-4">
      <section className="flex justify-center gap-12">
        <img src="./images/fa-brands_facebook-square.png" alt="facebook-icon" />
        <img src="./images/fa-brands_instagram.png" alt="instagram-icon" />
        <img src="./images/fa-brands_twitter.png" alt="twitter-icon" />
        <img src="./images/fa-brands_youtube.png" alt="youtube-icon" />
      </section>
      <section className="flex justify-between">
        <Link className="font-bold text-black" to="#">
          Conditions of Use
        </Link>
        <Link className="font-bold text-black" to="#">
          Privacy & Policy
        </Link>
        <Link className="font-bold text-black" to="#">
          Press Room
        </Link>
      </section>
      <section className="flex justify-center">
        &copy; 2023 MovieBox by JacceyCode
      </section>
    </footer>
  );
}

export default Footer;
