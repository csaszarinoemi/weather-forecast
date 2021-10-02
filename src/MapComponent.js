import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const MapComponent = ({ positionDefault = [47.497913, 19.040236] }) => {
 
    return (
        <MapContainer center={positionDefault} zoom={7} style={{ height: '800px', width: '100%' }}>
            <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            />
            <Marker position={[4.660779178475431, -74.08494168529754]}>
                <Popup>This is your marker<br />Easily customizable.</Popup>
            </Marker>
        </MapContainer>
    )
}