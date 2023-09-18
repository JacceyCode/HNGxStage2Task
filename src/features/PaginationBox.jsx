function PaginationBox() {
  return (
    <section className="absolute right-6 top-40 flex h-28 w-9 items-center gap-1 md:top-60">
      <span className="h-[0.2rem] w-5 rounded-md bg-white"></span>
      <span className="inline-flex flex-col items-center gap-2 text-gray-400">
        <span>1</span>
        <span>2</span>
        <span className="text-white">3</span>
        <span>4</span>
        <span>5</span>
      </span>
    </section>
  );
}

export default PaginationBox;
