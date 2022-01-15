import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../../assets/types";

const GraphView = () => {
  const channelSelectorStates = useSelector(
    (state: RootState) => state.budgetReducer.budgets
  );

  let myDataName =
    channelSelectorStates.length !== 0
      ? channelSelectorStates.map((data) => {
          const num = data.channelValue.replace(/,/g, "");
          return {
            name: data.channelName,
            uv: num,
          };
        })
      : [];

  return (
    <div>
      <br />
      <h4>Graphical analysis of channels</h4>
      <br />

      <ResponsiveContainer width="90%" aspect={2}>
        <LineChart
          width={700}
          height={700}
          data={myDataName}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphView;
