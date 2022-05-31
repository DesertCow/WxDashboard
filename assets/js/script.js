//
//
// Clayton Skaggs
// 5-31-2022
// ============================== Varriable Decleration ================================

var currentTime = moment();

// ################# Live City Card #################
var liveCityDateEl = document.querySelector(".liveCityDate");
var liveCityTempEl = document.querySelector(".liveCityTemp");
var liveCityWindEl = document.querySelector(".liveCityWind");
var liveCityHumidityEl = document.querySelector(".liveCityHumidity");
var liveCityUVEl = document.querySelector(".liveCityUVindex");

// ################# Forecast Card Day 1 #################
var forecastcard1CityDateEL = document.querySelector(".forecastcard1CityDate");
var forecastcard1TempEL = document.querySelector(".day1ForeTemp");
var forecastcard1WindEL = document.querySelector(".day1ForeWind");
var forecastcard1HumidityEL = document.querySelector(".day1ForeHumidity");

// ################# Forecast Card Day 2 #################
var forecastcard2CityDateEL = document.querySelector(".forecastcard2CityDate");
var forecastcard2TempEL = document.querySelector(".day2ForeTemp");
var forecastcard2WindEL = document.querySelector(".day2ForeWind");
var forecastcard2HumidityEL = document.querySelector(".day2ForeHumidity");

// ################# Forecast Card Day 3 #################
var forecastcard3CityDateEL = document.querySelector(".forecastcard3CityDate");
var forecastcard3TempEL = document.querySelector(".day3ForeTemp");
var forecastcard3WindEL = document.querySelector(".day3ForeWind");
var forecastcard3HumidityEL = document.querySelector(".day3ForeHumidity");

// ################# Forecast Card Day 4 #################
var forecastcard4CityDateEL = document.querySelector(".forecastcard4CityDate");
var forecastcard4TempEL = document.querySelector(".day4ForeTemp");
var forecastcard4WindEL = document.querySelector(".day4ForeWind");
var forecastcard4HumidityEL = document.querySelector(".day4ForeHumidity");

// ################# Forecast Card Day 5 #################
var forecastcard5CityDateEL = document.querySelector(".forecastcard5CityDate");
var forecastcard5TempEL = document.querySelector(".day5ForeTemp");
var forecastcard5WindEL = document.querySelector(".day5ForeWind");
var forecastcard5HumidityEL = document.querySelector(".day5ForeHumidity");

// ################# Search Text Box #################

var searchBoxInput = document.querySelector(".searchBoxInput");

// ################# Button Decleration #################

var searchButton = document.querySelector(".searchBtn");

var cityButtonn1 = document.querySelector(".cityBtn1");
var cityButtonn2 = document.querySelector(".cityBtn2");
var cityButtonn3 = document.querySelector(".cityBtn3");
var cityButtonn4 = document.querySelector(".cityBtn4");
var cityButtonn5 = document.querySelector(".cityBtn5");
var cityButtonn6 = document.querySelector(".cityBtn6");
var cityButtonn7 = document.querySelector(".cityBtn7");
var cityButtonn8 = document.querySelector(".cityBtn8");


let currentCityWeather = {
  "city": "Austin",
  "date": "5-30-2022",
  "wxImgLink": "",
  "temp": "55",
  "wind": "55",
  "humidity": "84",
  "uvIndex": ".67",

}

var fiveDayForecast = [
  {
    "date": "6-1-2022",
    "wxImgLink": "",
    "temp": "70",
    "wind": "15",
    "humidity": "34",
  },
  {
    "date": "6-2-2022",
    "wxImgLink": "",
    "temp": "70",
    "wind": "15",
    "humidity": "45",
  },
  {
    "date": "6-3-2022",
    "wxImgLink": "",
    "temp": "70",
    "wind": "15",
    "humidity": "45",
  },
  {
    "date": "6-4-2022",
    "wxImgLink": "",
    "temp": "70",
    "wind": "15",
    "humidity": "45",
  },
  {
    "date": "6-5-2022",
    "wxImgLink": "",
    "temp": "70",
    "wind": "15",
    "humidity": "45",
  }
]


// // ############################## Button Listeners ##################################

searchButton.addEventListener("click", function (clickEvent) {

  console.log("Search Button Clicked! SEARCH = " + searchBoxInput.value);

  currentCityWeatherUpdate(searchBoxInput.value);

  // Update local storage to match currentCityWeather and fiveDayForecast

  refreshPageData();

});

cityButtonn1.addEventListener("click", function (clickEvent) {

  console.log("City Button #1 Clicked!");

});

cityButtonn2.addEventListener("click", function (clickEvent) {

  console.log("City Button #2 Clicked!");

});

cityButtonn3.addEventListener("click", function (clickEvent) {

  console.log("City Button #3 Clicked!");

});

cityButtonn4.addEventListener("click", function (clickEvent) {

  console.log("City Button #4 Clicked!");

});

cityButtonn5.addEventListener("click", function (clickEvent) {

  console.log("City Button #5 Clicked!");

});

cityButtonn6.addEventListener("click", function (clickEvent) {

  console.log("City Button #6 Clicked!");

});

cityButtonn7.addEventListener("click", function (clickEvent) {

  console.log("City Button #7 Clicked!");

});

