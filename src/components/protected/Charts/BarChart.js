import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

// export const data =

const BarChart = ({ chartData }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log({ chartData });

    if (chartData) {
      setData({
        labels: chartData.map(({ name }) => name),
        datasets: [
          {
            label: "Dataset 1",
            data: chartData.map(({ count }) => count),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
          },
        ],
      });
      setLoading(false);
    }
  }, [chartData]);

  console.log(data.labels);

  if (loading) {
    return <div>Loading ... </div>;
  }

  return <Bar options={options} data={data} />;
};

export default BarChart;
