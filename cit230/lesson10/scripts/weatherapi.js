const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cec0709cb1fd453037d20ba93d946a93&units=imperial';


fetch(apiURL)
    .then(
        (response) => response.json()
        
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather.main.temp);

            let currentTemp = currentWeather.main.temp;
            let currentImageIcon = currentWeather.weather[0].icon;
            let currentImage = 'https://openweathermap.org/img/w/' + currentImageIcon + '.png';

            document.querySelector('#current-temp').textContent = currentTemp

            document.querySelector('#weather-icon')


        }
    );