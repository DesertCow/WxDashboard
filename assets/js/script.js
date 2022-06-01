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
var forecastcard1CityDateEL = document.querySelector(".forecastCard1CityDate");
var forecastcard1TempEL = document.querySelector(".day1ForeTemp");
var forecastcard1WindEL = document.querySelector(".day1ForeWind");
var forecastcard1HumidityEL = document.querySelector(".day1ForeHumidity");
var forecastIcon1El = document.querySelector(".day1Icon");

// ################# Forecast Card Day 2 #################
var forecastcard2CityDateEL = document.querySelector(".forecastCard2CityDate");
var forecastcard2TempEL = document.querySelector(".day2ForeTemp");
var forecastcard2WindEL = document.querySelector(".day2ForeWind");
var forecastcard2HumidityEL = document.querySelector(".day2ForeHumidity");
var forecastIcon2El = document.querySelector(".day2Icon");

// ################# Forecast Card Day 3 #################
var forecastcard3CityDateEL = document.querySelector(".forecastCard3CityDate");
var forecastcard3TempEL = document.querySelector(".day3ForeTemp");
var forecastcard3WindEL = document.querySelector(".day3ForeWind");
var forecastcard3HumidityEL = document.querySelector(".day3ForeHumidity");
var forecastIcon3El = document.querySelector(".day3Icon");

// ################# Forecast Card Day 4 #################
var forecastcard4CityDateEL = document.querySelector(".forecastCard4CityDate");
var forecastcard4TempEL = document.querySelector(".day4ForeTemp");
var forecastcard4WindEL = document.querySelector(".day4ForeWind");
var forecastcard4HumidityEL = document.querySelector(".day4ForeHumidity");
var forecastIcon4El = document.querySelector(".day4Icon");

// ################# Forecast Card Day 5 #################
var forecastcard5CityDateEL = document.querySelector(".forecastCard5CityDate");
var forecastcard5TempEL = document.querySelector(".day5ForeTemp");
var forecastcard5WindEL = document.querySelector(".day5ForeWind");
var forecastcard5HumidityEL = document.querySelector(".day5ForeHumidity");
var forecastIcon5El = document.querySelector(".day5Icon");

// ################# Search Text Box #################

var searchBoxInput = document.querySelector(".searchBoxInput");
var searchHistoryListEl = document.querySelector(".searchHistoryList");

// ################# Button Decleration #################

var searchButton = document.querySelector(".searchBtn");

// ################# City Search Buttons #################
var cityButton1 = document.querySelector(".cityButton1");
var cityButton2 = document.querySelector(".cityButton2");
var cityButton3 = document.querySelector(".cityButton3");
var cityButton4 = document.querySelector(".cityButton4");
var cityButton5 = document.querySelector(".cityButton5");

var searchHistory = [];

// Attempt to load previous search history from local storage
var localHistory = JSON.parse(localStorage.getItem("wxSearchHistory"));


if (localHistory) {
  searchHistory = localHistory;
  //console.log("Loaded Local History: " + localHistory);
}


