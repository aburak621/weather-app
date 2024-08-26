function currentWeatherRender(weatherData) {
  const element = document.createElement('section');
  element.classList.add('current-weather');

  const temp = document.createElement('span');
  temp.textContent = `${Math.round(weatherData.currentConditions.temp)}°C`;
  temp.classList.add('current-weather-temp');

  const data = document.createElement('div');
  const conditions = document.createElement('p');
  conditions.textContent = weatherData.currentConditions.conditions;
  conditions.classList.add('current-weather-conditions');

  const feelsLike = document.createElement('p');
  feelsLike.textContent = `Feels like ${Math.round(weatherData.currentConditions.feelslike)}°C`;
  feelsLike.classList.add('current-weather-feels-like');

  data.appendChild(conditions);
  data.appendChild(feelsLike);

  element.appendChild(temp);
  element.appendChild(data);

  return element;
}

export default currentWeatherRender;
