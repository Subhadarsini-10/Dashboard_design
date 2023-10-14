import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ChevronDown } from "./Icons";

const BarChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dataValues = [10, 15, 8, 12, 20, 18, 25, 22, 17, 19, 14, 16];
  const highestValueIndex = dataValues.indexOf(Math.max(...dataValues));

  const backgroundColors = Array(dataValues.length).fill("#e6e6fa");

  backgroundColors[highestValueIndex] = "#6A5ACD";
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
          color: "white",
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 2,
      },
      line: {
        tension: 0.2,
        borderWidth: 2,
      },
    },
    tooltips: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleFontColor: "#ffffff",
      bodyFontColor: "#ffffff",
      displayColors: false,
      intersect: false,
    },
    animation: {
      duration: 1000,
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: backgroundColors,
        borderColor: "rgb(255, 99, 132)",
        data: dataValues,
        options: {
          plugins: {
            legend: {
              position: "top",
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        },
      },
    ],
  };
  return (
    <div className="bg-[white] h-80 lg:max-w-[850px] w-full mt-5 p-4 mx-auto rounded-lg">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="font-bold">Overview</div>
          <span className="text-xs">Monthly earning</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="text-xs">Quarterly</span>
          <ChevronDown stroke="black" />
        </div>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
