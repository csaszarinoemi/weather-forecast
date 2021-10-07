import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import "./MapComponent.css";

export const MapComponent = ({ positionDefault = [46.95676543238678, 19.00797843933106], onClickMap, propWeather, propPosition }) => {
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