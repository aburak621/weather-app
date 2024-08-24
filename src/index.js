import { format } from 'date-fns';

const searchButton = document.querySelector('.search-button');
const searchQueryInput = document.querySelector('.search-input');
const mainContainer = document.querySelector('.main-container');

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherData = await getWeatherDataForLocation(searchQueryInput.value);

  // HACK: Temporary display.
  mainContainer.innerHTML = '';
  mainContainer.appendChild(currentWeatherRender(weatherData));
  mainContainer.appendChild(weeklyForecastRender(weatherData));
});

async function getWeatherDataForLocation(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=2RZ47MU2K54AF8SUFJKS2R4LZ&contentType=json`);
  const weatherData = await response.json();
  return weatherData;
}

// Might split current weather and current weather details.
function currentWeatherRender(weatherData) {
  const element = document.createElement('section');

  return element;
}

function weeklyForecastRender(weatherData) {
  const element = document.createElement('section');
  element.classList.add('weekly-forecast');

  const title = document.createElement('h3');
  title.textContent = 'Weekly Forecast';
  title.classList.add('weekly-forecast-title');

  const list = document.createElement('ul');
  list.classList.add('weekly-forecast-list');

  for (let i = 1; i <= 7; i += 1) {
    const dailyItem = document.createElement('li');
    dailyItem.classList.add('daily-forecast-item');

    const day = document.createElement('span');
    day.textContent = format(weatherData.days[i].datetime, 'EEEE');

    const tempMax = document.createElement('span');
    tempMax.textContent = `${Math.round(weatherData.days[i].tempmax)}°C`;
    const tempMin = document.createElement('span');
    tempMin.textContent = `${Math.round(weatherData.days[i].tempmin)}°C`;

    const windDir = document.createElement('span');
    windDir.textContent = `${Math.round(weatherData.days[i].winddir)}`;

    const windSpeed = document.createElement('span');
    windSpeed.textContent = `${Math.round(weatherData.days[i].windspeed)}`;

    dailyItem.appendChild(day);
    dailyItem.appendChild(tempMax);
    dailyItem.appendChild(tempMin);
    dailyItem.appendChild(windDir);
    dailyItem.appendChild(windSpeed);

    list.appendChild(dailyItem);
  }

  element.appendChild(title);
  element.appendChild(list);

  return element;
}
