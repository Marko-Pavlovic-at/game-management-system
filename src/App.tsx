import GameCard from "./components/GameCard";

function App() {
  const games = [
    { id: 1, title: "Wuthering waves", genre: "Action RPG", rating: 10 },
    { id: 2, title: "Genshin Impact", genre: "Action RPG", rating: 7 },
    { id: 3, title: "Call of Duty", genre: "FPS", rating: 0 },
    { id: 4, title: "Hollow Knight", genre: "Metroidvania", rating: 6 },
  ];

  return (
    <div className="bg-blue-950 min-h-screen flex flex-col gap-3 justify-center items-center ">
      <h1 className="text-2xl text-amber-100">Game Management System</h1>

      <div className="flex flex-wrap justify-center gap-4 text-amber-100">
        {games.map((game) => (
          <GameCard
            title={game.title}
            genre={game.genre}
            rating={game.rating}
            key={game.id}
          ></GameCard>
        ))}
      </div>
    </div>
  );
}

export default App;
