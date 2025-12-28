const apiKey = "6f4ff5934ccb44cd004766638f67851d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const condition = data.weather[0].main;

if (condition === "Clouds") {
    weatherIcon.src = "clouds.png";
} 
else if (condition === "Clear") {
    weatherIcon.src = "clear.png";
} 
else if (condition === "Rain") {
    weatherIcon.src = "rain.png";
} 
else if (condition === "Drizzle") {
    weatherIcon.src = "drizzle.png";
} 
else if (condition === "Mist") {
    weatherIcon.src = "mist.png";
} 
else if (condition === "Haze") {
    weatherIcon.src = "haze.png";
} 
else if (condition === "Smoke") {
    weatherIcon.src = "smoke.png";
} 
else {
    weatherIcon.src = "clear.png"; // default fallback
}
document.querySelector(".weather").style.display = "block";

    } catch (error) {
        alert("City not found");
    }
}
    //document.querySelector(".weather").style.display = "block";

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});