// ################# Default/Debug Data Load #################
let currentCityWeather = {
  "city": "Austin",
  "date": "5-30-2022",
  "wxImgLink": "",
  "temp": "55",
  "wind": "55",
  "humidity": "84",
  "uvIndex": "7",

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


// ############################## Button Listeners ##################################

searchButton.addEventListener("click", function (clickEvent) {

  if (searchBoxInput.value) {

    //console.log("Search Button Clicked! SEARCH = " + searchBoxInput.value);

    currentCityWeather.city = searchBoxInput.value;

    currentCityWeatherUpdate(searchBoxInput.value);

    searchHistory.unshift(searchBoxInput.value);

    localStorage.setItem("wxSearchHistory", JSON.stringify(searchHistory));

    refreshPageData();

  }
  else {
    window.alert("Empty Search Input!");
  }



});

cityButton1.addEventListener("click", function (clickEvent) {

  //console.log(cityButton1.textContent + " Button Clicked!");

  currentCityWeather.city = searchHistory[0];
  currentCityWeatherUpdate(currentCityWeather.city);
  searchHistory.unshift(currentCityWeather.city);
  localStorage.setItem("wxSearchHistory", JSON.stringify(searchHistory));
  refreshPageData();

});

cityButton2.addEventListener("click", function (clickEvent) {

  //console.log(cityButton2.textContent + " Button Clicked!");

  currentCityWeather.city = searchHistory[1];
  currentCityWeatherUpdate(currentCityWeather.city);
  searchHistory.unshift(currentCityWeather.city);
  localStorage.setItem("wxSearchHistory", JSON.stringify(searchHistory));
  refreshPageData();

});

cityButton3.addEventListener("click", function (clickEvent) {

  //console.log(cityButton3.textContent + " Button Clicked!");

  currentCityWeather.city = searchHistory[2];
  currentCityWeatherUpdate(currentCityWeather.city);
  searchHistory.unshift(currentCityWeather.city);
  localStorage.setItem("wxSearchHistory", JSON.stringify(searchHistory));
  refreshPageData();

});

cityButton4.addEventListener("click", function (clickEvent) {

  //console.log(cityButton4.textContent + " Button Clicked!");

  currentCityWeather.city = searchHistory[3];
  currentCityWeatherUpdate(currentCityWeather.city);
  searchHistory.unshift(currentCityWeather.city);
  localStorage.setItem("wxSearchHistory", JSON.stringify(searchHistory));
  refreshPageData();

});

cityButton5.addEventListener("click", function (clickEvent) {

  //console.log(cityButton5.textContent + " Button Clicked!");

  currentCityWeather.city = searchHistory[4];
  currentCityWeatherUpdate(currentCityWeather.city);
  searchHistory.unshift(currentCityWeather.city);
  localStorage.setItem("wxSearchHistory", JSON.stringify(searchHistory));
  refreshPageData();

});


// ############################ Mouse Over/Out Listeners ###############################




// =============================== Function Decleration ================================

// ################# currentCityWeatherUpdate #################
async function currentCityWeatherUpdate(searchCity) {

  var outputLATLON = new Array(2);
  var newCityWeather = {};

  // currentCityWeather.city = searchCity;

  //console.log("Kicking off new search with " + searchCity);

  // Convert City to LAT/LON to API call


  outputLATLON = convertCitytoLATLON(searchCity);

  await delay(4000);


  if (outputLATLON[0] !== "VOID") {
    console.log("!!LAT =" + outputLATLON[0] + "||!!LON =" + outputLATLON[1]);
  }
  console.log("LAT =" + outputLATLON[0] + "||LON =" + outputLATLON[1]);

  // while (outputLATLON[0] == "VOID")
  //=============================================================
  // #BUG: NEED EXECUTION TO STOP TILL Code Below has complete! #BUG
  //=============================================================

  var cityResults = cityWeatherFetch(outputLATLON);

  console.log("CitySearchResult = " + cityResults)

  //=============================================================
  // #BUG: NEED EXECUTION TO STOP TILL Code ^ has complete! #BUG
  //=============================================================

}

// ################# convertCitytoLATLON #################
function convertCitytoLATLON(city) {

  // Array of Lat[0]| LON[1]
  var outputArray = ["VOID", "VOID"];

  //Create API URL Call
  var convertCityAPICall = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + superSecretAPIKey;


  fetch(convertCityAPICall)
    .then(function (response) {

      // Check the console first to see the response.status
      if (response.status === 200) {
        //console.log("Upload Valid: " + response.status);
      }
      else {
        //console.log("ERROR: Upload invalid: " + response.status);
      }

      return response.json();

    })
    .then(function (data) {

      console.log("[convertCitytoLATLON] CITY LAT/LON: " + data[0].lat + "," + data[0].lon);

      outputArray[0] = data[0].lat;
      outputArray[1] = data[0].lon;

      return outputArray
      //console.log(data);
    });

  //=============================================================
  // #BUG: NEED EXECUTION TO STOP TILL Code ^ has complete! #BUG
  //=============================================================

  // Hardcode Work Around
  //outputArray[0] = "45.67";
  //outputArray[1] = "-111.03";

  //outputArray[0] = "33.63";
  //outputArray[1] = "-117.87";

  // Return Array of LAT/LON
  return outputArray
}

// ################# cityWeatherFetch #################
function cityWeatherFetch(location) {

  // Dump Input Array to Vars
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

  openWeatherFetch(apiCall);

  //return apiResult;

  //=============================================================
  // #BUG: Timeout work around to deal with API Delay        #BUG
  //=============================================================

}


// ################# openWeatherAPICallGen #################
function openWeatherAPICallGen(lat, lon, exclude) {

  var finalAPIcall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=" + exclude + "&appid=" + superSecretAPIKey + "&units=imperial";

  return finalAPIcall;
}

// ################# openWeatherFetch #################
function openWeatherFetch(apiURL) {

  var outputArray = new Array(6);
  var outputResponse;

  fetch(apiURL)
    .then(function (response) {

      console.log('======= API Resonpose: ' + response.status + ' =======');

      if (response.status === 200) {
        console.log("Upload Valid: " + response.status);
        outputResponse = 1;
        console.log("Upload Valid: " + outputResponse);
      }
      else {
        console.log("ERROR: Upload invalid: " + response.status);
        outputResponse = 0;
        console.log("ERROR: Upload invalid: " + outputResponse);

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
      currentCityWeather.wxImgLink = "https://openweathermap.org/img/wn/" + data.hourly[0].weather[0].icon + "@2x.png";

      //++++++++++ Update 5 Day Array ++++++++++

      //Day1
      fiveDayForecast[0].date = moment(data.daily[1].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[0].temp = data.daily[1].temp.day;
      fiveDayForecast[0].wind = data.daily[1].wind_speed;
      fiveDayForecast[0].humidity = data.daily[1].humidity;
      fiveDayForecast[0].wxImgLink = "https://openweathermap.org/img/wn/" + data.hourly[1].weather[0].icon + "@2x.png";

      //Day2
      fiveDayForecast[1].date = moment(data.daily[2].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[1].temp = data.daily[2].temp.day;
      fiveDayForecast[1].wind = data.daily[2].wind_speed;
      fiveDayForecast[1].humidity = data.daily[2].humidity;
      fiveDayForecast[1].wxImgLink = "https://openweathermap.org/img/wn/" + data.hourly[2].weather[0].icon + "@2x.png";

      //Day3
      fiveDayForecast[2].date = moment(data.daily[3].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[2].temp = data.daily[3].temp.day;
      fiveDayForecast[2].wind = data.daily[3].wind_speed;
      fiveDayForecast[2].humidity = data.daily[3].humidity;
      fiveDayForecast[2].wxImgLink = "https://openweathermap.org/img/wn/" + data.hourly[3].weather[0].icon + "@2x.png";

      //Day4
      fiveDayForecast[3].date = moment(data.daily[4].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[3].temp = data.daily[4].temp.day;
      fiveDayForecast[3].wind = data.daily[4].wind_speed;
      fiveDayForecast[3].humidity = data.daily[4].humidity;
      fiveDayForecast[3].wxImgLink = "https://openweathermap.org/img/wn/" + data.hourly[4].weather[0].icon + "@2x.png";

      //Day5
      fiveDayForecast[4].date = moment(data.daily[5].dt, "X").format("MMM Do YYYY");
      fiveDayForecast[4].temp = data.daily[5].temp.day;
      fiveDayForecast[4].wind = data.daily[5].wind_speed;
      fiveDayForecast[4].humidity = data.daily[5].humidity;
      fiveDayForecast[4].wxImgLink = "https://openweathermap.org/img/wn/" + data.hourly[5].weather[0].icon + "@2x.png";

      refreshPageData();

      //return 1;

      // console.log("OutputResponse #1:" + outputResponse + " == 1");
      // if (outputResponse === "1") {

      //   return 1;
      //   console.log("Upload True #1: " + outputResponse);

      // } else if (outputResponse === "0") {

      //   return 0;
      //   console.log("Upload FALSE #1:" + outputResponse);

      // } else {
      //   return "VOID";
      // }



    });

  // console.log("OutputResponse #2:" + outputResponse);

  // if (outputResponse == 1) {

  //   return 1;
  //   console.log("Upload True #2:" + outputResponse);

  // } else if (outputResponse == 0) {

  //   return 0;
  //   console.log("Upload FALSE #2:" + outputResponse);
  // } else {
  //   return "VOID";
  // }


}


// ################# refreshPageData #################
function refreshPageData() {

  // Update Curernt City Car Weather Data
  liveCityDateEl.textContent = currentCityWeather.city + " " + currentCityWeather.date;
  liveCityTempEl.textContent = "Temperature: " + currentCityWeather.temp + " (F)";
  liveCityWindEl.textContent = "Wind: " + currentCityWeather.wind + " mph";
  liveCityHumidityEl.textContent = "Humidity: " + currentCityWeather.humidity + " %";
  liveCityUVEl.textContent = "UV Index: " + currentCityWeather.uvIndex;
  liveCityIconEl.src = currentCityWeather.wxImgLink;

  // UV Index Font Color Logic
  // UV Color Scale (NOAA) https://www.weather.gov/images/rah/uv/uv_index_legend_complete.png
  if (currentCityWeather.uvIndex < 3) {
    // Low
    liveCityUVEl.style.color = "green";
  } else if (currentCityWeather.uvIndex < 6) {
    // Moderate
    liveCityUVEl.style.color = "yellow";
  } else if (currentCityWeather.uvIndex < 8) {
    // High
    liveCityUVEl.style.color = "#fb5607";
  } else if (currentCityWeather.uvIndex < 11) {
    // Very High
    liveCityUVEl.style.color = "red";
  } else if (currentCityWeather.uvIndex > 11) {
    // Extreme
    liveCityUVEl.style.color = "purple";
  }

  //================================= 5 Day Forecast Cards Update =================================

  //########## Day 1 Elements ##########
  forecastcard1CityDateEL.textContent = fiveDayForecast[0].date;
  forecastcard1TempEL.textContent = "Temperature: " + fiveDayForecast[0].temp;
  forecastcard1WindEL.textContent = "Wind: " + fiveDayForecast[0].wind + " mph";
  forecastcard1HumidityEL.textContent = "Humidity: " + fiveDayForecast[0].humidity + " %";
  forecastIcon1El.src = fiveDayForecast[0].wxImgLink;

  //########## Day 2 Elements ##########
  forecastcard2CityDateEL.textContent = fiveDayForecast[1].date;
  forecastcard2TempEL.textContent = "Temperature: " + fiveDayForecast[1].temp;
  forecastcard2WindEL.textContent = "Wind: " + fiveDayForecast[1].wind + " mph";
  forecastcard2HumidityEL.textContent = "Humidity: " + fiveDayForecast[1].humidity + " %";
  forecastIcon2El.src = fiveDayForecast[1].wxImgLink;

  //########## Day 3 Elements ##########
  forecastcard3CityDateEL.textContent = fiveDayForecast[2].date;
  forecastcard3TempEL.textContent = "Temperature: " + fiveDayForecast[2].temp;
  forecastcard3WindEL.textContent = "Wind: " + fiveDayForecast[2].wind + " mph";
  forecastcard3HumidityEL.textContent = "Humidity: " + fiveDayForecast[2].humidity + " %";
  forecastIcon3El.src = fiveDayForecast[2].wxImgLink;

  //########## Day 4 Elements ##########
  forecastcard4CityDateEL.textContent = fiveDayForecast[3].date;
  forecastcard4TempEL.textContent = "Temperature: " + fiveDayForecast[3].temp;
  forecastcard4WindEL.textContent = "Wind: " + fiveDayForecast[3].wind + " mph";
  forecastcard4HumidityEL.textContent = "Humidity: " + fiveDayForecast[3].humidity + " %";
  forecastIcon4El.src = fiveDayForecast[3].wxImgLink;

  //########## Day 5 Elements ##########
  forecastcard5CityDateEL.textContent = fiveDayForecast[4].date;
  forecastcard5TempEL.textContent = "Temperature: " + fiveDayForecast[4].temp;
  forecastcard5WindEL.textContent = "Wind: " + fiveDayForecast[4].wind + " mph";
  forecastcard5HumidityEL.textContent = "Humidity: " + fiveDayForecast[4].humidity + " %";
  forecastIcon5El.src = fiveDayForecast[4].wxImgLink;

  //########## Update Search History Buttons ##########
  cityButton1.textContent = searchHistory[0];
  cityButton2.textContent = searchHistory[1];
  cityButton3.textContent = searchHistory[2];
  cityButton4.textContent = searchHistory[3];
  cityButton5.textContent = searchHistory[4];

}

function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

// ################# Init #################
function init() {

  refreshPageData();

}

// =================================== START MAIN =====================================

init();


// ==================================== END MAIN ======================================

