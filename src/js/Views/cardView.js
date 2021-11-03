class CardView {
  _data;
  _parentElement = document.querySelector(".section-weather");

  render(data) {
    this._data = data;
    const markup = this.generateMarkup();
    this._parentElement.innerHTML = "";
    console.log(this._data[0][0].date);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkup() {
    return `
    <div class="forecast">
            <ul class="cards">
              <li class="card card-active">
                <a href="#" class="card-link">
                  <p class="date">${this._data[0][0].date}</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/wind.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">${this._data[0][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[0][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">${this._data[1][0].date}</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/cold-temperature.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">${this._data[1][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[1][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">${this._data[2][0].date}</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/wind.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">${this._data[2][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[2][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>

              <li class="card">
                <a href="#" class="card-link">
                  <p class="date">${this._data[3][0].date}</p>
                  <img
                    class="logo"
                    src="img/icon-pack/weather-114/svg/wind.svg"
                    alt=""
                  />
                  <p class="temperature">
                    <span class="max-temperature">${this._data[3][0].temperature.tempMax}&#176;C</span>/
                    <span class="min-temperature">${this._data[3][0].temperature.tempMin}&#176;C</span>
                  </p>
                  <p class="weather-description">Mostly cloudy</p>
                </a>
              </li>

              <li class="card">
              <a href="#" class="card-link">
                <p class="date">${this._data[4][0].date}</p>
                <img
                  class="logo"
                  src="img/icon-pack/weather-114/svg/wind.svg"
                  alt=""
                />
                <p class="temperature">
                  <span class="max-temperature">${this._data[4][0].temperature.tempMax}&#176;C</span>/
                  <span class="min-temperature">${this._data[4][0].temperature.tempMin}&#176;C</span>
                </p>
                <p class="weather-description">Mostly cloudy</p>
              </a>
            </li>

              
            </ul>
          </div>
    `;
  }
}

export default new CardView();
