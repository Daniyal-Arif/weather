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
