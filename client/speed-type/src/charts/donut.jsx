import Chart from 'react-apexcharts';

const Donut = () => {
  const options = {};
  const series = [44, 55, 41];
  const labels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="donut">
      <Chart options={options} series={series} labels={labels} type="donut" width="300" />
    </div>
  );
};

export default Donut;
