
const apiKey="a5ab8b7b5103d77619f6ce0b450a0464"





let cityName
let mySearch=""
document.getElementById("search").addEventListener("keyup",(e)=>{
    mySearch=document.getElementById("search").value
   seachingData(mySearch)
   console.log(cityName)
    getData()

   async function getData(){
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    const result=await data.json()


    document.querySelector(".row").innerHTML=
    `
    <div class="content__header">Name   :</div>     ${result.name} <br>
    <div class="content__header" >Temp   :</div>    ${Math.floor(result.main.temp-273.15)} °C <br>
    <div class="content__header">Weather:</div>    ${result.weather[0].description} <br>
    <img src="http://openweathermap.org/img/wn/${result.weather[0].icon}.png"><br>
    <img src="https://www.countryflags.io/${result.sys.country}/flat/64.png">
    `
    console.log(result)
}
})



function seachingData(x){
    cityName=x
}