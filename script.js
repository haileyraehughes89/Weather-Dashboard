var key = "4699afd8fabd5888ac079efa9eff2bc3";
var save = $("button");
var input = $("input");
var listSearch = [];
var oldList = JSON.parse(localStorage.getItem("recent"));
if (oldList.length > 0) {
  listSearch = oldList;
}
function recent() {
  var recentHistory = document.createElement("button");
  recentHistory.innerHTML = input.val();
  var addButton = document.getElementById("recent-search");
  recentHistory.addEventListener("click", function () {
    geoCoding(this.textContent);
  });
  addButton.appendChild(recentHistory);
}

var cityName;
function getUserInput() {
  let userInput = document.getElementById("input").value;
  console.log("User input is: " + userInput);
}

save.on("click", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  var cityName = input.val();
  geoCoding(cityName);
  listSearch.push(cityName);
  localStorage.setItem("recent", JSON.stringify(listSearch));
  recent();
}
function geoCoding(cityName) {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=+" +
      encodeURIComponent(cityName) +
      "&limit=1" +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      var location = data[0];
      console.log(location);
      return location;
    })

    .then(function weather(location) {
      var lat = location.lat;
      var lon = location.lon;
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=4699afd8fabd5888ac079efa9eff2bc3" +
          "&units=imperial"
      )
        .then(function (resp) {
          return resp.json();
        })
        .then(function day(data) {
          // console.log("DATA",data);
          todaysWeather(data.list[0]);
          weatherConditions(data.list[7]);
          for (i = 7; i < 40; i += 8) {
            weatherConditions(data.list[i]);
          }
          extractFirst(data);
          extractSecond(data);
          extractThird(data);
          extractFourth(data);
          extractFifth(data);
        });
    });
  //   var icon = data.list[i].weather.icon;
  //   console.log("icon", icon);
}

today = document.getElementById("weather");
function todaysWeather(currentWeather) {
  today.innerHTML = "";
  var date = dayjs(currentWeather.dt_txt).format("MM/DD/YYYY");
  var windSpeed = currentWeather.wind.speed;
  var temperature = currentWeather.main.temp;
  var humidity = currentWeather.main.humidity;
  console.log(currentWeather);
  var icon = currentWeather.weather[0].icon;
  var dateToday = document.createElement("h5");
  var windEL = document.createElement("p");
  var tempEl = document.createElement("p");
  var humEl = document.createElement("p");
  var iconEl = document.createElement("img");
  dateToday.textContent = date;
  windEL.textContent = windSpeed;
  tempEl.textContent = temperature;
  humEl.textContent = humidity;
  iconEl.src = "http://openweathermap.org/img/w/" + icon + ".png";

  today.appendChild(dateToday);
  today.appendChild(windEL);
  today.appendChild(tempEl);
  today.appendChild(humEl);
  today.appendChild(iconEl);
}
var tomorrow = document.getElementById("1");
function extractFirst(data) {
  tomorrow.innerHTML = "";
  var day = data.list[7];
  console.log(day);
  var formatDate = dayjs(day.dt_txt).format("MM/DD/YYYY");
  var date = formatDate;
  var windSpeed = day.wind.speed;
  var temperature = day.main.temp;
  var humidity = day.main.humidity;
  var icon = day.weather[0].icon;
  var dateFirst = document.createElement("h5");
  var windEl = document.createElement("p");
  var tempEl = document.createElement("p");
  var humEl = document.createElement("p");
  var iconEl = document.createElement("img");
  dateFirst.textContent = date;
  windEl.textContent = windSpeed;
  tempEl.textContent = temperature;
  humEl.textContent = humidity;
  iconEl.src = "http://openweathermap.org/img/w/" + icon + ".png";
  tomorrow.appendChild(dateFirst);
  tomorrow.appendChild(windEl);
  tomorrow.appendChild(tempEl);
  tomorrow.appendChild(humEl);
  tomorrow.appendChild(iconEl);
}

var dayTwo = document.getElementById("2");
function extractSecond(data) {
  dayTwo.innerHTML = "";
  var day = data.list[15];
  var windSpeed = day.wind.speed;
  var temperature = day.main.temp;
  var humidity = day.main.humidity;
  var icon = day.weather[0].icon;
  var windEl = document.createElement("p");
  var tempEl = document.createElement("p");
  var humEl = document.createElement("p");
  var iconEl = document.createElement("img");
  windEl.textContent = windSpeed;
  tempEl.textContent = temperature;
  humEl.textContent = humidity;
  iconEl.src = "http://openweathermap.org/img/w/" + icon + ".png";
  dayTwo.appendChild(windEl);
  dayTwo.appendChild(tempEl);
  dayTwo.appendChild(humEl);
  dayTwo.appendChild(iconEl);
}
var dayThree = document.getElementById("3");
function extractThird(data) {
  dayThree.innerHTML = "";
  var day = data.list[15];
  var windSpeed = day.wind.speed;
  var temperature = day.main.temp;
  var humidity = day.main.humidity;
  var icon = day.weather[0].icon;
  var windEl = document.createElement("p");
  var tempEl = document.createElement("p");
  var humEl = document.createElement("p");
  var iconEl = document.createElement("img");
  windEl.textContent = windSpeed;
  tempEl.textContent = temperature;
  humEl.textContent = humidity;
  iconEl.src = "http://openweathermap.org/img/w/" + icon + ".png";
  dayThree.appendChild(windEl);
  dayThree.appendChild(tempEl);
  dayThree.appendChild(humEl);
  dayThree.appendChild(iconEl);
}

var dayFour = document.getElementById("4");
function extractFourth(data) {
  dayFour.innerHTML = "";
  var day = data.list[31];
  var windSpeed = day.wind.speed;
  var temperature = day.main.temp;
  var humidity = day.main.humidity;
  var icon = day.weather[0].icon;
  var windEl = document.createElement("p");
  var tempEl = document.createElement("p");
  var humEl = document.createElement("p");
  var iconEl = document.createElement("img");
  windEl.textContent = windSpeed;
  tempEl.textContent = temperature;
  humEl.textContent = humidity;
  iconEl.src = "http://openweathermap.org/img/w/" + icon + ".png";
  dayFour.appendChild(windEl);
  dayFour.appendChild(tempEl);
  dayFour.appendChild(humEl);
  dayFour.appendChild(iconEl);
}

var dayFive = document.getElementById("5");
function extractFifth(data) {
  dayFive.innerHTML = "";
  var day = data.list[39];
  var windSpeed = day.wind.speed;
  var temperature = day.main.temp;
  var humidity = day.main.humidity;
  var icon = day.weather[0].icon;
  var windEl = document.createElement("p");
  var tempEl = document.createElement("p");
  var humEl = document.createElement("p");
  var iconEl = document.createElement("img");
  windEl.textContent = windSpeed;
  tempEl.textContent = temperature;
  humEl.textContent = humidity;
  iconEl.src = "http://openweathermap.org/img/w/" + icon + ".png";
  dayFive.appendChild(windEl);
  dayFive.appendChild(tempEl);
  dayFive.appendChild(humEl);
  dayFive.appendChild(iconEl);
}

function weatherConditions(day) {
  var dt_txt = day.dt_txt.split(" ");
  var date = dt_txt[0];
  var windSpeed = day.wind.speed;
  var temperature = day.main.temp;
  var humidity = day.main.humidity;
  console.log(date, windSpeed, temperature, humidity);
}
