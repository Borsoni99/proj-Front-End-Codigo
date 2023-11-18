import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import weather from "../../data/weather.json";

const Grafic = ({ selectedVariables, startDate, endDate }) => {
  const [chartType, setChartType] = useState("line");
  const [filteredData, setFilteredData] = useState([]);

  const mudarVizu = () => {
    setChartType((prevType) => (prevType === "line" ? "bar" : "line"));
  };

  //filtro
  useEffect(() => {
    var resultDate = weather.filter(function (entry) {
      var entryDate = entry["Formatted Date"];
      return entryDate >= startDate && entryDate <= endDate;
    });

    const filteredData = resultDate.map((row) => {
      const filteredRow = {};
      selectedVariables.forEach((variable) => {
        filteredRow[variable] = row[variable];
      });
      filteredRow["Formatted Date"] = row["Formatted Date"];
      return filteredRow;
    });

    setFilteredData(filteredData);
  }, [selectedVariables, startDate, endDate]);

  //geração da tabela
  useEffect(() => {
    const labels = filteredData.map((row) => row["Formatted Date"]);
    const datasets = selectedVariables.map((variable) => ({
      label: variable,
      data: filteredData.map((row) => row[variable]),
      borderWidth: 1,
    }));
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: datasets,
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
  }, [chartType, filteredData, selectedVariables]);

  return (
    <div style={{ padding: "5vw", margin: "15hv" }}>
      <h1>Grafico</h1>
      <canvas id="myChart" width="400" height="300"></canvas>
      <button onClick={mudarVizu}>Mudar Vizualização</button>
    </div>
  );
};
export default Grafic;
