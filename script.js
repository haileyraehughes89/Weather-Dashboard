var key = '4699afd8fabd5888ac079efa9eff2bc3'


function geoCoding (cityName, stateCode, countryCode, limit) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=+'+ encodeURIComponent(cityName) + ',' + stateCode + ',' + countryCode + '&limit=' + limit + '&appid=' + key)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        var latitudes = data.map(function(location) {return location.lat})
        var longitudes = data.map(function(location) {return location.lon})
      console.log(data);
      console.log(longitudes);

    console.log(latitudes);})

    
};

   

geoCoding('lawrence','US-KS', 'US', 5) 
    

 

function weather(lat,lon) {
    var key = '4699afd8fabd5888ac079efa9eff2bc3';
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon +'&appid=4699afd8fabd5888ac079efa9eff2bc3')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  weather (0,100);







