import icons from "url:../../../src/img/icons.svg"; // url:../../../src/img/icons.svg";
import Chart from "chart.js/auto";
import View from "./View";

class SectionWeatherView extends View {
  _parentElement = document.querySelector(".forecast-card-container");

  _createDataNum(arrSize) {
    let sum = 0;
    if (arrSize === 0) return 0;
    for (let i = 0; i < arrSize; i++) {
      sum += this._data[i].length;
    }

    return sum;
  }

  generateMarkup() {
    return `
         <div class="forecast">
            <ul class="cards">
              <li class="card card-active" data-number="0">
                <a href="#" class="card-link">
                  <p class="date">${this._data[0][0].date}</p>
                  <img src="http://openweathermap.org/img/wn/${this._data[0][0].iconId}@2x.png" alt="" height="42" width="42" />
                  
                  <p class="temperature">
                    <span class="max-temperature">${this._data[0][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[0][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">${this._data[0][0].description}</p>
                </a>
              </li>

              <li class="card" data-number="1">
                <a href="#" class="card-link">
                  <p class="date">${this._data[1][0].date}</p>
                  <img src="http://openweathermap.org/img/wn/${this._data[1][0].iconId}@2x.png" alt="" height="42" width="42" />
                  <p class="temperature">
                    <span class="max-temperature">${this._data[1][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[1][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">${this._data[1][0].description}</p>
                </a>
              </li>

              <li class="card" data-number="2">
                <a href="#" class="card-link">
                  <p class="date">${this._data[2][0].date}</p>
                  <img src="http://openweathermap.org/img/wn/${this._data[2][0].iconId}@2x.png" alt="" height="42" width="42" />
                  <p class="temperature">
                    <span class="max-temperature">${this._data[2][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[2][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">${this._data[2][0].description}</p>
                </a>
              </li>

              <li class="card" data-number="3">
                <a href="#" class="card-link">
                  <p class="date">${this._data[3][0].date}</p>
                  <img src="http://openweathermap.org/img/wn/${this._data[3][0].iconId}@2x.png" alt="" height="42" width="42" />
                  <p class="temperature">
                    <span class="max-temperature">${this._data[3][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[3][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">${this._data[3][0].description}</p>
                </a>
              </li>

              <li class="card" data-number="4">
              <a href="#" class="card-link">
                <p class="date">${this._data[4][0].date}</p>
                <img src="http://openweathermap.org/img/wn/${this._data[4][0].iconId}@2x.png" alt="" height="42" width="42" />
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
              color: "white",
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

  addHandlerGraph(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".card");
      if (!btn) return;

      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("card-active");
        if (btn === card) card.classList.add("card-active");
      });
      const btnNum = +document.querySelector(".card-active").dataset.number;
      handler(btnNum);
    });
  }
}

export default new SectionWeatherView();
