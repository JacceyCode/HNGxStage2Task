import Header from "../ui/Header";
import DescriptionBox from "./DescriptionBox";
import PaginationBox from "./PaginationBox";

function Hero() {
  return (
    <section className="flex min-h-screen flex-col gap-20 bg-[url('/images/Poster.png')] bg-cover bg-center bg-no-repeat font-bold text-white md:gap-40">
      <Header />
      <section className="flex items-center justify-between px-2 md:pl-10 md:pr-2 lg:pl-24 lg:pr-10">
        <DescriptionBox />
        <PaginationBox />
      </section>
    </section>
  );
}

export default Hero;
