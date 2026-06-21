type GameCardsProps = {
  title: string;
  genre: string;
  rating: number;
};
function GameCards({ title, genre, rating }: GameCardsProps) {
  return (
    <div className="bg-slate-900 rounded-3xl p-4 text-sky-200">
      <h2>{title}</h2>
      <p>{genre}</p>
      <p>{rating}</p>
    </div>
  );
}

export default GameCards;
