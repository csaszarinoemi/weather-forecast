import React from 'react'
import "./SideComponent.css";

export const SideComponent = ({propForecast, propCity}) => {
  const dailyWeather = propForecast.map(day => <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}></img>)

  return (
    <div className="side_container">{propCity}
      <div className="city"></div>
      <div className="description">Daily Forecast</div>
        <ul>{dailyWeather}</ul>
        
    </div>
  )
}