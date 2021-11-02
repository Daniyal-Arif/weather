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

    // refactor objects
    const newData = data.list.map((obj) => {
      return {
        date: obj.dt_txt.split(" ")[0],
        atmosphere: {
          feelsLike: Math.round(obj.main.feels_like - 272.15),
          humidity: obj.main.humidity,
          pressure: obj.main.pressure,
          wind: obj.wind.speed,
        },
        temperature: {
          temp: Math.round(obj.main.temp - 272.15),
          tempMax: Math.round(obj.main.temp_max - 272.15),
          tempMin: Math.round(obj.main.temp_min - 272.15),
        },
        description: obj.weather[0].description,
        iconTag: obj.weather[0].main.toLowerCase(),
      };
    });

    // filter objects based on day
    const currentDate = new Date();
    console.log(currentDate);
    currentDate.setDate(currentDate.getDate() + 3);
    console.log(currentDate);
    let dayOne = newData.filter((obj) => {
      console.log(obj.date);
      return (
        obj.date ===
        `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${
          currentDate.getDay() < 10
            ? "0" + currentDate.getDay()
            : currentDate.getDay()
        }`
      );
    });
    console.log(newData);
    console.log(dayOne);

    const markup = `
    <div class="forecast">
            <ul class="cards">
              <li class="card card-active">
                <a href="#" class="card-link">
                  <p class="date">${dayOne[0].date}</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/wind.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">33&#176;C</span>/
                    <span class="min-temperature">27&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">Friday 17</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/cold-temperature.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">33&#176;C</span>/
                    <span class="min-temperature">27&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">Friday 17</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/wind.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">33&#176;C</span>/
                    <span class="min-temperature">27&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">Friday 17</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/cold-temperature.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">33&#176;C</span>/
                    <span class="min-temperature">27&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">Friday 17</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/clouds.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">33&#176;C</span>/
                    <span class="min-temperature">27&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>
            </ul>
          </div>
    `;
    document
      .querySelector(".section-weather")
      .insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults("karachi");
