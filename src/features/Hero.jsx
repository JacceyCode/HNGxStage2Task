import Header from "../ui/Header";
import DescriptionBox from "./DescriptionBox";
import PaginationBox from "./PaginationBox";

function Hero() {
  return (
    <section className="flex h-screen flex-col gap-28 bg-[url('./images/Poster.png')] bg-cover bg-center bg-no-repeat font-bold text-white sm:h-full md:h-[45rem] md:gap-28 lg:gap-36">
      <Header />
      <section className="flex items-center justify-between px-2 md:pl-10 md:pr-2 lg:pl-24 lg:pr-10">
        <DescriptionBox />
        <PaginationBox />
      </section>
    </section>
  );
}

export default Hero;