cityButtonn8.addEventListener("click", function (clickEvent) {

  console.log("City Button #8 Clicked!");

});


// ############################ Mouse Over/Out Listeners ###############################




// =============================== Function Decleration ================================


// ################# FUNCTION_1 #################

function refreshPageData() {

  // Add code to update Local storeage each time the page is updaed.

  liveCityDateEl.textContent = currentCityWeather.city + " " + currentCityWeather.date;
  liveCityTempEl.textContent = "Temperature: " + currentCityWeather.temp;
  liveCityWindEl.textContent = "Wind: " + currentCityWeather.wind + " mph";
  liveCityHumidityEl.textContent = "Humidity: " + currentCityWeather.humidity + " %";
  liveCityUVEl.textContent = "UV Index: " + currentCityWeather.uvIndex;

  //forecastcard1CityDateEL.textContent = "Austin, TX  (6-2-2022)";
  forecastcard1TempEL.textContent = "Temperature: " + fiveDayForecast[0].temp;
  forecastcard1WindEL.textContent = "Wind: " + fiveDayForecast[0].wind + " mph";
  forecastcard1HumidityEL.textContent = "Humidity: " + fiveDayForecast[0].humidity + " %";

  // forecastcard2CityDateEL.textContent = "Austin, TX  (6-3-2022)";
  forecastcard2TempEL.textContent = "Temperature: " + fiveDayForecast[1].temp;
  forecastcard2WindEL.textContent = "Wind: " + fiveDayForecast[1].wind + " mph";
  forecastcard2HumidityEL.textContent = "Humidity: " + fiveDayForecast[1].humidity + " %";

  // forecastcard3CityDateEL.textContent = "Austin, TX  (6-4-2022)";
  forecastcard3TempEL.textContent = "Temperature: " + fiveDayForecast[2].temp;
  forecastcard3WindEL.textContent = "Wind: " + fiveDayForecast[2].wind + " mph";
  forecastcard3HumidityEL.textContent = "Humidity: " + fiveDayForecast[2].humidity + " %";

  // forecastcard4CityDateEL.textContent = "Austin, TX  (6-5-2022)";
  forecastcard4TempEL.textContent = "Temperature: " + fiveDayForecast[3].temp;
  forecastcard4WindEL.textContent = "Wind: " + fiveDayForecast[3].wind + " mph";
  forecastcard4HumidityEL.textContent = "Humidity: " + fiveDayForecast[3].humidity + " %";

  // forecastcard5CityDateEL.textContent = "Austin, TX  (6-6-2022)";
  forecastcard5TempEL.textContent = "Temperature: " + fiveDayForecast[4].temp;
  forecastcard5WindEL.textContent = "Wind: " + fiveDayForecast[4].wind + " mph";
  forecastcard5HumidityEL.textContent = "Humidity: " + fiveDayForecast[4].humidity + " %";

}

// ################# FUNCTION_1 #################
// ################# FUNCTION_1 #################
// ################# FUNCTION_1 #################
// ################# FUNCTION_1 #################

// ################# currentCityWeatherUpdate #################
function currentCityWeatherUpdate(searchCity) {

  var outputLATLON = new Array(2);
  var newCityWeather = {};


  console.log("Kicking off new search with " + searchCity);

  // Convert City to LAT/LON to API call
  outputLATLON = convertCitytoLATLON(searchCity);

  console.log("[currentCityWeatherUpdate] || LAT = " + outputLATLON[0] + " || LON = " + outputLATLON[1]);

  // Function to call API to get weather for City based on LAT/LON || Return 

  newCityWeather = cityWeatherFetch(outputLATLON);

  // Update Program Array with Data returned from function above
  //currentCityWeather = newCityWeather;

  refreshPageData();




  // return ??;
}

// ################# convertCitytoLATLON #################
function convertCitytoLATLON() {

  var outputArray = new Array(2);

  //needs logic to convert City to LAT/LON

  outputArray[0] = "33.44";
  outputArray[1] = "-94.04";

  return outputArray
}

// ################# cityWeatherFetch #################
function cityWeatherFetch(location) {


  var lat = location[0];
  var lon = location[1];
  var apiCall = "VOID";

  let cityWeather = {
    "city": "VOID",
    "date": "VOID",
    "wxImgLink": "VOID",
    "temp": "VOID",
    "wind": "VOID",
    "humidity": "VOID",
    "uvIndex": "VOID",
  }

  console.log("[cityWeatherFetch] || LAT = " + lat + " || LON = " + lon);

  apiCall = openWeatherAPICallGen(lat, lon, "current");

}


// ################# FUNCTION_1 #################
function openWeatherAPICallGen(lat, lon, exclude) {

  var superSecretAPIKey = "9c040bb6e1db52e48386cf880254ac09";

  var finalAPIcall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=" + exclude + "&appid=" + superSecretAPIKey + "";

  console.log("[openWeatherAPICall] = " + finalAPIcall);

  return finalAPIcall;

}








// ################# Init #################
function init() {

  // Function to load fiveDayForecast and currentCityWeather data into respective arrays

  refreshPageData();




}




// ====================================== MAIN ========================================

init();

// Main Code



// ==================================== END MAIN ======================================

