import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Ornage", "Yellow", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#FF9f40", "#FFC234", "#36A2EB"],
      borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} />;
};

export default PieChart;
