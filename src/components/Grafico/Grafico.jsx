import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";

const Grafic = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Monthly Sales",
            data: [12, 19, 3, 5, 2],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return () => myChart.destroy();
  }, []);

  return (
    <div>
      <h1>Grafico</h1>
      <canvas id="myChart" width="400" height="300"></canvas>
    </div>
  );
};

export default Grafic;
