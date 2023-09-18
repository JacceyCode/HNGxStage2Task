import Header from "../features/Header";
import DescriptionBox from "../features/DescriptionBox";
import PaginationBox from "../features/PaginationBox";

function Hero() {
  return (
    <section className="relative h-[30rem] w-full bg-cover font-bold text-white md:h-[600px]">
      <img
        className="relative h-full w-full bg-cover bg-center bg-no-repeat brightness-50"
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
