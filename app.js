let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");
city = city.toLowerCase();

if (weather[city] !== undefined) {
  let temp = weather[city].temp;
  let celsius = Math.round(temp);
  let farenheit = Math.round((temp * 9)/5 + 32);
  let humidity = weather[city].humidity;

  alert(`It is currently ${celsius}°C (${farenheit}°F) in ${city} with a humidity of ${humidity}%`);
}else{
  alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather=${city}`);
}


//Feature 3 Fahrenheit & Celsius

function toFarenheit(event){
  event.preventDefault();
  let tempReading = document.querySelector("temp");
  tempReading.innerHTML = 66;
}

let farenheit = document.querySelector("#fahrenheit");
farenheit.addEventListener("click", toFarenheit);

function toCelsius(event){
  event.preventDefault();
  let tempReading = document.querySelector("temp");
  tempReading.innerHTML = 19;
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", toCelsius);