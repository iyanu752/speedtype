import Chart from "react-apexcharts";

const Area = () => {
  const series = [
    {
      name: "Last Month",
      data: [50, 40, 200, 220, 100, 250, 200, 230, 400, 410, 420, 430],
    },
    {
      name: "This Month",
      data: [60, 80, 400, 360, 310, 370, 250, 270, 510, 520, 530, 540],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    colors: ["#0028FF", "#71c3f7"],
    stroke: { lineCap: "round", curve: "smooth" },
    markers: { size: 0 },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
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
