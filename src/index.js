import headingRender from './headingRender';
import currentWeatherRender from './currentWeatherRender';
import currentWeatherDetailsRender from './currentWeatherDetailsRender';
import weeklyForecastRender from './weeklyForecastRender';

const searchButton = document.querySelector('.search-button');
const searchQueryInput = document.querySelector('.search-input');
const mainContainer = document.querySelector('.main-container');

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherData = await getWeatherDataForLocation(searchQueryInput.value);

  // HACK: Temporary display.
  mainContainer.innerHTML = '';
  mainContainer.appendChild(headingRender(weatherData));
  mainContainer.appendChild(currentWeatherRender(weatherData));
  mainContainer.appendChild(currentWeatherDetailsRender(weatherData));
  mainContainer.appendChild(weeklyForecastRender(weatherData));
});

async function getWeatherDataForLocation(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=2RZ47MU2K54AF8SUFJKS2R4LZ&contentType=json`,
  );
  const weatherData = await response.json();
  return weatherData;
}
