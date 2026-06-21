import { useState } from "react";

function AddGameForm() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newGame = { title, genre, rating };
    console.log(newGame);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 text-amber-100 [&_input]:bg-blue-950"
    >
      <label htmlFor="title">Game Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="genre">Game Genre:</label>
      <input
        type="text"
        name="genre"
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <label htmlFor="rating">Game Rating:</label>
      <input
        type="number"
        name="rating"
        id="rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button className="bg-blue-900 p-2 rounded-2xl">Add Game</button>
    </form>
  );
}

export default AddGameForm;
