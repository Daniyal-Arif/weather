class SearchView {
  _parentElement = document.querySelector(".search");
  getQuery() {
    const query = document.querySelector(".city-name-input").value;
    document.querySelector(".city-name-input").value = "";
    console.log(query);
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      document
        .querySelector(".section-weather")
        .classList.add("section-weather-active");
      e.preventDefault();
      handler();
    });
  }

  _displayBackgroundColor() {
    document
      .querySelector(".section-weather")
      .classList.add(".section-weather-active");
  }
}

export default new SearchView();
