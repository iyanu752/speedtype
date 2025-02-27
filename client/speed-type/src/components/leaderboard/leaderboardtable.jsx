import { Card, Typography } from "@material-tailwind/react";
import { getLeaderboard } from "../../services/dashstatsservice";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
export default function LeaderboardTable({ limit }) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const TABLE_HEAD = ["Rank", "Username", "Country", "Points"];

  const fetchLeaderboard = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  // Limit leaderboard to the top 5 if limit is provided
  const displayedLeaderboard = limit ? leaderboard.slice(0, limit) : leaderboard;

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-dark">
      <h4 className="text-h4 font-bold font-roboto p-[24px] text-slate-800 dark:text-white"> LEADERBOARD </h4>
      <Card className="h-full w-full bg-white dark:bg-dark dark:text-white shadow-md">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-dark">
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-gray-300 dark:bg-dark p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70 dark:text-white">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedLeaderboard.map(({ rank, username, countryName, countryFlag, highestPerformanceScore }) => (
              <tr key={username} className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="p-4 text-center dark:text-white">{rank}</td>
                <td className="p-4 text-center dark:text-white">{username}</td>
                <td className="p-4 flex items-center justify-center gap-2 dark:text-white">
                  {countryName} <img className="w-[24px] h-[16px]" src={countryFlag} alt="country flag" />
                </td>
                <td className="p-4 text-center dark:text-white">{highestPerformanceScore.toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center">
          <span className={`loader2 ${isLoading ? 'flex' : 'hidden'}`}></span>
        </div>
      </Card>
    </div>
  );
}

LeaderboardTable.propTypes ={
  limit: PropTypes.bool.isRequired
}
