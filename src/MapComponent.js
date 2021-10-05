import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import "./MapComponent.css";

export const MapComponent = ({ positionDefault = [47.497913, 19.040236], onClickMap, propWeather, propPosition }) => {
  return (
    <Map center={positionDefault} zoom={7} style={{ height: '800px', width: '100%' }} onClick={onClickMap} propPosition={{}} propWeather={{}}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
      />
      {typeof propPosition.lat !== 'undefined' && <Marker position={propPosition} key={1} icon={propWeather} />}
    </Map>
  )
}