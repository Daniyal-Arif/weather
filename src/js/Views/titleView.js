import View from "./View.js";

class TitleView extends View {
  _parentElement = document.querySelector(".nav");

  generateMarkup() {
    return `
    <img src="http://openweathermap.org/img/wn/${this._data[0][0].iconId}@2x.png" alt="" height="42" width="42" />
  <p class="header-temp">${this._data[0][0].temperature.temp}&#176;C</p>
  <p class="header-description">${this._data[0][0].description}</p>
      `;
  }
}

export default new TitleView();
