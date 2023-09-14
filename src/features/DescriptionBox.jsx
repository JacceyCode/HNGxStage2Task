function DescriptionBox() {
  return (
    <aside className="absolute left-[6rem] top-[10rem] inline-flex h-auto w-auto flex-col items-start gap-4">
      <h1 className="w-[25.25rem] text-5xl/[3.5rem] font-medium">
        John Wick 3 : <br /> Parabellum
      </h1>
      <span className="inline-flex h-4 w-48 items-center justify-between font-normal">
        <span className="inline-flex items-center gap-2">
          <img src="/images/imdb.png" alt="imdb" /> 86.0 / 100
        </span>

        <span className="inline-flex items-center gap-2">
          <img src="/images/rate.png" alt="rate" /> 97%
        </span>
      </span>

      <p className="w-72 text-sm font-normal">
        {`John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.`}
      </p>

      <button className="flex w-40 items-center gap-2 rounded-md bg-rose-700 px-[0.3rem] py-4">
        <span>
          <img src="/images/Play.png" alt="play-icon" />
        </span>
        <span className="text-sm font-bold uppercase">Watch trailer</span>
      </button>
    </aside>
  );
}

export default DescriptionBox;
