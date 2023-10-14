import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
    cutout: "70%",
  };

  return (
    <div className="bg-white h-80 lg:w-1/4 w-full p-4 mt-5 rounded-lg">
      <div className="flex flex-col">
        <div className="font-bold ">Customers</div>
        <span className="text-xs text-[grey]">Customers that buy products</span>
      </div>
      <Pie data={data} options={options} className="p-7" />
    </div>
  );
};

export default PieChart;
