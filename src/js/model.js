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
  weatherData: [], // 40 objects in array
  arrangedWeatherData: [], // arranged based on day, to be used in card
};

export const loadWeather = async function (city) {
  try {
    // AJAX call
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error("city does not exist");

    // set state.weatherData object
    state.weatherData = data.list.map((obj) => {
      return {
        date: obj.dt_txt.split(" ")[0],
        cardDate: [],
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
      };
    });

    state.arrangedWeatherData = [];

    for (let i = 0; i < 6; i++) {
      const newDate = createDate(i);

      state.arrangedWeatherData.push(
        state.weatherData.filter((obj) => {
          return (
            obj.date ===
            `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${
              newDate.getDate() < 10
                ? "0" + newDate.getDate()
                : newDate.getDate()
            }`
          );
        })
      );
    }

    console.log(state.arrangedWeatherData);
  } catch (err) {
    console.log(err);
  }
};

const createDate = function (day) {
  const date = new Date();
  date.setDate(date.getDate() + day);
  console.log(date);
  return date;
};
