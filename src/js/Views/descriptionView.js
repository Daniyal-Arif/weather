class DescriptionView {
  _parentElement = document.querySelector("section-more-info");

  render(data) {
    this._data = data;
    const markup = this.generateMarkup();
    this._parentElement.innerHTML = "";

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkup() {
    return `
      <div class="detailed-description">
            <div class="day">
              <p class="day-type">Day</p>
              <p class="day-info">Cloudy day. The high will stay at 33</p>
            </div>
            <div class="night">
              <p class="day-type">Night</p>
              <p class="day-info">Rainy night. The low will be at 27</p>
            </div>
          </div>

          <div class="atmosphere-info">
            <div class="atmosphere">
              <img
                class="logo"
                src="img/icon-pack/weather-114/svg/water.svg"
                alt="water droplets"
              />
              <div class="atmosphere-type">
                <p class="type">Percipitation</p>
                <span class="value">60</span>
                <span class="unit">%</span>
              </div>
            </div>
            <div class="atmosphere">
              <img
                class="logo"
                src="img/icon-pack/weather-114/svg/wind.svg"
                alt="water droplets"
              />
              <div class="atmosphere-type">
                <p class="type">humidity</p>
                <span class="value">72</span>
                <span class="unit">%</span>
              </div>
            </div>
            <div class="atmosphere">
              <img
                class="logo"
                src="img/icon-pack/weather-114/svg/temperature-feels-like.svg"
                alt="water droplets"
              />
              <div class="atmosphere-type">
                <p class="type">Feel's like</p>
                <span class="value">31</span>
                <span class="unit">&#176;</span>
              </div>
            </div>
            <div class="atmosphere">
              <img
                class="logo"
                src="img/icon-pack/weather-114/svg/wind.svg"
                alt="water droplets"
              />
              <div class="atmosphere-type">
                <p class="type">Wind Speed</p>
                <span class="value">14</span>
                <span class="unit">km/hr</span>
              </div>
            </div>
          </div>
      `;
  }
}

export default new DescriptionView();
