import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import { getAreaStatistics } from "../services/dashstatsservice";
const Area = () => {
  const [seriesData, setSeriesData] = useState ([0,0,0,0,0,0,0]) ;
  const dayOfTheWeek = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const fetchData = async () => {
    const areaStats = await getAreaStatistics();
  
    if (areaStats) {
      const scoresByDay = {};
      areaStats.forEach(({ day, performanceScore }) => {
        if (!scoresByDay[day]) {
          scoresByDay[day] = { total: 0, count: 0 };
        }
        scoresByDay[day].total += performanceScore;
        scoresByDay[day].count += 1;
      });
  
      const performanceScores = dayOfTheWeek.map((day) => {
        if (scoresByDay[day]) {
          return parseFloat((scoresByDay[day].total / scoresByDay[day].count).toFixed(2)); 
        }
        return 0.0;
      });
  
      setSeriesData(performanceScores);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [])




  const series = [
    {
      name: "Performance Score",
      data: seriesData,
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    colors: ["#0028FF"],
    stroke: { lineCap: "round", curve: "smooth" },
    markers: { size: 0 },
    xaxis: {
      categories: dayOfTheWeek,
      labels: { style: { fontSize: "12px" } },
    },
    yaxis: { labels: { style: { fontSize: "12px" } } },
    grid: {
      borderColor: "#dddddd",
      strokeDashArray: 5,
    },
    fill: { opacity: 0.8 },
    tooltip: { theme: "dark" },
  };

  return (
    <div
      className="area-chart-container w-full h-auto overflow-hidden"
      style={{ maxWidth: "100%", padding: "1rem" }}
    >
      <h4 className=" text-h4 font-bold font-roboto p-[8px] text-slate-800"> PERFORMANCE PROGRESS </h4>
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        height="300"
      />
    </div>
  );
};

export default Area;
