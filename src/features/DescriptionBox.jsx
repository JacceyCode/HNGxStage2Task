import { IconContext } from "react-icons";
import { GiTomato } from "react-icons/gi";
import { HiPlayCircle } from "react-icons/hi2";

function DescriptionBox() {
  return (
    <aside className="flex w-2/3 flex-col items-start gap-3 sm:w-2/5 lg:w-4/12">
      <h1 className="text-[2rem]/[2.5rem] font-normal md:text-[2.9rem]/[3rem] md:font-medium">
        John Wick 3 : <br /> Parabellum
      </h1>

      <span className="flex w-48  items-center justify-between font-normal">
        <span className="flex items-center gap-2">
          <img src="/images/imdb.png" alt="imdb" /> 86.0 / 100
        </span>

        <span className="flex items-center gap-2">
          <IconContext.Provider value={{ color: "orangered", size: "20px" }}>
            <GiTomato />
          </IconContext.Provider>{" "}
          97%
        </span>
      </span>

      <p className="w-full text-sm font-normal md:text-lg">
        {`John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.`}
      </p>

      <a
        href="#featuredMovie"
        className="flex w-40 items-center gap-2 rounded-md bg-rose-700 px-[0.3rem] py-4"
      >
        <HiPlayCircle />
        <span className="text-sm font-bold uppercase">Watch trailer</span>
      </a>
    </aside>
  );
}

export default DescriptionBox;
