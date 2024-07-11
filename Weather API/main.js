async function displayWeather() {
    const weatherBox = document.getElementById("weatherBox");
    const weatherPar = document.getElementById("weatherPar");
    const city = weatherBox.value;

    // Display the city weather in the paragraph
    url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=291a9e45147cc376dd0909c1ad808c98&q=${city}`
    const response = await fetch(url);
    const weatherObject = await response.json();
    const description = weatherObject.weather[0].description;
    const temperature = weatherObject.main.temp;

    weatherPar.innerHTML = 
    `Description: ${description}
    <br>
    Temperature: ${temperature}`;
}