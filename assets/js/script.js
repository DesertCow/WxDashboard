//
//
// Clayton Skaggs
// 5-31-2022
// ============================== Varriable Decleration ================================

var currentTime = moment();

var superSecretAPIKey = "9c040bb6e1db52e48386cf880254ac09";

// ################# Live City Card #################
var liveCityDateEl = document.querySelector(".liveCityDate");
var liveCityTempEl = document.querySelector(".liveCityTemp");
var liveCityWindEl = document.querySelector(".liveCityWind");
var liveCityHumidityEl = document.querySelector(".liveCityHumidity");
var liveCityUVEl = document.querySelector(".liveCityUVindex");
var liveCityIconEl = document.querySelector(".liveCityIcon");

// ################# Forecast Card Day 1 #################
var forecastcard1CityDateEL = document.querySelector(".forecastcard1CityDate");
var forecastcard1TempEL = document.querySelector(".day1ForeTemp");
var forecastcard1WindEL = document.querySelector(".day1ForeWind");
var forecastcard1HumidityEL = document.querySelector(".day1ForeHumidity");
var forecastIcon1El = document.querySelector(".day1Icon");

// ################# Forecast Card Day 2 #################
var forecastcard2CityDateEL = document.querySelector(".forecastcard2CityDate");
var forecastcard2TempEL = document.querySelector(".day2ForeTemp");
var forecastcard2WindEL = document.querySelector(".day2ForeWind");
var forecastcard2HumidityEL = document.querySelector(".day2ForeHumidity");
var forecastIcon2El = document.querySelector(".day2Icon");

// ################# Forecast Card Day 3 #################
var forecastcard3CityDateEL = document.querySelector(".forecastcard3CityDate");
var forecastcard3TempEL = document.querySelector(".day3ForeTemp");
var forecastcard3WindEL = document.querySelector(".day3ForeWind");
var forecastcard3HumidityEL = document.querySelector(".day3ForeHumidity");
var forecastIcon3El = document.querySelector(".day3Icon");

// ################# Forecast Card Day 4 #################
var forecastcard4CityDateEL = document.querySelector(".forecastcard4CityDate");
var forecastcard4TempEL = document.querySelector(".day4ForeTemp");
var forecastcard4WindEL = document.querySelector(".day4ForeWind");
var forecastcard4HumidityEL = document.querySelector(".day4ForeHumidity");
var forecastIcon4El = document.querySelector(".day4Icon");

// ################# Forecast Card Day 5 #################
var forecastcard5CityDateEL = document.querySelector(".forecastcard5CityDate");
var forecastcard5TempEL = document.querySelector(".day5ForeTemp");
var forecastcard5WindEL = document.querySelector(".day5ForeWind");
var forecastcard5HumidityEL = document.querySelector(".day5ForeHumidity");
var forecastIcon5El = document.querySelector(".day5Icon");

// ################# Search Text Box #################

var searchBoxInput = document.querySelector(".searchBoxInput");
var searchHistoryListEl = document.querySelector(".searchHistoryList");

// ################# Button Decleration #################

var searchButton = document.querySelector(".searchBtn");

var cityButton1 = document.querySelector(".cityBtn1");
// var cityButton2 = document.querySelector(".cityBtn2");
// var cityButton3 = document.querySelector(".cityBtn3");
// var cityButton4 = document.querySelector(".cityBtn4");
// var cityButton5 = document.querySelector(".cityBtn5");
// var cityButton6 = document.querySelector(".cityBtn6");
// var cityButton7 = document.querySelector(".cityBtn7");
// var cityButton8 = document.querySelector(".cityBtn8");

let searchHistory = [];

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

  if (searchBoxInput.value) {

    console.log("Search Button Clicked! SEARCH = " + searchBoxInput.value);

    currentCityWeatherUpdate(searchBoxInput.value);

    searchHistory.push(searchBoxInput.value);

    //FOR LOOP
    searchHistoryListEl.append('<li><button type="button" class="btn cityBtn8 btn-primary btn-lg btn-block m-3">' + searchHistory[0] + '</button></li>')

    // Update local storage to match currentCityWeather and fiveDayForecast


    refreshPageData();

  }
  else {
    window.alert("Empty Search Input!");
  }



});

// cityButton1.addEventListener("click", function (clickEvent) {

