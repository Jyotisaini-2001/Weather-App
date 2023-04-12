import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import Forcast from "./Forcast";
import React from "react";
import './App.css';
import img1 from ".//images/icon.png"
import { useEffect, useState } from "react";

import TimeAndDetails from "./TimeAndDetails";

function App() {
  

 const apiKey= "78496c169e018504551ca115012422d2"
 const [inputCity, setInputCity]=useState("")
  const [data, setData]=useState({})
 
  
  const getWeatherData = (cityName) =>{
    if(!cityName) return
    const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
    
      console.log("response", res.data)
      setData(res.data)
      
    }).catch((err) =>{
      console.log("err", err)
    })
  }
 
  const handleInput= (e) =>{
    console.log("value", e.target.value)
   setInputCity(e.target.value)
  }
    
  const handleSearch = () =>{
    getWeatherData(inputCity)
  }


   useEffect(() =>{
    getWeatherData("Bilaspur")
   }, [])

   

  //  const sunrise = new Date(data?.sys?.sunrise * 1000);
  //  const sunset = new Date(data?.sys?.sunset * 1000);
  //  console.log(sunrise);
  //  console.log(sunset);
  //  console.log(sunrise.getHours());
  //  console.log(sunrise.getMinutes());
  //   var hours = sunrise.getHours() ;
  //   var minutes = sunrise.getMinutes();
    const sunRise = new Date(data?.sys?.sunrise * 1000);
    const sunSet=new  Date(data?.sys?.sunset * 1000);
    
   console.log(sunRise);
   console.log(sunSet);
    
  
//    console.log(
//   time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
// );
  


    return (
    <>
     <React.Fragment>
    <div className="col-md-12">
      <div className="weatherBg">
       <h1 className="heading">Weather-App</h1>

      <div className="d-grid gap-3 col-4 mt-4">
      <input type="text" className="form-control" placeholder="CityName"
         value={inputCity} 
         onChange={handleInput}/>
      <button className="btn btn-primary" type="button" 
      onClick={handleSearch}>Search</button>
      </div>
      </div> 
      {/* show teamperature and all */}
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
        <img src={img1} className="WeatherIcon" alt=" " />
        
//         <Forcast className="WeatherIcon"  icon={data.weather[0]?.icon} weather={data.weather[0]?.main} />
               
                  <div className="findWeather">
                  {/* <h3>{data?.weather[0]?.icon}</h3> */}
                  <ul>
                  <li>
                  Wind Speed{"  "}
                   <span className="weatherDetails">{(data?.wind?.speed)}km/h
                    </span>
                   </li>

                  <li>
                  Visibility{" "}
                   <span className="weatherDetails">{(data?.visibility)}mi
                   </span>
                   </li>

                  <li >
                  SunRise{" "}
                     <span className="weatherDetails">{(sunRise.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }))} 
                     </span>
                     
                     </li>
                     <li >
                  SunSet{" "}
                     <span className="weatherDetails">{(sunSet.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }))} 
                     </span>
                     
                     </li>
                     </ul>
                     </div>

               
                <TimeAndDetails></TimeAndDetails>
    
        <h5 className="weatherCity">{data?.name}</h5>
          
        <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div>
      
    </div>
    </React.Fragment>
    </>

  );
}

export default App;
