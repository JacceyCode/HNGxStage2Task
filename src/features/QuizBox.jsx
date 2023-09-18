import { Link } from "react-router-dom";

function QuizBox() {
  return (
    <section className="hidden h-52 w-44 flex-col items-center justify-center space-y-2 rounded-2xl border border-rose-700 border-opacity-70 bg-pink-100 bg-opacity-40 px-6 font-['Poppins'] lg:flex">
      <p className="text-base font-semibold text-zinc-800 text-opacity-80">
        Play movie quizes and earn free tickets
      </p>
      <p className="text-xs font-medium text-stone-500">
        50k people are playing now
      </p>
      <Link
        className="Rectangle12 flex h-7 w-28 items-center justify-center rounded-3xl bg-rose-700 bg-opacity-20 text-sm font-medium text-rose-700 duration-300 ease-out hover:scale-110"
        to="#"
      >
        Start playing
      </Link>
    </section>
  );
}

export default QuizBox;
