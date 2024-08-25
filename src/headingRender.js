import { format, fromUnixTime } from 'date-fns';

function headingRender(weatherData) {
  const element = document.createElement('header');
  element.classList.add('heading');

  const location = document.createElement('h1');
  location.textContent = weatherData.resolvedAddress;

  const date = document.createElement('span');
  date.textContent = format(fromUnixTime(weatherData.currentConditions.datetimeEpoch), 'EEEE d MMMM y | HH:mm');

  element.appendChild(location);
  element.appendChild(date);

  return element;
}

export default headingRender;
