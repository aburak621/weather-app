function currentWeatherDetailsRender(weatherData) {
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

export default currentWeatherDetailsRender;
