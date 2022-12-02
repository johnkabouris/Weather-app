// alert("works");
const api={
    //Replace with your Key or just use mine
    key:"6cdae1dd3c247135fcd9586cbaba023c",
    base:"https://api.openweathermap.org/data/2.5/"
}
const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    //13== Enter key
    if(evt.keyCode==13){
        getResults(searchbox.value);
        
    }
}
function getResults(city){
    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)       
    .then(results=> {
        return results.json();
    }).then(displayResults);
}
function displayResults(results){
    console.log(results);
    let city=document.querySelector('.location .city');
    city.innerHTML=`${results.name}, ${results.sys.country}`;   
    let latitute=document.querySelector('.location .lat');
    latitute.innerHTML=`${results.coord.lat}`;  
    let longtitute=document.querySelector('.location .lon');
    longtitute.innerHTML=`${results.coord.lon}`;
    let now=new Date();
    let date=document.querySelector('.location .date');
    date.innerHTML=dateBuilder(now);
    let temp=document.querySelector('.current .temp');
    temp.innerHTML=`${Math.round(results.main.temp)} <span>°c</span> `;
    let weather_element=document.querySelector('.current .weather');
    weather_element.innerHTML=results.weather[0].main;
    let hi_low=document.querySelector('.current .hi-low');
    hi_low.innerHTML=`${Math.round(results.main.temp_min)}°c / ${Math.round(results.main.temp_max)}°c`;
   
    
}

function dateBuilder(now) { 
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day=days[now.getDay()];
    let date=now.getDate();
    let month=months[now.getMonth()];
    let year=now.getFullYear();

    return `${day} ${date} ${month} ${year}`;
 }