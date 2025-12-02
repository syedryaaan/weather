async function checkWeather(){
    const city = document.getElementById('a2').value
    const apiKey = "9bb445534bec45d161872798e6e698ab"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
    let response = await fetch(url);
    let data = await response.json();
    display(data);
  } catch (error) {
    console.log(error); 
  }
}

function display(arr){
    // Section 1: Temperature
    let main = document.querySelector("#m2");
    main.innerHTML = `
        <h3>Temperature</h3>
        <p><strong>Current:</strong> ${arr.main.temp}°C</p>
        <p><strong>Feels like:</strong> ${arr.main.feels_like}°C</p>
        <p><strong>Min:</strong> ${arr.main.temp_min}°C</p>
        <p><strong>Max:</strong> ${arr.main.temp_max}°C</p>
        <p><strong>Pressure:</strong> ${arr.main.pressure} hPa</p>
        <p><strong>Humidity:</strong> ${arr.main.humidity}%</p>
    `;

    // Section 2: Description
    let main2 = document.querySelector("#m4");
    main2.innerHTML = `
        <h3>Description</h3>
        <p><strong>Condition:</strong> ${arr.weather[0].main}</p>
        <p><strong>Detail:</strong> ${arr.weather[0].description}</p>
    `;

    // Section 3: Coordinates
    let main3 = document.querySelector("#e3");
    main3.innerHTML = `
        <h3>Coordinates</h3>
        <p><strong>Longitude:</strong> ${arr.coord.lon}</p>
        <p><strong>Latitude:</strong> ${arr.coord.lat}</p>
    `;

    // Section 4: Location
    let main4 = document.querySelector("#e5")
    main4.innerHTML = `
        <h3>Location</h3>
        <p><strong>Country:</strong> ${arr.sys.country}</p>
        <p><strong>City:</strong> ${arr.name}</p>
    `;
}
