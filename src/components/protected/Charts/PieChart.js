import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ chartData }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData({
      labels: chartData?.map(({ name }) => name),
      datasets: [
        {
          label: "# of Votes",
          data: chartData?.map(({ count }) => count),
          backgroundColor: ["#FF9f40", "#FFC234", "#36A2EB"],
          borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
          borderWidth: 1,
        },
      ],
    });

    setLoading(false);
  }, [chartData]);

  if (loading) {
    return <div>Loading ... </div>;
  }
  return <Pie data={data} />;
};

export default PieChart;
