import GameCard from "./components/GameCard";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const games = [
    { id: 1, title: "Wuthering waves", genre: "Action RPG", rating: 10 },
    { id: 2, title: "Genshin Impact", genre: "Action RPG", rating: 7 },
    { id: 3, title: "Call of Duty", genre: "FPS", rating: 0 },
    { id: 4, title: "Hollow Knight", genre: "Metroidvania", rating: 6 },
  ];
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div className="bg-blue-950 min-h-screen flex flex-col gap-3 p-5 items-center ">
      <h1 className="text-2xl text-amber-100">Game Management System</h1>
      <label className="text-amber-200" htmlFor="searchbar">
        Search something
      </label>
      <input
        className="text-amber-200 bg-blue-500"
        type="text"
        name="searchbar"
        id="searchbar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => setSearch("")}
        className="text-amber-200 bg-gray-500 p-3 rounded-2xl"
      >
        Clear
      </button>

      <p className="text-amber-200">You Searched for: {search}</p>
      <div className="flex flex-wrap justify-center gap-10 items-center text-amber-100">
        {filteredGames.map((game) => (
          <GameCard
            title={game.title}
            genre={game.genre}
            rating={game.rating}
            key={game.id}
          ></GameCard>
        ))}
      </div>
      {filteredGames.length === 0 && (
        <p className="text-amber-200">No games found</p>
      )}
    </div>
  );
}

export default App;
