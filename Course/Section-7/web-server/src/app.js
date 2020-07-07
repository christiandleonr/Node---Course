const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Christian Ramirez'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Christian Ramirez'
    })
})

// Goal: Create a template for help page
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        helpMessage: "I'm trying to be good"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

// Start the server
// 3000 is the port that we will use

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})