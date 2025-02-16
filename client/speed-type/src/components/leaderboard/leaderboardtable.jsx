import { Card, Typography } from "@material-tailwind/react";
import { getLeaderboard } from "../../services/dashstatsservice";
import { useEffect, useState } from "react";

export default function LeaderboardTable() {
  const [leaderboard, setLeaderboard] = useState([]);

  const TABLE_HEAD = ["Rank", "Username", "Country", "Points"];

  const fetchLeaderboard = async () => {
    try {
      const response = await getLeaderboard();

      if (response.success && Array.isArray(response.leaderboard)) {
        setLeaderboard(response.leaderboard);
      } else {
        setLeaderboard([]);
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setLeaderboard([]);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className="w-full bg-white">
      <h4 className=" text-h4 font-bold font-roboto p-[8px] text-slate-800"> LEADERBOARD </h4>
      <Card className="h-full w-full">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-white bg-white p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(({ rank, username,countryName, countryFlag, highestPerformanceScore }) => (
              <tr key={username}>
                <td>{rank}</td>
                <td>{username}</td>
                <td className="flex  text-center items-center justify-center flex-row gap-[8px]">{countryName} <img className="w-[24px] h-[16px]" src={countryFlag} alt=" country flag" /></td>
                <td>{highestPerformanceScore.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
