import { format, fromUnixTime } from 'date-fns';

function headingRender(weatherData) {
  const element = document.createElement('div');
  element.classList.add('heading');

  const location = document.createElement('h1');
  location.textContent = weatherData.resolvedAddress;

  const date = document.createElement('p');
  date.textContent = format(fromUnixTime(weatherData.currentConditions.datetimeEpoch), 'EEEE d MMMM y | HH:mm');

  element.appendChild(location);
  element.appendChild(date);

  return element;
}

export default headingRender;
