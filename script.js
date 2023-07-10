const options = {
    method: 'GET',
    headers: {
        //Enter api key here 
        'X-RapidAPI-Key': 'a707d47701msh9972d3685638fd2p114e68jsn4638a836b6ea',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)


            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        }

        )
        .catch(err => console.error(err));

}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

const getCommonWeather = async () => {
    const places = ["Delhi", "Goa", "Lucknow", "Kolkata", "Punjab", "Boston", "New York"]
    const parentElement = document.getElementById("w-body");

    for (let city in places) {

        await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + places[city], options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            const cardHTML = `
        <tr>
        <th scope="row" class="text-start weather-container">${places[city]}</th>
        <td >${response.temp}</td>
        <td >${response.min_temp}</td>
        <td >${response.max_temp}</td>
        <td >${response.cloud_pct}</td>
        <td >${response.feels_like}</td>
        <td >${response.humidity}</td>
        <td >${response.wind_degrees}</td>
        <td >${response.wind_speed}</td>
        <td >${response.sunrise}</td>
        <td >${response.sunset}</td>
      </tr>
            `;
        parentElement.innerHTML += cardHTML;
        }

        )
        .catch(err => console.error(err));

        
    }
}



getWeather("Delhi")
getCommonWeather()


