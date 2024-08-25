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

export default currentWeatherRender;
