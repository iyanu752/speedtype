export default function LeaderboardTable() {
    return (
      <div>
        <table className="border-2 border-solid w-[600px] h-[150px] rounded-lg bg-gradient-to-r from-darkblue to-blue text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-white bg-blue-700">Name</th>
              <th className="px-4 py-2 border-b border-white bg-blue-700">WPM</th>
              <th className="px-4 py-2 border-b border-white bg-blue-700">Accuracy</th>
              <th className="px-4 py-2 border-b border-white bg-blue-700">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-600 text-white">
              <td className="px-4 py-2 text-center">Anom</td>
              <td className="px-4 py-2 text-center">19</td>
              <td className="px-4 py-2 text-center">Male</td>
              <td className="px-4 py-2 text-center">Nigeria</td>
            </tr>
            <tr className="bg-blue-500 text-white">
              <td className="px-4 py-2 text-center">Megha</td>
              <td className="px-4 py-2 text-center">19</td>
              <td className="px-4 py-2 text-center">Female</td>
              <td className="px-4 py-2 text-center">USA</td>
            </tr>
            <tr className="bg-blue-600 text-white">
              <td className="px-4 py-2 text-center">Subham</td>
              <td className="px-4 py-2 text-center">25</td>
              <td className="px-4 py-2 text-center">Male</td>
              <td className="px-4 py-2 text-center">UK</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  