const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=ab424cf055bffaaddcaa53584fbf6400&query=' + latitude + ',' + longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degree out there. It feels like ' +
          body.current.feelslike +
          ' degree out.'
      );
    }
  });
};

module.exports = forecast;
