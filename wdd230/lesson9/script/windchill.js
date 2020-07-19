//Values
let speed = 12;
let temp = 54;
buildWC(speed, temp);

function buildWC(speed, temp) {
    let windChill = document.getElementById('wind-chill');

    //Compute the Windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc)

    //Round the integer
    wc = Math.floor(wc);

    wc = (wc > temp) ? temp : wc;

    //Display the Chill
    windChill.innerHTML = wc;
}