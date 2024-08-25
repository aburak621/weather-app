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
  mainContainer.appendChild(currentWeatherDetails(weatherData));
  mainContainer.appendChild(weeklyForecastRender(weatherData));
});

async function getWeatherDataForLocation(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=2RZ47MU2K54AF8SUFJKS2R4LZ&contentType=json`);
  const weatherData = await response.json();
  return weatherData;
}

function currentWeatherRender(weatherData) {
  const element = document.createElement('section');
  element.classList.add('current-weather');

  const temp = document.createElement('span');
  temp.textContent = `${Math.round(weatherData.currentConditions.temp)}°C`;
  temp.classList.add('current-weather-temp');

  const conditions = document.createElement('span');
  conditions.textContent = weatherData.currentConditions.conditions;
  conditions.classList.add('current-weather-conditions');

  const feelsLike = document.createElement('span');
  feelsLike.textContent = `Feels like ${Math.round(weatherData.currentConditions.feelslike)}°C`;
  feelsLike.classList.add('current-weather-feels-like');

  element.appendChild(temp);
  element.appendChild(conditions);
  element.appendChild(feelsLike);

  return element;
}

function currentWeatherDetails(weatherData) {
  const element = document.createElement('section');
  element.classList.add('current-weather-details');

  const windData = document.createElement('div');
  windData.classList.add('current-weather-details-data');
  const windTitle = document.createElement('h4');
  windTitle.textContent = 'Wind';
  windTitle.classList.add('current-weather-details-title');
  const windDirection = document.createElement('span');
  windDirection.textContent = `${Math.round(weatherData.currentConditions.winddir)}°`;
  const windSpeed = document.createElement('span');
  windSpeed.textContent = `${Math.round(weatherData.currentConditions.windspeed)}km/h`;
  windData.appendChild(windTitle);
  windData.appendChild(windDirection);
  windData.appendChild(windSpeed);

  const humidityData = document.createElement('div');
  humidityData.classList.add('current-weather-details-data');
  const humidityTitle = document.createElement('h4');
  humidityTitle.textContent = 'Humidity';
  humidityTitle.classList.add('current-weather-details-title');
  const humidity = document.createElement('span');
  humidity.textContent = `${weatherData.currentConditions.humidity}%`;
  humidityData.appendChild(humidityTitle);
  humidityData.appendChild(humidity);

  const uvData = document.createElement('div');
  uvData.classList.add('current-weather-details-data');
  const uvTitle = document.createElement('h4');
  uvTitle.textContent = 'UV Index';
  uvTitle.classList.add('current-weather-details-title');
  const uvIndex = document.createElement('span');
  uvIndex.textContent = `${weatherData.currentConditions.uvindex}`;
  uvData.appendChild(uvTitle);
  uvData.appendChild(uvIndex);

  const visibilityData = document.createElement('div');
  visibilityData.classList.add('current-weather-details-data');
  const visibilityTitle = document.createElement('h4');
  visibilityTitle.textContent = 'Visibility';
  visibilityTitle.classList.add('current-weather-details-title');
  const visibility = document.createElement('span');
  visibility.textContent = `${weatherData.currentConditions.visibility}km`;
  visibilityData.appendChild(visibilityTitle);
  visibilityData.appendChild(visibility);

  const cloudinessData = document.createElement('div');
  cloudinessData.classList.add('current-weather-details-data');
  const cloudinessTitle = document.createElement('h4');
  cloudinessTitle.textContent = 'Cloudiness';
  cloudinessTitle.classList.add('current-weather-details-title');
  const cloudiness = document.createElement('span');
  cloudiness.textContent = `${weatherData.currentConditions.cloudcover}%`;
  cloudinessData.appendChild(cloudinessTitle);
  cloudinessData.appendChild(cloudiness);

  const chanceOfPrecipitationData = document.createElement('div');
  chanceOfPrecipitationData.classList.add('current-weather-details-data');
  const chanceOfPrecipitationTitle = document.createElement('h4');
  chanceOfPrecipitationTitle.textContent = 'Chance of Precipitation';
  chanceOfPrecipitationTitle.classList.add('current-weather-details-title');
  const chanceOfPrecipitation = document.createElement('span');
  chanceOfPrecipitation.textContent = `${weatherData.currentConditions.precipprob}%`;
  chanceOfPrecipitationData.appendChild(chanceOfPrecipitationTitle);
  chanceOfPrecipitationData.appendChild(chanceOfPrecipitation);

  element.appendChild(windData);
  element.appendChild(humidityData);
  element.appendChild(uvData);
  element.appendChild(visibilityData);
  element.appendChild(cloudinessData);
  element.appendChild(chanceOfPrecipitationData);

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

    const windDirection = document.createElement('span');
    windDirection.textContent = `${Math.round(weatherData.days[i].winddir)}°`;

    const windSpeed = document.createElement('span');
    windSpeed.textContent = `${Math.round(weatherData.days[i].windspeed)}`;

    dailyItem.appendChild(day);
    dailyItem.appendChild(tempMax);
    dailyItem.appendChild(tempMin);
    dailyItem.appendChild(windDirection);
    dailyItem.appendChild(windSpeed);

    list.appendChild(dailyItem);
  }

  element.appendChild(title);
  element.appendChild(list);

  return element;
}
