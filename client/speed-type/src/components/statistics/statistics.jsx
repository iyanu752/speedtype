import { useEffect, useState } from "react"
import { getTotalStats } from "../../services/dashstatsservice"


export default function Statistics() {
    const [stats, setStats] = useState({
        gamesPlayed: 0,
        bestAccuracy: 0,
        bestWPM: 0,
        rank: 0,
    })

    const fetchStats = async () => {
        try {
            const response = await getTotalStats()
            setStats(response);
        }catch (error) {
            console.error("Error fetching user statistics:", error);
        }
    };

    useEffect(() => {
        fetchStats()
    }, [])
    return (
     <>
    <h5 className=" text-h5 font-bold font-roboto p-[8px] text-slate-800 "> YOUR STATS </h5>
  <div className="flex flex-col gap-[24px]">
    <div className="bg-light-blue-600 p-6 rounded-xl shadow-md flex justify-between items-center text-white">
      <span className="text-lg font-semibold">Games Played:</span>
      <span className="text-2xl font-bold">{stats.gamesPlayed}</span>
    </div>
    <div className="bg-light-blue-500 p-6 rounded-xl shadow-md flex justify-between items-center text-white">
      <span className="text-lg font-semibold">Best Accuracy:</span>
      <span className="text-2xl font-bold">{stats.bestAccuracy}%</span>
    </div>
    <div className="bg-light-blue-400 p-6 rounded-xl shadow-md flex justify-between items-center text-white">
      <span className="text-lg font-semibold">Best WPM:</span>
      <span className="text-2xl font-bold">{stats.bestWPM} wpm</span>
    </div>

    <div className="bg-light-blue-300 p-6 rounded-xl shadow-md flex justify-between items-center text-white">
      <span className="text-lg font-semibold">Leaderboard Rank: </span>
      <span className="text-2xl font-bold">{stats.rank}</span>
    </div>
  </div>
        </>
    )
}