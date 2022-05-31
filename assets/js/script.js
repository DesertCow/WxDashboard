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

}

var fiveDayForecast = [
  {
    "date": "6-1-2022",
    "wxImgLink": "",
    "temp": "70",
    "wind": "15",
    "humidity": "45",
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

liveCityDateEl.textContent = " Austin, Tx   6-1-2022";
liveCityTempEl.textContent = " Temp: 70";
liveCityWindEl.textContent = " Wind: 15 mph";
liveCityHumidityEl.textContent = "Humidity: 48%";
liveCityUVEl.textContent = "UV Index: 0.45";

//forecastcard1CityDateEL.textContent = "Austin, TX  (6-2-2022)";
forecastcard1TempEL.textContent = "Temperature: 78";
forecastcard1WindEL.textContent = "Wind: 24 mph";
forecastcard1HumidityEL.textContent = "Humidity: 69%";

// forecastcard2CityDateEL.textContent = "Austin, TX  (6-3-2022)";
forecastcard2TempEL.textContent = "Temperature: 56";
forecastcard2WindEL.textContent = "Wind: 4 mph";
forecastcard2HumidityEL.textContent = "Humidity: 39%";

// forecastcard3CityDateEL.textContent = "Austin, TX  (6-4-2022)";
forecastcard3TempEL.textContent = "Temperature: 66";
forecastcard3WindEL.textContent = "Wind: 14 mph";
forecastcard3HumidityEL.textContent = "Humidity: 83%";

// forecastcard4CityDateEL.textContent = "Austin, TX  (6-5-2022)";
forecastcard4TempEL.textContent = "Temperature: 74";
forecastcard4WindEL.textContent = "Wind: 10 mph";
forecastcard4HumidityEL.textContent = "Humidity: 59%";

// forecastcard5CityDateEL.textContent = "Austin, TX  (6-6-2022)";
forecastcard5TempEL.textContent = "Temperature: 68";
forecastcard5WindEL.textContent = "Wind: 34 mph";
forecastcard5HumidityEL.textContent = "Humidity: 49%";

// // ############################## Button Listeners ##################################

searchButton.addEventListener("click", function (clickEvent) {

  console.log("Search Button Clicked! SEARCH = " + searchBoxInput.value);

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



// ################# FUNCTION_1 #################



// ################# FUNCTION_1 #################



// ################# FUNCTION_1 #################



// ################# FUNCTION_1 #################



// ################# FUNCTION_1 #################




// ====================================== MAIN ========================================




// ==================================== END MAIN ======================================

