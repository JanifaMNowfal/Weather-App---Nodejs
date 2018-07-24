const argv = require('yargs').argv;
const request = require('request');

let apiKey = 'c4a254bb4ab159d56de569c4fd88e122';
let city = argv.c;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function(err, response, body) {
if (err) {
   console.log('error:', error);
 }else {
   let weather = JSON.parse(body);
   let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
   console.log(message);
}
});
