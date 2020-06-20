const request = require('request')
const chalk = require('chalk')

temperatureColor = chalk.yellow.underline
feelslikeColor = chalk.red.underline
wheatherDescriptionColor = chalk.cyan.underline
latitudeColor = chalk.magenta.underline
longitudeColor = chalk.green.underline

// 'http://api.weatherstack.com/current?access_key=663ecca95d1ba31abcaa548761fb4a91&query='+ latitude +','+ longitude +'&units=m'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=663ecca95d1ba31abcaa548761fb4a91&query='+ latitude +','+ longitude +'&units=m'

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }else if(response.body.error){
            callback('Unable to find location', undefined)
        }else {
            temperature = response.body.current.temperature
            feelslike = response.body.current.feelslike
            wheatherDescription = response.body.current.weather_descriptions[0]

            callback(undefined, wheatherDescriptionColor(wheatherDescription)+ ". It is currently "  + temperatureColor(temperature) + " degrees out. It feels like " + feelslikeColor(feelslike) + " degrees out.")
        }
    })
}

module.exports = forecast