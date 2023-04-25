var key = '4699afd8fabd5888ac079efa9eff2bc3'


function geoCoding (cityName, stateCode, countryCode, limit) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=+'+ encodeURIComponent(cityName) + ',' + stateCode + ',' + countryCode + '&limit=' + limit + '&appid=' + key)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        var location = data[0]
            console.log(location);
            return location;
    })

    .then(function weather(location) {
        var lat = location.lat;
        var lon = location.lon;
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon +'&appid=4699afd8fabd5888ac079efa9eff2bc3')
        
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function sameday(data) {
            for (i=0; i<=4; i++){
          console.log(data);
          var windSpeed = data.list[0].wind.speed;
          console.log('Wind Speed', windSpeed);
          var temperature = data.list[0].main.temp;
          console.log('Temperature', temperature);
          var humidity = data.list[0].main.humidity;
          console.log("humidity", humidity);
          var windSpeed1 = data.list[1].wind.speed;
          console.log('Wind Speed', windSpeed1);
          var temperature1 = data.list[1].main.temp;
          console.log('Temperature', temperature1);
          var humidity1 = data.list[1].main.humidity;
          console.log("humidity", humidity1);
            }
        })
        // .then(function (data) {
        //     console.log(data);
           
        // })
        // .then(function future(data) {
        //     console.log(data);
        //     var windSpeed = data.list[1].wind.speed;
        //     console.log('Wind Speed', windSpeed);
        //     var temperature = data.list[1].main.temp;
        //     console.log('Temperature', temperature);
        //     var humidity = data.list[1].main.humidity;
        //     console.log("humidity", humidity);
        //   })
        })
    }

geoCoding ("'olathe'",'US-KS', 'US', 5) 
    

 









