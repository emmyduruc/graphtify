import ReactApexChart from "react-apexcharts";
import { mockdbData } from "../../assets/mockdbData";

const GraphView = () => {
  const series = [
    {
      name: "SEA",
      data: [9, 67, 45, 55],
    },
    {
      name: "Display",
      data: [0, 28],
    },
    {
      name: "Social",
      data: [12, 56, 63],
    },
    {
      name: "Affiliate",
      data: [2, 5, 1],
    },
    {
      name: "Remarketing",
      data: [34],
    },
  ];
  const options = {
    chart: {
      height: 450,

      stroke: {
        curve: "smooth",
      },
    },
  };

  return (
    <div>
      <br />
      <h4>Graphical analysis</h4>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default GraphView;
