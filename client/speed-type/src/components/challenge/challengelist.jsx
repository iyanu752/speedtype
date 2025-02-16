import { typingGames } from "./typinggames";
import GameCard from "./gamecard";

export default function ChallengeList() {
  return (
    <div className="px-4 py-8 ">
      <h4 className=" text-h4 font-bold font-roboto pb-[32px] text-slate-800"> CHALLENGES </h4>
      {typingGames.map((game, index) => (
        <GameCard 
          key={game.id || index} 
          game={game} 
        />
      ))}
    </div>
  );
}
