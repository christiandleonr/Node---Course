const chalk = require('chalk')
const geocode = require('./utils/geocode')

temperatureColor = chalk.yellow.underline
feelslikeColor = chalk.red.underline
wheatherDescriptionColor = chalk.cyan.underline
latitudeColor = chalk.magenta.underline
longitudeColor = chalk.green.underline

// const url = 'http://api.weatherstack.com/current?access_key=663ecca95d1ba31abcaa548761fb4a91&query=25.0,%20-107.5&units=m'

// Goal: Print a small forecast to the user
// 1. Print "It is currently 9 degress out. It feels like 5 degress out"
// 1. Test your work


// request({ url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         temperature = response.body.current.temperature
//         feelslike = response.body.current.feelslike
//         wheatherDescription = response.body.current.weather_descriptions[0]

//         console.log(wheatherDescriptionColor(wheatherDescription)+ ". It is currently "  + temperatureColor(temperature) + " degrees out. It feels like " + feelslikeColor(feelslike) + " degrees out.")
//     }
// }) 

// Geocoding
// Address -> Lat/Log -> Weather

// Goal: print the lot/long for Culiacan
// 1. Fire of a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work

// Goal: Handle errors for geocoding request
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running app
// 3. Setup error handling for no matching results
// 4. Test by alterning the search term and running the app

geocode('New York', (error, data) => {
    console.log(error)
    console.log(data)
})


