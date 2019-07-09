"use strict"


let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('main-content');

let weatherURL = "weather.json";
fetchData(weatherURL);
function fetchData(weatherURL){
  let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
  .then(function(response) {
  if(response.ok){
  return response.json();
  }
  throw new ERROR('Network response was not OK.');
  })
  .then(function(data){
    // Check the data object that was retrieved
    console.log(data);
    // data is the full JavaScript object, but we only want the greenville part
    // shorten the variable and focus only on the data we want to reduce typing
    let g = data[cityName];

    // ************ Get the content ******************************

    // Get the location data
    let locName = g.City;
    let locState = g.State;
      // Put them together
    let fullName = locName+', '+locState;
      // Get the zip code, longitude, latitude, and elevation
    let areaCode = g.Zip;
    let longitude = g.Longitude;
    let latitude = g.Latitude;
    let elevation = g.Elevation;
    
      // See if it worked
    console.log('fullName is: '+fullName);
    console.log('zip code is: '+areaCode);
    console.log('longitude is: '+longitude);
    console.log('latitude is: '+latitude);
    console.log('elevation is: '+elevation);

    // Get the temperature data
    let temp = g.Temp;
    let high = g.High;
    let low = g.Low;
      //check to see if it worked
    console.log('temperature is: '+g.Temp);
    console.log('temperature high is: '+g.High);
    console.log('temperature low is: '+g.Low);


    // Get the wind data 
    let windSpeed = g.Wind;
    let windDirect = g.Direction;
    let windGust = g.Gusts;
      //Check to see if it worked
    console.log('wind speed is: '+g.Wind);
    console.log('wind speed is: '+g.Direction);
    console.log('wind gust is: '+g.Gusts);


    // Get the current conditions
    let condition = g.Summary;
      //Check to see if it worked
    console.log('weather condition is '+g.Summary);



    // Get the hourly data
    let hourly = g.Hourly; 

    // ************ Display the content ******************************
    // Set the title with the location name at the first
    // Gets the title element so it can be worked with
    let pageTitle = document.getElementById('page-title');
    // Create a text node containing the full name 
    let fullNameNode = document.createTextNode(fullName);
    // inserts the fullName value before any other content that might exist
    pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
    // When this is done the title should look something like this:
    // Greenville, SC | The Weather Site

    // Set the Location information
    // Get the h1 to display the city location
    let contentHeading = document.getElementById('g-header');
    contentHeading.innerHTML = fullName;
    // The h1 in main h1 should now say "Greenville, SC"
    document.getElementById('areaCode').innerHTML=areaCode;
    document.getElementById('greenLong').innerHTML=longitude;
    document.getElementById('greenLat').innerHTML=latitude;
      // Turn meters into feet
    let elevate=convertMeters(elevation);
    document.getElementById('elevation').innerHTML=elevate;


    // Set the temperature information
    document.getElementById('actual-temp').innerHTML=temp+"F";
      // Set high temperature
    document.getElementById('high').innerHTML=high+"F";
      // Set low temperature
    document.getElementById('low').innerHTML=low+"F";
      // Set the wind chill
    buildWC(windSpeed, temp);

    // Set the wind information
      //Set wind direction
    document.getElementById('wind-direct').innerHTML=windDirect;
    let windPointer=windDial(windDirect);
    document.getElementById('wind-image').innerHTML=windPointer;
      //Set wind gusts
    document.getElementById('wind-gusts').innerHTML=windGust;
      //Set wind speed
    document.getElementById('wind-speed').innerHTML=windSpeed+"mph";

    // Set the current conditions information
    document.getElementById('condition').innerHTML=condition;
      //Set the background image function
   let keyword= getCondition(condition);
   console.log(keyword);
    changeSummaryImage(keyword);


    // Set the hourly temperature information
    let hourlyNumbers=buildHourlyData(nextHour, hourly);
    document.getElementById('hourly-list').innerHTML=hourlyNumbers;

    // Change the status of the containers
    contentContainer.setAttribute('class', ''); // removes the hide class
    statusContainer.setAttribute('class', 'hide'); // hides the status container
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}