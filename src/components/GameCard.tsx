type GameCardsProps = {
  id: number;
  title: string;
  genre: string;
  rating: number;
};

function GameCards({ title, genre, rating }: GameCardsProps) {
  return (
    <div className="bg-blue-950 p-4 text-sky-100 rounded-2xl">
      <p>Title: {title}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default GameCards;
