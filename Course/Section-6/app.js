const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=663ecca95d1ba31abcaa548761fb4a91&query=25.0,%20-107.5'

request({ url: url }, (error, response) => {
    // This create a object that we can use to access to the information
    const data = JSON.parse(response.body)

    console.log(data.current.temperature)
}) 