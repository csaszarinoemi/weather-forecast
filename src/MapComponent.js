import React, { useState } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import "./MapComponent.css";

export const MapComponent = ({ positionDefault = [47.497913, 19.040236], onClickMap, weather }) => {
  const [markers, setMarkers] = useState([]);
  const [icon, setIcon] = useState(L.divIcon());

  const handleClick = (e) => {
    setMarkers([e.latlng.lat, e.latlng.lng]);
    setIconData({test: `valami: ${e.latlng.lat},${e.latlng.lng}`, weather: weather});
    onClickMap(e.latlng);
  }
// Customize marker icon 
  const setIconData = (params) => {
    console.log('component:',params.weather);
    setIcon(L.divIcon({
      className: 'my-div-icon',
      html: `<div class="icon">
      ${params.test}
    </div>
  `,
    }));
  };


  return (
    <Map center={positionDefault} zoom={7} style={{ height: '800px', width: '100%' }} onClick={handleClick}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
      />
      {markers.length > 0 && <Marker position={markers} key={1} icon={icon} />}
    </Map>
  )
}