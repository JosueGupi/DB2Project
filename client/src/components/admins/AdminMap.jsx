import {Marker,Popup,useMapEvents} from 'react-leaflet'
import React, { useState } from 'react';


export function AdminMap({coordLat,coordLng}) {
    const [position, setPosition] = useState(null)
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    //catch onClick events
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng)
  
        setLat(e.latlng.lat)
        setLng(e.latlng.lng)
        
        
        coordLat(e.latlng.lat)
        coordLng(e.latlng.lng)
      }
    })
  
    return position === null ? null : (
    <Marker position={position}>
        <Popup>{lat+","+lng}</Popup>
    </Marker>
      
    )
  }