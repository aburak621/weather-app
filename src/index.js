const searchButton = document.querySelector('.search-button');
const searchQueryInput = document.querySelector('.search-input');

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log(await getWeatherDataForLocation(searchQueryInput.value));
});

async function getWeatherDataForLocation(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=2RZ47MU2K54AF8SUFJKS2R4LZ&contentType=json`);
  const weatherData = await response.json();
  return weatherData;
}
