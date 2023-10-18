/* eslint-disable react/prop-types */
function SearchError({ children }) {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center space-y-3 rounded-3xl border-4 bg-gray-300 font-serif text-3xl font-extrabold text-red-600">
      <h1>❌❌❌ Ooops, {children} 😢</h1>
      <h2>Try again!</h2>
    </section>
  );
}

export default SearchError;
