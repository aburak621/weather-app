import { format } from 'date-fns';

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

export default weeklyForecastRender;
