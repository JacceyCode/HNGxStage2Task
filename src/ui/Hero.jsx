import Header from "../features/Header";
import DescriptionBox from "../features/DescriptionBox";
import PaginationBox from "../features/PaginationBox";

function Hero() {
  return (
    <section className={`relative h-[600px] bg-cover font-bold text-white`}>
      <img
        className="relative h-full w-screen bg-cover bg-center bg-no-repeat brightness-50"
        loading="lazy"
        src="/images/Poster.png"
        alt="Banner"
      />
      <Header />
      <DescriptionBox />
      <PaginationBox />
    </section>
  );
}

export default Hero;
