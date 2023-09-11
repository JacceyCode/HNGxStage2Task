/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form } from "react-router-dom";

function SearchMovies() {
  const [searchMovie, setSearchMovie] = useState("");

  //Come back and verify this
  const isLoading = false;

  return (
    <Form
      className="flex w-[33rem] items-center justify-between rounded-md border-2 border-s-gray-300 px-2 py-2 text-white"
      method="GET"
    >
      <input
        className="flex-grow bg-transparent pl-4 outline-none placeholder:font-normal placeholder:text-white"
        type="text"
        placeholder="What do you want to watch?"
        name="movie"
        // defaultValue={searchMovie}
        required
        // disabled={isLoading}
      />
      <button>
        <img src="./images/Search.png" alt="search-icon" />
      </button>
    </Form>
  );
}

export default SearchMovies;
