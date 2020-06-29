const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=663ecca95d1ba31abcaa548761fb4a91&'

const request = http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
