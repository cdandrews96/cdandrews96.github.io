//Functions working together to get weather data for current location
'use strict';

// Set global variable for custom header required by NWS API
var idHeader = {
    headers: {
        "User-Agent": "Students Learning Project - and16137@byui.edu"
    }
};
//Call the function to get our location
getGeoLocation();
var storage = window.localStorage;

//Gets longitude and latitude of current location
function getGeoLocation() {
    const status = document.getElementById('status');
    status.innerHTML = 'Getting Location...';
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position){
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        //Combine the values
        const locale = lat + "," + long;
        console.log(`Lat and Long are: ${locale}.`);

        // Call getLocation function, send locale
        getLocation(locale);


    })
} else {
    status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
} // end else
} // end of getGeoLocation

//Gets location information from the NWS API
function getLocation(locale) {
    const URL = "https://api.weather.gov/points/" + locale;
    // NWS Uswer-Agent header (built above) will be the second parameter
    fetch(URL, idHeader)
    .then(function(respond){
        if(respond.ok){
            return response.json();
        }
        throw new Error('Response not OK.');
    })
    .then(function (data) {
        //Let's see what we got back
        console.log('Json object from getLocation function:');
        console.log(data);
        //Store datat to localstorage
        storage.setItem("locName", data.properties.relativeLocation.properties.city);
        storage.setItem("locState", data.properties.relativeLocation.properties.state);

        //Next, get the weather station ID before requesting current conditions
        //URL for station list is in the data object
        let stationsURL = data.properties.observationStations;
        //Call the function to get the list of weather stations
        getStationId(stationsURL);
    })
    .catch(error => console.log('There was a getLocation error: ', error))
} //end getLocation function
