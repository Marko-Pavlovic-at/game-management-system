import GameCards from "./components/GameCard";
function App() {
  return (
    <div className=" pt-10 flex flex-col items-center gap-4 min-h-screen bg-zinc-900">
      <h1 className="text-3xl font-bold text-indigo-400">
        Game Management System
      </h1>
      <GameCards
        title="Wuthering Waves"
        genre="Action RPG"
        rating={10}
      ></GameCards>
    </div>
  );
}

export default App;
