import React, { useState } from 'react';
import axios from 'axios';
import { MapComponent } from './MapComponent';
import L from 'leaflet';


const App = () => {

  const [propPosition, setPropPosition] = useState({});
  const [propWeather, setPropWeather] = useState(L.divIcon());

  const handleOnClickMap = (coord) => {
    console.log(coord);
    setPropPosition(coord.latlng);
    setPropWeather(L.divIcon());
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.latlng.lat}&lon=${coord.latlng.lng}&units=metric&lang=hu&appid=094080442761c029747e0c8ec0ed88e6`)
      .then((response) => {
        console.log('fetchData', response.data)
        if (typeof response.data.coord !== 'undefined') {
          setPropWeather( L.divIcon({
            className: 'my-div-icon',
            html: `
              <div class="icon">
                <img src="http://openweathermap.org/img/w/${response.data.weather[0].icon}.png">
                ${response.data.name}, ${response.data.weather[0].description}, ${response.data.main.temp}&#8451;,
              </div>
              `,
          }));
        }
      });
  }

  return (
    <>
      <MapComponent
        onClickMap={handleOnClickMap}
        propWeather={propWeather}
        propPosition={propPosition}
      />
    </>
  )
}

export default App