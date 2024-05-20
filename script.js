const key = "8ddbc77c5de8375bca488ccaa12c9c75";

function insertOnScreen(data){
    document.querySelector(".city").innerHTML = "Tempo em " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+ "ºC";
    document.querySelector(".weatherState").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
}

async function searchCity(city){ 
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    insertOnScreen(data);
}

function buttonClick(){
    const city = document.querySelector(".inputCity").value;   
    searchCity(city);
}