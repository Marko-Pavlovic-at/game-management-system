import SearchBar from "./components/SearchBar";
import GameCards from "./components/GameCard";
function App() {
  const games = [
    { id: 1, title: "Wuthering Waves", genre: "Action RPG", rating: 10 },
    { id: 2, title: "Genshin Impact", genre: "Action RPG", rating: 7 },
    { id: 3, title: "Call of Duty", genre: "FPS", rating: 1 },
    { id: 4, title: "Hades", genre: "Roguelite", rating: 6 },
    { id: 5, title: "Pokemon Firered", genre: "RPG", rating: 4 },
  ];
  return (
    <div className=" pt-10 flex flex-col items-center gap-4 min-h-screen bg-zinc-900">
      <h1 className="text-3xl font-bold text-indigo-400">
        Game Management System
      </h1>
      <SearchBar></SearchBar>
      <div className="flex flex-wrap justify-center gap-4">
        {games.map((game) => (
          <GameCards
            key={game.id}
            title={game.title}
            genre={game.genre}
            rating={game.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
