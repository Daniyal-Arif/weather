import icons from "url:../../../src/img/icons.svg";
import Chart from "chart.js/auto";
import View from "./View";

class SectionWeatherView extends View {
  _parentElement = document.querySelector(".forecast-card-container");

  generateMarkup() {
    return `
         <div class="forecast">
            <ul class="cards">
              <li class="card card-active">
                <a href="#" class="card-link">
                  <p class="date">${this._data[0][0].date}</p>
                  <svg class="logo">
                    <use href="${icons}#icon-cloud"></use>
                  </svg>
                  
                  <p class="temperature">
                    <span class="max-temperature">${this._data[0][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[0][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">${this._data[0][0].description}</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">${this._data[1][0].date}</p>
                  <svg class="logo">
                    <use href="${icons}#icon-cloud"></use>
                  </svg>
                  <p class="temperature">
                    <span class="max-temperature">${this._data[1][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[1][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">${this._data[1][0].description}</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">${this._data[2][0].date}</p>
                  <svg class="logo">
                    <use href="${icons}#icon-cloud"></use>
                  </svg>
                  <p class="temperature">
                    <span class="max-temperature">${this._data[2][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[2][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">${this._data[2][0].description}</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">${this._data[3][0].date}</p>
                  <svg class="logo">
                    <use href="${icons}#icon-cloud"></use>
                  </svg>
                  <p class="temperature">
                    <span class="max-temperature">${this._data[3][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[3][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">${this._data[3][0].description}</p>
                </a>
              </li>

              <li class="card">
              <a href="#" class="card-link">
                <p class="date">${this._data[4][0].date}</p>
                <svg class="logo">
                    <use href="${icons}#icon-cloud"></use>
                  </svg>
                <p class="temperature">
                  <span class="max-temperature">${this._data[4][0].temperature.tempMax}&#176;C</span>/
                  <span class="min-temperature">${this._data[4][0].temperature.tempMin}&#176;C</span>
                </p>
                <p class="weather-description">${this._data[4][0].description}</p>
              </a>
              </li>    
            </ul>
          </div>

          
    `;
  }

  _labels() {
    return ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM"];
  }
  _chartData(graphData) {
    return {
      // labels: this._labels(),
      datasets: [
        {
          label: "Temperature",
          backgroundColor: "rgb(256 , 256 , 256)",
          borderColor: "rgb(256 , 256 , 256)",
          data: graphData,
        },
      ],
    };
  }

  config(graphData) {
    console.log(graphData);
    return {
      type: "line",
      data: this._chartData(graphData),
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              display: false,
            },
            ticks: {
              suggestedMax: 100,
              suggesteMin: -100,
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
  }
}

export default new SectionWeatherView();
