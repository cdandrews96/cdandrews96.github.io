const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cec0709cb1fd453037d20ba93d946a93"



fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;

    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
    });