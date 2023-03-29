const api = {
    key:"b9cdb05270beeb8efb8489f4e9fe31db",
    base: "https://api.openweathermap.org/data/2.5/"
    }
const input = document.querySelector('.search-box');
input.addEventListener('keypress', enter);

function enter(e){
    if(e.keyCode == 13){
    getInfo(input.value)
    }
}
async function getInfo(data) {
    const response = await fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
    const result = await response.json()
    displayResults(result)
}
    function displayResults(result){
    let city = document.querySelector('.location #city');
    city.innerText = `${result.name}, ${ result.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location #date');
    date.innerText = dateBuilder(now)

    let temp = document.querySelector('#temp');
    temp.innerHTML = `${Math.round(result.main.temp)}<span>°C</span>`;

    let feels = document.querySelector('#feelsLike');
    feels.innerText = 'Feels like: ' + `${Math.round(result.main.feels_like)}°C`;

    let windy = document.querySelector('#windy');
    windy.innerText = 'Wind: '+`${Math.round(result.wind.speed)}` + ' m/s';

    let conditions = document.querySelector('#conditions');
    conditions.innerText = `${result.weather[0].description}`;

    let variation = document.querySelector('#variation');
    variation.innerHTML = 'Min:' + `${Math.round(result.main.temp_min)}<span>°C /</span>` + ' Max:' + `${Math.round(result.main.temp_max)}<span>°C</span>`;
    }

function dateBuilder(d) {
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
    let day = weekDays[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
}