import Chart from 'react-apexcharts';
import { useState, useEffect } from "react";
import { getBarStats } from '../services/dashstatsservice';

const Bar = () => {
    const [seriesData, setSeriesData] = useState ([0,0,0,0,0,0,0]) ;
    const dayOfTheWeek = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const fetchData = async () => {
      try {
        const highestScores = await getBarStats();
        const performanceScores = dayOfTheWeek.map((day) => {
          const stat = highestScores.find((entry) => entry.day === day);
          return stat ? parseFloat(stat.performanceScore).toFixed(2) : 0;
        });
        setSeriesData(performanceScores);
      } catch (error) {
        console.error("Error fetching highest scores:", error);
      }
    };

    useEffect(() => {
      fetchData()
    }, [])
  
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Highest Performance Score",
        data: seriesData,
      },
    ],
    options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#0028FF"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#0466c8",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: dayOfTheWeek,
      position: 'bottom', 
    },
    yaxis: {
      labels: {
        style: {
          colors: "#0466c8",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
    }
  };

  return (
    <div className="bar">
      <h5 className='text-h5 font-bold font-roboto p-[8px]'>HIGHEST PERFORMANCE SCORE</h5>
      <Chart options={chartConfig.options} series={chartConfig.series} type="bar" width="100%" height={'300'} />
    </div>
  );
};


export default Bar;