import * as model from "./model.js";
import titleView from "./Views/titleView.js";
import sectionWeatherView from "./Views/sectionWeatherView.js";
import descriptionView from "./Views/descriptionView.js";
import searchView from "./Views/searchView.js";

import Chart from "chart.js/auto";

// change background color of chart
// const plugin = {
//   id: "custom_canvas_background_color",
//   beforeDraw: (chart) => {
//     const ctx = chart.canvas.getContext("2d");
//     ctx.save();
//     ctx.globalCompositeOperation = "destination-over";
//     ctx.fillStyle = "transparent";
//     ctx.fillRect(0, 0, chart.width, chart.height);
//     ctx.restore();
//   },
// };

if (module.hot) {
  module.hot.accept();
}

let myChart;

const controlSearchResults = async function () {
  try {
    // get search query
    const query = searchView.getQuery();

    // load search results
    await model.loadWeather(query);
    // add error handling here

    // render title
    titleView.render(model.state.arrangedWeatherData);

    // render card data
    sectionWeatherView.render(model.state.arrangedWeatherData);

    // create a chart instance and render
    if (myChart) myChart.destroy();
    myChart = new Chart(
      document.getElementById("myChart"),
      sectionWeatherView.config(model.state.graphData)
    );

    // render description
    descriptionView.render(model.state.arrangedWeatherData);
  } catch (err) {
    console.log(err);
  }
};

const controlCardClick = function () {};

const init = function () {
  searchView.addHandlerSearch(controlSearchResults);
  sectionWeatherView.addHandlerGraph(controlCardClick);
};
init();
