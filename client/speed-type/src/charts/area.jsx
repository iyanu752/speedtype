import Chart from 'react-apexcharts';

const Area = () => {
    const series = [ {
      name: "Last Month",
      data: [50, 40, 200, 220, 100, 250, 200, 230, 400, 410, 420, 430],
    }, 
    {
      name: "This Month",
      data: [60, 80, 400, 360, 310, 370, 250, 270, 510, 520, 530, 540],
    }];
      const options = {
        chart: {
          height: 250,
          type: 'area',
          toolbar: {
            show: false,
          },
          title: {
            show: "",
          },
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#0028FF", "#71c3f7"],
        stroke: {
          lineCap: "round",
          curve: "smooth",
        },
        markers: {
          size: 0,
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
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
          categories: [
           "Jan",
            "Feb",
            "Mar", 
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          labels: {
            style: {
              colors: "#616161",
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
      };
    
  
    
    

  return (
    <div className="area ">
      <Chart options={options} series={series}  type="area" width="700" height= "300" />
    </div>
  );
};

export default Area;