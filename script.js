const API_KEY = '6c7541d7f7dc42e9ac8210441230211';
const weatherData = document.getElementById('weatherData');
const cityInput = document.getElementById('cityInput');

function fetchWeatherByCity() {
    const city = cityInput.value.trim();

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
        .then((response) => response.json())
        .then((data) => {
            const location = document.getElementById('location');
            const temperature = document.getElementById('temperature');
            const description = document.getElementById('description');

            const locationName = data.location.name;
            const locationCountry = data.location.country;
            const tempC = data.current.temp_c;
            const weatherText = data.current.condition.text;
            const weatherIcon = data.current.condition.icon;

            location.textContent = `Location: ${locationName}, ${locationCountry}`;
            temperature.innerHTML = ` ${tempC}°C`;
            description.textContent = `Description: ${weatherText}`;
            // Add more fields as needed
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('City not found. Please check the city name.');
        });
}