//   console.log("City Button #1 Clicked!");

// });

// cityButton2.addEventListener("click", function (clickEvent) {

//   console.log("City Button #2 Clicked!");

// });

// cityButton3.addEventListener("click", function (clickEvent) {

//   console.log("City Button #3 Clicked!");

// });

// cityButton4.addEventListener("click", function (clickEvent) {

//   console.log("City Button #4 Clicked!");

// });

// cityButton5.addEventListener("click", function (clickEvent) {

//   console.log("City Button #5 Clicked!");

// });

// cityButton6.addEventListener("click", function (clickEvent) {

//   console.log("City Button #6 Clicked!");

// });

// cityButton7.addEventListener("click", function (clickEvent) {

//   console.log("City Button #7 Clicked!");

// });

// cityButton8.addEventListener("click", function (clickEvent) {

//   console.log("City Button #8 Clicked!");

// });


// ############################ Mouse Over/Out Listeners ###############################




// =============================== Function Decleration ================================


// ################# FUNCTION_1 #################

function refreshPageData() {

  // Add code to update Local storeage each time the page is updaed.

  liveCityDateEl.textContent = currentCityWeather.city + " " + currentCityWeather.date;
  liveCityTempEl.textContent = "Temperature: " + currentCityWeather.temp + " (F)";
  liveCityWindEl.textContent = "Wind: " + currentCityWeather.wind + " mph";
  liveCityHumidityEl.textContent = "Humidity: " + currentCityWeather.humidity + " %";
  liveCityUVEl.textContent = "UV Index: " + currentCityWeather.uvIndex;
  liveCityIconEl.src = currentCityWeather.wxImgLink;
  // Refresh ICON

  //forecastcard1CityDateEL.textContent = "Austin, TX  (6-2-2022)";
  forecastcard1TempEL.textContent = "Temperature: " + fiveDayForecast[0].temp;
  forecastcard1WindEL.textContent = "Wind: " + fiveDayForecast[0].wind + " mph";
  forecastcard1HumidityEL.textContent = "Humidity: " + fiveDayForecast[0].humidity + " %";
  forecastIcon1El.src = fiveDayForecast[0].wxImgLink;

  // forecastcard2CityDateEL.textContent = "Austin, TX  (6-3-2022)";
  forecastcard2TempEL.textContent = "Temperature: " + fiveDayForecast[1].temp;
  forecastcard2WindEL.textContent = "Wind: " + fiveDayForecast[1].wind + " mph";
  forecastcard2HumidityEL.textContent = "Humidity: " + fiveDayForecast[1].humidity + " %";
  forecastIcon2El.src = fiveDayForecast[1].wxImgLink;

  // forecastcard3CityDateEL.textContent = "Austin, TX  (6-4-2022)";
  forecastcard3TempEL.textContent = "Temperature: " + fiveDayForecast[2].temp;
  forecastcard3WindEL.textContent = "Wind: " + fiveDayForecast[2].wind + " mph";
  forecastcard3HumidityEL.textContent = "Humidity: " + fiveDayForecast[2].humidity + " %";
  forecastIcon3El.src = fiveDayForecast[2].wxImgLink;

  // forecastcard4CityDateEL.textContent = "Austin, TX  (6-5-2022)";
  forecastcard4TempEL.textContent = "Temperature: " + fiveDayForecast[3].temp;
  forecastcard4WindEL.textContent = "Wind: " + fiveDayForecast[3].wind + " mph";
  forecastcard4HumidityEL.textContent = "Humidity: " + fiveDayForecast[3].humidity + " %";
  forecastIcon4El.src = fiveDayForecast[3].wxImgLink;

  // forecastcard5CityDateEL.textContent = "Austin, TX  (6-6-2022)";
  forecastcard5TempEL.textContent = "Temperature: " + fiveDayForecast[4].temp;
  forecastcard5WindEL.textContent = "Wind: " + fiveDayForecast[4].wind + " mph";
  forecastcard5HumidityEL.textContent = "Humidity: " + fiveDayForecast[4].humidity + " %";
  forecastIcon5El.src = fiveDayForecast[4].wxImgLink;

}

// ################# FUNCTION_1 #################
// ################# FUNCTION_1 #################
// ################# FUNCTION_1 #################



