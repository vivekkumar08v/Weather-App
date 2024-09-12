
const apiKey= "1f7eac5a433536b45c8316f48042390c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const waetherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&units=metric`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display ="none"
    }
    else
    {

        var data = await response.json();
        console.log(data);
    
    
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
        document.querySelector(".humidity1").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
      
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        if(data.waether[0].main == "Clouds"){
            waetherIcon.src = "images/clouds.png";
    
        }
        else if(data.waether[0].main == "Clear"){
            waetherIcon.src = "images/clear.png";
    
        }
        else if(data.waether[0].main == "Rain"){
            waetherIcon.src = "images/rain.png";
    
        }
        else if(data.waether[0].main == "Drizzle"){
            waetherIcon.src = "images/drizzle.png";
    
        }
        else if(data.waether[0].main == "Mist") {
            waetherIcon.src = "images/mist.png";
    
        }
        
       

        
    }

    } 
    
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
