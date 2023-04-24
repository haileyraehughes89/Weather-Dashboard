GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

# Webpage Structure
Keep this SIMPLE!
1. I want a row that takes up the entire width of the webpage for the page's title
2. I want four main boxes, split into two colomns
3. Box 1: Input and Search
    1/4th of width
    3 rows:
        text
        input
        button
    Box 2: Search History
    1/4th of width
    directly below input and search
    list of buttons - for each city search

    Box 3: City information:
    3/4ths of width
        Nested inside this box are four sections
        Top Left: h1 element - city name
        Top Right: h2 element - date
        Bottom Left: list of temp, wind and humidity
        Bottom Right: icon
    
    Box 4: 5-Day Forcast:
    3/4ths of width
        Top of box: h3 element  5-day forcast
        Nested inside this box are 5 smaller, identical boxes.
            Each box has and h4 element - the days date followed by a list of weather details. Icon is the background of the box. maybe.


# API
When I click on search the information shows up 
