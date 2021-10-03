import React, { useState } from 'react'

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export const MapComponent = ({ positionDefault = [47.497913, 19.040236], onClickMap }) => {
  const [markers, setMarkers] = useState([])

  const handleClick = (e) => {
    setMarkers([e.latlng.lat, e.latlng.lng]);
    console.log(markers);
    onClickMap(e.latlng);
  }

  return (
    <Map center={positionDefault} zoom={7} style={{ height: '800px', width: '100%' }} onClick={handleClick}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
      />
      {markers.length > 0 && <Marker position={markers} key={1}>
        <Popup>
          lat: {markers[0]}
          <br />
          lng: {markers[1]}
        </Popup>
      </Marker>}
    </Map>
  )
}