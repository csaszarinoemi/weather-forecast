import React from 'react'
import "./SideComponent.css";

export const SideComponent = ({propForecast, propCity}) => {
  const getCalendarDay = () => {
  let days = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
  let currentDay = days[new Date().getDay()];
  let calendar = [];
  let index = days.indexOf(currentDay);

  for (let i = index; i < days.length-1; i++){
    calendar.push(days[i+1]);
  } 
  for (let i = 0; i <= index; i++) {
    calendar.push(days[i]);
  }
  calendar.push(days[index+1])
  return calendar;
}
getCalendarDay();
  const dailyWeather = propForecast.map((day, i) => 
  <>
  <img key={`icon_${i}`} src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt=""></img>
  <div key={`day_${i}`}>{getCalendarDay()[i]}</div>
  <div key={`desc_${i}`}>{day.weather[0].description}</div>
  <div key={`temp_${i}`}>{Math.round(day.temp.day)}&#8451;</div>
</>
  )
  return (
    <div className="side_container">
      <div className="container">
        <div className="city">{propCity}</div>
        <div className="description">8 napos időjárás előrejelzés</div>
      </div>
        <ul>{dailyWeather}</ul>
    </div>
  )
}