import GameCard from "./components/GameCard";
import GameForm from "./components/GameForm";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [games, setGames] = useState([
    { id: 1, title: "Wuthering waves", genre: "Action RPG", rating: 10 },
    { id: 2, title: "Genshin Impact", genre: "Action RPG", rating: 7 },
    { id: 3, title: "Call of Duty", genre: "FPS", rating: 0 },
    { id: 4, title: "Hollow Knight", genre: "Metroidvania", rating: 6 },
  ]);
  function handleAddGame(newTitle) {
    setGames([
      ...games,
      { id: Date.now(), title: newTitle, genre: "", rating: 0 },
    ]);
  }
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div className="bg-blue-950 min-h-screen flex flex-col gap-3 p-5 items-center ">
      <h1 className="text-2xl text-amber-100">Game Management System</h1>
      <GameForm onAddGame={handleAddGame}></GameForm>
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
      <label className="text-amber-200" htmlFor="game-title">
        Add Game:
      </label>
      <input
        className="text-amber-200 bg-blue-500"
        type="text"
        name="game-title"
        id="game-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="rounded-2xl bg-red-500 text-amber-200 p-2"
        onClick={() => {
          setGames([
            ...games,
            { id: Date.now(), title: title, genre: "", rating: 0 },
          ]);
          setTitle("");
        }}
      >
        Add
      </button>
      <p className="text-amber-200">{title}</p>

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
