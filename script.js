let now = new Date();

let currentDate = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentDate.innerHTML = `${day} ${hour}:${minutes}`;



function displayCity(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#searchBar");
	let h1 = document.querySelector("h1");
	if (searchInput.value) {
		h1.innerHTML = `${searchInput.value}`;
	}
	cityRequest(searchInput.value)
}

function cityRequest(city){
	let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
	axios.get(apiUrl).then(showTemp)
}

let form = document.querySelector("form");
form.addEventListener("submit", displayCity);

function showTemp(response) {
	let temperature = Math.round(response.data.main.temp);
	let tempMain = document.querySelector("#tempMain");
	tempMain.innerHTML = `${temperature}°C`;
}

