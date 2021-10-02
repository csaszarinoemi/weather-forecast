import React, { useState } from 'react'

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export const MapComponent = ({ positionDefault = [47.497913, 19.040236] }) => {
  const [markers, setMarkers] = useState([[4.660779178475431, -74.08494168529754]])
  const handleClick = (e) => {
    console.log(e.latlng)
    setMarkers([...markers, [e.latlng.lat, e.latlng.lng]])
  }

    return (
        <Map center={positionDefault} zoom={7} style={{ height: '800px', width: '100%' }} onClick={handleClick}>
            <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            />
            {
              markers.map((markerPosition, i) => {
                return (
                  <Marker position={markerPosition} key={i}>
                    <Popup>
                      lat: {markerPosition[0]}
                      <br />
                      lng: {markerPosition[1]}
                    </Popup>
                  </Marker>
                )
              })
            }
        </Map>
    )
}