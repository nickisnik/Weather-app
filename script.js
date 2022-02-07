const weatherResult = document.querySelector('h1')
const cityInput = document.querySelector('#cityInput')
//const searchBtn = document.querySelector('.searchBtn')
const body = document.querySelector('body')
const bg = document.querySelector('.bg')

const citySearchForm = document.querySelector('.citySearch')

function inputHandler(e) {
    // Prevents reload
    e.preventDefault()
    const city = cityInput.value;
    findCity(city); 
}

function findCity(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=56fa2664fd3547795113e7ee2c4ec488`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.name)
        findBackgroundURL(data.name)
        weatherResult.textContent = data.weather[0].description
    })
    .catch((error) => {
        weatherResult.textContent = 'Error'
    })
}

function findBackgroundURL(city) {
    fetch(`https://pixabay.com/api/?key=25582711-2736a21576aede128247b7dc3&q=${city}+city&min_width=1920&min_height=1920`)
    .then((response) => {
        return response.json()
    })
    .then((response) => {
       setNewBackground(response.hits[0].largeImageURL)
    })
}

function setNewBackground(url) {
    bg.setAttribute('src', `${url}`)
}





citySearchForm.addEventListener('submit', inputHandler)
findBackgroundURL('London')