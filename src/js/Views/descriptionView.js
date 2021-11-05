import icons from "url:../../../src/img/icons.svg";
import View from "./View";

class DescriptionView extends View {
  _parentElement = document.querySelector(".section-more-info");

  generateMarkup() {
    return `
      <div class="detailed-description">
            <div class="day">
              <p class="day-type">Day</p>
              <p class="day-info">${
                this._data[0][0].description
              }. The temperature will stay at ${
      this._data[0][0].temperature.tempMax
    }</p>
            </div>
            <div class="night">
              <p class="day-type">Night</p>
              <p class="day-info">${
                this._data[0].length < 2
                  ? this._data[1][0].description
                  : this._data[0].slice(-1)[0].description
              }. The temperature will be at ${
      this._data[0].slice(-1)[0].temperature.tempMax
    }</p>
            </div>
          </div>

          <div class="atmosphere-info">
            <div class="atmosphere">
            <svg class="logo">
            <use href="${icons}#icon-pressure"></use>
          </svg>
              <div class="atmosphere-type">
                <p class="type">Pressure</p>
                <span class="value">${
                  this._data[0][0].atmosphere.pressure
                }</span>
                <span class="unit">mbar</span>
              </div>
            </div>
            <div class="atmosphere">
            <svg class="logo">
            <use href="${icons}#icon-water"></use>
          </svg>
              <div class="atmosphere-type">
                <p class="type">humidity</p>
                <span class="value">${
                  this._data[0][0].atmosphere.humidity
                }</span>
                <span class="unit">%</span>
              </div>
            </div>
            <div class="atmosphere">
            <svg class="logo">
            <use href="${icons}#icon-temperature"></use>
          </svg>
              <div class="atmosphere-type">
                <p class="type">Feel's like</p>
                <span class="value">${
                  this._data[0][0].atmosphere.feelsLike
                }</span>
                <span class="unit">&#176;</span>
              </div>
            </div>
            <div class="atmosphere">
            <svg class="logo">
            <use href="${icons}#icon-wind"></use>
          </svg>
              <div class="atmosphere-type">
                <p class="type">Wind Speed</p>
                <span class="value">${this._data[0][0].atmosphere.wind}</span>
                <span class="unit">km/hr</span>
              </div>
            </div>
          </div>
      `;
  }
}

export default new DescriptionView();
