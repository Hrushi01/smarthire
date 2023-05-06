import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const Result = () => {
  const candidateName = "Hrushikesh";
  const scores = [80, 90, 70, 60, 85];
  const data = {
    labels: [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5",
    ],
    datasets: [
      {
        label: "Score",
        backgroundColor: "rgba(46, 204, 113,0.2)",
        borderColor: "rgba(46, 204, 113,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(46, 204, 113,0.4)",
        hoverBorderColor: "rgba(46, 204, 113,1)",
        data: scores,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  // Pi chat below
  // Pi chat below
  // Pi chat below
  const datapi = data.labels.map((label, index) => ({
    labels: [`${label} Correct`, `${label} Incorrect`],
    datasets: [
      {
        data: [scores[index], 100 - scores[index]],
        backgroundColor: ["rgba(46, 204, 113, 0.5)", "rgba(231, 76, 60, 0.5)"],
        borderColor: ["rgba(46, 204, 113, 1)", "rgba(231, 76, 60, 1)"],
        borderWidth: 1,
      },
    ],
  }));

  const optionspi = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10,
        padding: 20,
      },
    },
  };

  useEffect(() => {
    Chart.scaleService?.updateScaleDefaults("category", {
      ticks: {
        callback: function (label) {
          return label;
        },
      },
    });
  }, []);

  return (
    <>
      <div className="text-3xl font-serif font-bold my-4 flex justify-center">
        <div>Result For Self Evaluation</div>{" "}
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            <span className="font-bold"> Name:</span> {candidateName}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Bar Plot Scoring for each question
          </p>
        </div>
        <div className="border-t border-gray-200 w-10/12">
          <Bar data={data} options={options} />
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            <span className="font-bold"> Name:</span> {candidateName}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Pi Chart Visulozation for each question
          </p>
        </div>
        <div className="border-t border-gray-200 grid grid-cols-2">
          {datapi.map((questionData, index) => (
            <div key={index} className="flex items-center px-4 py-2">
              <div className="w-1/3">
                <Pie data={questionData} options={options} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Result;
