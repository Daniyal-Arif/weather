import * as model from "./model.js";

import Chart from "chart.js/auto";

const plugin = {
  id: "custom_canvas_background_color",
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

const labels = ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Temperature",
      backgroundColor: "rgb(256 , 256 , 256)",
      borderColor: "rgb(256 , 256 , 256)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

const controlSearchResults = async function (city) {
  try {
    // load search results
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=dbf54ac89eff6b2c2ecbcaacd73096a4`
    );
    const data = await res.json();
    if (!res.ok) throw new Error("city does not exist");
    console.log(data.list);
    const newData = data.list.map((obj) => {
      return {
        date: obj.dt_txt,
        atmosphere: {
          feelsLike: Math.round(obj.main.feels_like - 272.15),
          humidity: obj.main.humidity,
          pressure: obj.main.pressure,
        },
        temperature: {
          temp: Math.round(obj.main.temp - 272.15),
          tempMax: Math.round(obj.main.temp_max - 272.15),
          tempMin: Math.round(obj.main.temp_min - 272.15),
        },
        description: obj.weather[0].description,
        iconTag: obj.weather[0].main,
      };
    });
    console.log(newData);
    // refactor data received
    const weather = {};
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults("karachi");