// ################# currentCityWeatherUpdate #################
function currentCityWeatherUpdate(searchCity) {

  var outputLATLON = new Array(2);
  var newCityWeather = {};

  // currentCityWeather.city = searchCity;

  console.log("Kicking off new search with " + searchCity);

  // Convert City to LAT/LON to API call
  outputLATLON = convertCitytoLATLON(searchCity);

  console.log("TIMEOUT START!");

  // setTimeout(() => {
  //   console.log("Delayed for 1 second.");
  // }, "100000")

  // setTimeout(() => {
  //   // console.log("[cityWeatherFetch] Temp: " + currentCityWeather.temp);
  //   // console.log("[cityWeatherFetch] Wind: " + currentCityWeather.wind);
  //   // console.log("[cityWeatherFetch] Humidity: " + currentCityWeather.humidity);
  //   // console.log("[cityWeatherFetch] UV Index: " + currentCityWeather.uvIndex);
  //   // console.log("[cityWeatherFetch] Time: " + resultArray[4]);
  //   // console.log("[cityWeatherFetch] UTC Offset: " + resultArray[5]);
  //   refreshPageData();

  // }, 10000);

  console.log("TIMEOUT END!");

  console.log("[currentCityWeatherUpdate] || LAT = " + outputLATLON[0] + " || LON = " + outputLATLON[1]);

  // Function to call API to get weather for City based on LAT/LON || Return 

  // newCityWeather = cityWeatherFetch(outputLATLON);
  cityWeatherFetch(outputLATLON);

  // Update Program Array with Data returned from function above
  //currentCityWeather = newCityWeather;


  //refreshPageData();




  // return ??;
}

// ################# convertCitytoLATLON #################
function convertCitytoLATLON(city) {

  var outputArray = new Array(2);

  //needs logic to convert City to LAT/LON

  var finalAPICall2 = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + superSecretAPIKey;

  // console.log("City CAll = " + finalAPICall2)

  // fetch(finalAPICall2)
  //   .then(function (response) {

  //     // Check the console first to see the response.status
  //     console.log(response.status);

  //     if (response.status === 200) {
  //       console.log("Upload Valid: " + response.status);
  //     }
  //     else {
  //       console.log("ERROR: Upload invalid: " + response.status);
  //     }

  //     return response.json();

  //   })
  //   .then(function (data) {

  //     console.log("CITY LAT/LON: " + data[0].lat + "," + data[0].lon);

  //     outputArray[0] = data[0].lat;
  //     outputArray[1] = data[0].lon;

  //     return outputArray
  //     //console.log(data);
  //   });


  // Hardcode bypass for debug
  outputArray[0] = "33.44";
  outputArray[1] = "-117.04";

  return outputArray
}

// ################# cityWeatherFetch #################
function cityWeatherFetch(location) {


  var lat = location[0];
  var lon = location[1];
  var apiCall = "VOID";
  //var resultArray = new Array(6);

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

  var apiResult = openWeatherFetch(apiCall);

  setTimeout(() => {
    console.log("[cityWeatherFetch] Temp: " + currentCityWeather.temp);
    console.log("[cityWeatherFetch] Wind: " + currentCityWeather.wind);
    console.log("[cityWeatherFetch] Humidity: " + currentCityWeather.humidity);
    console.log("[cityWeatherFetch] UV Index: " + currentCityWeather.uvIndex);
    // console.log("[cityWeatherFetch] Time: " + resultArray[4]);
    // console.log("[cityWeatherFetch] UTC Offset: " + resultArray[5]);
    console.log("Search 0 =" + searchHistory[0]);
    console.log("Search 1 =" + searchHistory[1]);
    console.log("Search 2 =" + searchHistory[2]);
    refreshPageData();

  }, 2000);


}


// ################# openWeatherAPICallGen #################
function openWeatherAPICallGen(lat, lon, exclude) {

  var finalAPIcall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=" + exclude + "&appid=" + superSecretAPIKey + "&units=imperial";


  console.log("[openWeatherAPICall] = " + finalAPIcall);

  return finalAPIcall;

}

