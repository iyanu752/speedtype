import { Card, Typography } from "@material-tailwind/react";
export default function LeaderboardTable() {

  const TABLE_HEAD = ["Rank", "Username", "Country", "Points"];
 
const TABLE_ROWS = [
  {
    rank: "1",
    name: "John Michael",
    country: "USA",
    points: "106",
  
  },
  {
    rank: "2",
    name: "Alexa Liras",
    country: "Italy",
    points: "100",
  
  },
  {
    rank: "3",
    name: "Laurent Perrier",
    country: "France",
    points: "94",
   
  },
  {
    rank: "4",
    name: "Michael Levi",
    country: "Germany",
    points: "87",
    
  },
  {
    rank: "5",
    name: "Richard Gran",
    country: "UK",
    points: "66",
  
  },
];

  return (
    <div className="w-full bg-white">
      {/* <table className=" w-full h-auto  rounded-lg  ">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-black bg-blue-700">Name</th>
            <th className="px-4 py-2 border-b border-black bg-blue-700">WPM</th>
            <th className="px-4 py-2 border-b border-black bg-blue-700">Accuracy</th>
            <th className="px-4 py-2 border-b border-black bg-blue-700">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-600 ">
            <td className="px-4 py-2 text-center">Anom</td>
            <td className="px-4 py-2 text-center">19</td>
            <td className="px-4 py-2 text-center">Male</td>
            <td className="px-4 py-2 text-center">Nigeria</td>
          </tr>
          <tr className="bg-blue-500 ">
            <td className="px-4 py-2 text-center">Megha</td>
            <td className="px-4 py-2 text-center">19</td>
            <td className="px-4 py-2 text-center">Female</td>
            <td className="px-4 py-2 text-center">USA</td>
          </tr>
          <tr className="bg-blue-600 ">
            <td className="px-4 py-2 text-center">Subham</td>
            <td className="px-4 py-2 text-center">25</td>
            <td className="px-4 py-2 text-center">Male</td>
            <td className="px-4 py-2 text-center">UK</td>
          </tr>
        </tbody>
      </table> */}

<Card className="h-full w-full ">
      <table className="w-full min-w-max table-auto ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-white bg-white p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({rank, name, country, points }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {rank}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {country}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {points}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>

    </div>
  );
}
