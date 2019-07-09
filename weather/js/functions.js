/* Weather Site Java Script Functions */
console.log('My javascript is being read.');




// Variables for function use
let temp = 31;
let speed = 5;
buildWC(speed, temp);
let direction = "NW";
windDial(direction);

/* Windchill Calculator */
function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feelTemp');
// Compute the Windchill
let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
console.log(wc);
// Round the answer down to integer
    wc = Math.floor(wc);
// If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;
// Display the windchill
    console.log(wc);
    feelTemp.innerHTML = wc;
}

// Wind Dial Function
function windDial(direction){
// Get the wind dial container
    let dial = document.getElementById("dial");
// Determine the dial class
    switch (direction){
        case "North":
        case "N":
            dial.setAttribute("class", "n");
            break;
        case "NE":
        case "NNE":
        case "ENE":
            dial.setAttribute("class", "ne");
            break;
        case "NW":
        case "NNW":
        case "WNW":
            dial.setAttribute("class", "nw");
            break;
        case "South":
        case "S":
            dial.setAttribute("class", "s");
            break;
        case "SE":
        case "SSE":
        case "ESE":
            dial.setAttribute("class", "se");
            break;
        case "SW":
        case "SSW":
        case "WSW":
            dial.setAttribute("class", "sw");
            break;
        case "East":
        case "E":
            dial.setAttribute("class", "e");
            break;
        case "West":
        case "W":
            dial.setAttribute("class", "w");
            break;
    }
}

//Background Image
let condition = document.getElementById("condition").innerHTML;
let lower = condition.toLowerCase();

getCondition(lower);

// Strings
function getCondition(lower) {
    console.log(lower);

    if (lower.includes('clear') || lower.includes('sunny')){
        return "clear";
    }

    if (lower.includes('rain') || lower.includes('storm') || lower.includes('raining')) {
        return "rain";
    }

    if (lower.includes('clouds') || lower.includes('cloudy')) {
        return "clouds";
    }

    if (lower.includes('fog') || lower.includes('mist') || lower.includes('hazy')){
        return "fog";
    }

    if (lower.includes('snow') || lower.includes('blizzard') || lower.includes('hail')){
        return "snow";
    }
    
}


let weather = getCondition(lower);

changeSummaryImage(weather);

function changeSummaryImage(weather) {

    let maincontainers = document.getElementById("weather-images");
    let weathercondition = document.getElementById("small-condition");

    if (weather == "clear") {
        maincontainers.setAttribute("class", "clear");
        weathercondition.setAttribute("class", "clear");
    }

    if (weather == "rain") {
        maincontainers.setAttribute("class", "rain");
        weathercondition.setAttribute("class", "rain");
    }

    if (weather == "clouds") {
        maincontainers.setAttribute("class", "clouds");
        weathercondition.setAttribute("class", "clouds");
    }

    if (weather == "fog") {
        maincontainers.setAttribute("class", "fog");
        weathercondition.setAttribute("class", "fog");
    }

    if (weather == "snow") {
        maincontainers.setAttribute("class", "snow");
        weathercondition.setAttribute("class", "snow");
    }
}


let meters = document.getElementById('elevation').innerHTML;
// convertMeters (meters);
function convertMeters (elevation) {

    let feet = elevation*3.281;

    feet = Math.floor(feet);

    return feet + " ft. ";

}

document.getElementById('elevation').innerHTML = convertMeters(meters);



//Convert time to 12 hour
function format_time(hour) {
    if(hour > 23) {
        hour -= 24;
    }
    let amPM = (hour > 11) ? "pm" : "am";
    if(hour > 12) {
        hour -= 12;
    }
    if(hour == 0){
        hour= "12"
    }
    return hour + amPM;

}

// Get the next hour based on the current time
let date = new Date();
let nextHour = date.getHours() + 1;

// Build the hourly temperature list
function buildHourlyData(nextHour, hourlyTemps) {
    // Data comes from a JavaScript object of hourly temp name - value pairs
    // Next hour should have a value between 0-23
    // The hourlyTemps variable holds an array of temperatures
    // Line 178 builds a list item showing the time for the next hour
    // and then the first element (value in index 0) from the hourly temps array
let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F</li>';
// Build the remaining list items using a for loop
for (let i = 1, x = hourlyTemps.length; i < x; i++) {
    hourlyListItems += '<li>' + format_time(nextHour+i) + ': ' + hourlyTemps[i] + '&deg;F</li>';
}
console.log('HourlyList is: ' +hourlyListItems);
return hourlyListItems; 


}
