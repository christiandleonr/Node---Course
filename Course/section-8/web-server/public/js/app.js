console.log('Client side Javascript file is loaded')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    // preventDefault evita que la pagina sea refrescada con el evento submit
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                return console.log(data.error)
            }
            console.log(data.forecast)
            console.log(data.location)
        })
    })
})