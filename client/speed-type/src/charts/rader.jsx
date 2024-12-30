import Chart from 'react-apexcharts';

const Rader = () => {
    const series = [44, 55, 67, 83];
    const options = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    }
  
  
    
    

  return (
    <div className="rader">
      <Chart options={options} series={series}  type="radialBar" width="300" />
    </div>
  );
};

export default Rader;