import React, { useState } from 'react';
import axios from 'axios';
import { MapComponent } from './MapComponent';
import { SideComponent } from "./SideComponent";
import L from 'leaflet';


const App = () => {

  const [propPosition, setPropPosition] = useState({});
  const [propWeather, setPropWeather] = useState(L.divIcon());
  const [propForecast, setPropForecast] = useState([]);
  const [propCity, setPropCity] = useState("");

  const handleOnClickMap = (coord) => {
    console.log(coord);
    setPropPosition(coord.latlng);
    setPropWeather(L.divIcon());
    setPropForecast([]);
    setPropCity("");
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.latlng.lat}&lon=${coord.latlng.lng}&units=metric&lang=hu&appid=094080442761c029747e0c8ec0ed88e6`)
      .then((response) => {
        console.log('fetchData', response.data)
        if (typeof response.data.coord !== 'undefined') {
          setPropCity(response.data.name);
          setPropWeather( L.divIcon({
            className: 'my-div-icon',
            html: `
              <div class="icon">
                <img src="http://openweathermap.org/img/w/${response.data.weather[0].icon}.png">
                <div class="text">
                  <div class="temp">${Math.round(response.data.main.temp)}&#8451;</div>
                    <div class="city_desc">
                      <div class="city">${response.data.name}</div>
                      <div class="desc">${response.data.weather[0].description}</div>
                    </div>
                </div>
              </div>
              `,
          }));
        }
      });
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.latlng.lat}&lon=${coord.latlng.lng}&units=metric&lang=hu&exclude=current,hourly,minutely,alerts&appid=72bedafb2eceb4ad3ca35583a7635495`)
      .then((response) => {
        console.log('weather:', response.data.daily);
        setPropForecast(response.data.daily);
      });
      
  }

  return (
    <>
      <MapComponent
        onClickMap={handleOnClickMap}
        propWeather={propWeather}
        propPosition={propPosition}
      />
      {propForecast.length > 0 && <SideComponent propForecast={propForecast} propCity={propCity} />}
    </>
  )
}

export default App