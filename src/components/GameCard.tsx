type GameCardProps = {
  title: string;
  genre: string;
  rating: number;
};

function GameCard({ title, genre, rating }: GameCardProps) {
  return (
    <div className="bg-blue-800 p-3 rounded-2xl">
      <h2>Title : {title}</h2>
      <p>Genre : {genre}</p>
      <p>Rating : {rating}</p>
    </div>
  );
}

export default GameCard;
