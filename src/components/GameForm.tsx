type GameFormProps = {
  onAddGame: (t: string) => void;
};

import { useState } from "react";

function GameForm() {
  const [title, setTitle] = useState("");
  return (
    <form className="flex flex-col gap-2" action="">
      <label htmlFor="game-title" className="text-amber-200">
        Game Title:
      </label>
      <input
        className="bg-blue-400 text-amber-200"
        type="text"
        name="game-title"
        id="game-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default GameForm;
