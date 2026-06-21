import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <>
      <label className="text-sky-100" htmlFor="search-bar">
        Search Game:
      </label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        name="search-bar"
        id="search-bar"
        className="bg-blue-950 text-sky-100"
      />
      <p className="text-sky-200"> You Searched for : {search}</p>
      <button
        className="bg-blue-900 text-sky-100 rounded-xl p-2"
        onClick={() => setSearch("")}
      >
        Clear Search
      </button>
    </>
  );
}

export default SearchBar;
