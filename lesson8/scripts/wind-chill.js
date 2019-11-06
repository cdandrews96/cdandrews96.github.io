let currentTemp = 41; // t
let windSpeed = 8; // s
let windChill = Math.floor(35.74 + 0.6215*currentTemp - 35.75*Math.pow (windSpeed, 0.16) + 0.4275*currentTemp*Math.pow(windSpeed, 0.16));

document.getElementById("currentTemp").innerHTML = currentTemp + '&deg;';
document.getElementById("windSpeed").innerHTML = windSpeed + 'mph';
document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;';