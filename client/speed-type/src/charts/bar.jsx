import Chart from 'react-apexcharts';

const Bar = () => {
  const series = [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2]
      }];
      const options = {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "40%",
            borderRadius: 2,
            // dataLabels: {
            //   position: 'top', // top, center, bottom
            // },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: ["S", "M", "T", "W", "T", "F", "S"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
          tooltip: {
            enabled: true,
          }
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
    <div className="bar">
      <Chart options={options} series={series}  type="bar" width="300" height={'250'} />
    </div>
  );
};

export default Bar;