// ################# openWeatherFetch #################
function openWeatherFetch(apiURL) {


  // var requestUrl = 'https://api.github.com/repos/Twitter/chill/issues';
  var outputArray = new Array(6);
  var outputResponse;

  fetch(apiURL)
    .then(function (response) {

      //console.log('======= API Resonpose: ' + response.status + ' =======');

      if (response.status === 200) {
        console.log("Upload Valid: " + response.status);
        outputResponse = true;
      }
      else {
        console.log("ERROR: Upload invalid: " + response.status);
        outputResponse = false;

      }

      return response.json();
    })
    .then(function (data) {

      console.log(data);

      console.log("[openWeatherFetch] Temp: " + data.hourly[0].temp);
      console.log("[openWeatherFetch] Wind: " + data.hourly[0].wind_speed);
      console.log("[openWeatherFetch] Humidity: " + data.hourly[0].humidity);
      console.log("[openWeatherFetch] UV Index: " + data.hourly[0].uvi);
      console.log("[openWeatherFetch] Time: " + data.hourly[0].dt);
      console.log("[openWeatherFetch] UTC Offset: " + data.timezone_offset);
      console.log("[openWeatherFetch] Weather Icon: " + data.hourly[0].weather[0].icon);

      outputArray[0] = data.hourly[0].dt;
      outputArray[1] = data.timezone_offset;
      outputArray[2] = data.hourly[0].temp;
      outputArray[3] = data.hourly[0].wind_speed;
      outputArray[4] = data.hourly[0].humidity;
      outputArray[5] = data.hourly[0].uvi;

      currentCityWeather.temp = data.hourly[0].temp;
      currentCityWeather.wind = data.hourly[0].wind_speed;
      currentCityWeather.humidity = data.hourly[0].humidity;
      currentCityWeather.uvIndex = data.hourly[0].uvi;
      currentCityWeather.date = moment(data.hourly[0].dt, "X").format("MMM Do YYYY");
      currentCityWeather.wxImgLink = "http://openweathermap.org/img/wn/" + data.hourly[0].weather[0].icon + "@2x.png";

      console.log("[openWeatherFetch] Weather Icon: " + currentCityWeather.wxImgLink);

      //++++++++++ Update 5 Day Array ++++++++++

      //Day1
      fiveDayForecast[0].date = moment(data.daily[1].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[0].temp = data.daily[1].temp.day;
      fiveDayForecast[0].wind = data.daily[1].wind_speed;
      fiveDayForecast[0].humidity = data.daily[1].humidity;
      fiveDayForecast[0].wxImgLink = "http://openweathermap.org/img/wn/" + data.hourly[1].weather[0].icon + "@2x.png";

      //Day2
      fiveDayForecast[1].date = moment(data.daily[2].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[1].temp = data.daily[2].temp.day;
      fiveDayForecast[1].wind = data.daily[2].wind_speed;
      fiveDayForecast[1].humidity = data.daily[2].humidity;
      fiveDayForecast[1].wxImgLink = "http://openweathermap.org/img/wn/" + data.hourly[2].weather[0].icon + "@2x.png";

      //Day3
      fiveDayForecast[2].date = moment(data.daily[3].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[2].temp = data.daily[3].temp.day;
      fiveDayForecast[2].wind = data.daily[3].wind_speed;
      fiveDayForecast[2].humidity = data.daily[3].humidity;
      fiveDayForecast[2].wxImgLink = "http://openweathermap.org/img/wn/" + data.hourly[3].weather[0].icon + "@2x.png";

      //Day4
      fiveDayForecast[3].date = moment(data.daily[4].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[3].temp = data.daily[4].temp.day;
      fiveDayForecast[3].wind = data.daily[4].wind_speed;
      fiveDayForecast[3].humidity = data.daily[4].humidity;
      fiveDayForecast[3].wxImgLink = "http://openweathermap.org/img/wn/" + data.hourly[4].weather[0].icon + "@2x.png";

      //Day5
      fiveDayForecast[4].date = moment(data.daily[5].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[4].temp = data.daily[5].temp.day;
      fiveDayForecast[4].wind = data.daily[5].wind_speed;
      fiveDayForecast[4].humidity = data.daily[5].humidity;
      fiveDayForecast[4].wxImgLink = "http://openweathermap.org/img/wn/" + data.hourly[5].weather[0].icon + "@2x.png";

      // console.log("[openWeatherFetchARRAY] Temp: " + outputArray[5]);



    });

  return outputResponse;
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

