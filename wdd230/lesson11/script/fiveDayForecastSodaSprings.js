const mydate = new Date();
const y = mydate.getDay();
let forecastDayNumber = y;
console.log(forecastDayNumber);
const myweekDay = new Array(7);
    myweekDay[0] = "Sunday";
    myweekDay[1] = "Monday";
    myweekDay[2] = "Tuesday";
    myweekDay[3] = "Wednesday";
    myweekDay[4] = "Thursday";
    myweekDay[5] = "Friday";
    myweekDay[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5607916&appid=cec0709cb1fd453037d20ba93d946a93&units=imperial";

    fetch(apiURL)
        .then((response) => response.json())
        .then((weatherInfo) => {

            console.log(weatherInfo);

            console.log(weatherInfo.city.name);

            const fiveDay = weatherInfo.list;

            let forecastDayNumber = y;
            console.log(forecastDayNumber);

            for (i = 0; i < fiveDay.length; i++){
                var time = fiveDay[i].dt_txt;
                if (time.includes('18:00:00')){

                    forecastDayNumber += 1;

                    if (forecastDayNumber === 7){
                        forecastDayNumber = 0;
                    }
                    
                    let theDayName = document.createElement("h3");
                    theDayName.textContent = myweekDay[forecastDayNumber];
                    console.log(">"+myweekDay[forecastDayNumber]);

                    let theTemp = document.createElement("p");
                    theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

                    let iconcode = weatherInfo.list[i].weather[0].icon;
                    let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                    let theIcon = document.createElement("img"); theIcon.src = iconPath

                    let theDay = document.createElement("div");
                    theDay.appendChild(theDayName);
                    theDay.appendChild(theIcon);
                    theDay.appendChild(theTemp);

                    document.getElementById('forecast').appendChild(theDay);

                }
            }

        });