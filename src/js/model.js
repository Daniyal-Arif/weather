import { KEY } from "./config.js";

export const state = {
  daysInWeek: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  data: [],
  arrangedWeatherData: [], // arranged based on day, to be used in card
  graphData: [],
};

const createDataObject = function (data) {
  // set state.weatherData object
  const weatherData = data.list.map((obj) => {
    return {
      date: obj.dt_txt.split(" ")[0],
      time: convertTime(obj.dt_txt.split(" ")[1]),
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
      iconId: obj.weather[0].icon,
    };
  });

  // reset data after call
  state.arrangedWeatherData = [];

  for (let i = 0; i < 6; i++) {
    const newDate = createDate(i);

    state.arrangedWeatherData.push(
      weatherData.filter((obj) => {
        return obj.date === newDate;
      })
    );
  }
};

export const loadWeather = async function (city) {
  try {
    // AJAX call
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error("city does not exist");
    state.data = data;

    // return first 6 time and temperature
    state.graphData = createGraphData(data, 0);
    console.log(state.graphData);
    // create weatherDataObject
    createDataObject(data);
  } catch (err) {
    console.log(err);
  }
};

// data.list.map((obj) => obj.dt_txt.split(" ")[1]).findIndex()
// .filter((obj) => {
//     return (
//       obj.dt_txt.split(" ")[0] !==
//         new Date().toISOString().slice(0, 10) ||
//       createDate(1) !== obj.dt_txt.split(" ")[0]
//     );
//   })
export const createGraphData = function (data, i) {
  return data.list
    .slice(
      i,
      i +
        1 +
        data.list.findIndex((obj, _, arr) => {
          console.log(arr);
          return obj.dt_txt.split(" ")[1].includes("00:00:00"); // till and including 12 am
        })
    )
    .map((obj) => {
      const temperature = Math.round(obj.main.temp - 272.15);
      return {
        x: convertTime(obj.dt_txt.split(" ")[1]),
        y: temperature,
      };
    });
};

const createDate = function (day) {
  const date = new Date();
  date.setDate(date.getDate() + day);
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  }`;

  return formattedDate;
};

// 24 hour to 12 hour clock
const convertTime = function (time) {
  const hour = Number(time.split(":")[0]);
  const minute = Number(time.split(":")[1]);

  const formattedTime =
    hour > 12
      ? `${hour - 12}:${minute < 10 ? "0" + minute : minute} pm`
      : `${hour === 0 ? "12" : hour}:${minute < 10 ? "0" + minute : minute} ${
          hour === 12 ? "pm" : "am"
        }`;
  return formattedTime;
};
