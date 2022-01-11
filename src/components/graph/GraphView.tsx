
import ReactApexChart from 'react-apexcharts';

const GraphView = () => {
  
    const series = [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series1",
        data: [1, 40, 98, 51, 62, 19, 140],
      },
    ];
    
  
  const options = {
    chart: {
      height: 450,
      
      stroke: {
        curve: "smooth",
      },
      zoom: {
        enabled: true
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  };

  return (
    <div>
<br/>
<h4>Graphical analysis</h4>
<br/>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default GraphView;

