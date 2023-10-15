import Hero from "../features/Hero";
import Footer from "../features/Footer";
import FeaturedMovie from "../features/FeaturedMovie";

function Home() {
  return (
    <section className="flex flex-col gap-14">
      <Hero />
      <FeaturedMovie />
      <Footer />
    </section>
  );
}

export default Home;
