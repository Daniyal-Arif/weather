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
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
