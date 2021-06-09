console.log('Client side javascript file is loaded');

fetchWeather = (location) => {
  const url = 'http://api.weatherstack.com/current?access_key=ab424cf055bffaaddcaa53584fbf6400&query=' + location;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log('Error in retrieving weather information for weather stack');
      } else {
        result = data.location.name + ', ' + data.location.country + '. It is ' + data.current.weather_descriptions[0];
        console.log(result);
      }
    });
  });
};

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  messageTwo.textContent = '';
  messageOne.textContent = 'Loading...';
  const location = search.value;
  if (!location) {
    messageTwo.textContent = 'You must provide address.';
    messageOne.textContent = '';
  } else {
    const url = 'http://api.weatherstack.com/current?access_key=ab424cf055bffaaddcaa53584fbf6400&query=' + location;
    fetch(url).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          messageTwo.textContent = 'Error in retrieving weather information from weather stack';
          messageOne.textContent = '';
        } else {
          result = data.location.name + ', ' + data.location.country + '. It is ' + data.current.weather_descriptions[0];
          messageTwo.textContent = result;
          messageOne.textContent = '';
        }
      });
    });
  }
});
