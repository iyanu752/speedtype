import { typingGames } from "./typinggames";
import GameCard from "./gamecard";

export default function ChallengeList() {
  return (
    <div className="px-4 py-8 ">
      {typingGames.map((game, index) => (
        <GameCard 
          key={game.id || index} 
          game={game} 
        />
      ))}
    </div>
  );
}
