import React, { Fragment } from 'react';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { AdminMap } from './AdminMap';
import { MapContainer, TileLayer} from 'react-leaflet'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"



export function AdminStoresForm() {
    const [lat, setLat] = useState("Latitude")
    const [lng, setLng] = useState("Length")
    const{register, handleSubmit} = useForm();

    const coordLat = (data) => {
        setLat(data === null ? "Latitude" : data)
    }
    const coordLng = (data) => {
        setLng(data === null ? "Length" : data)
    }
    
    const onSubmit = async (data) => {
        try {
            console.log('funcara')
            const response = await axios.post('http://localhost:3001/stores/changeLocation',data)
            console.log('funca')

        } catch (err) {
            alert("ERROR CHANGE!!!")
        }
        
        
    }
    

    return (
        <Fragment>
            <div className="container">
                <MapContainer 
                style={{ height: "50vh" }}
                center={{ lat: 51.505, lng: 0.09 }}
                zoom={8}
                scrollWheelZoom={true}
                >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <AdminMap coordLat = {coordLat} coordLng = {coordLng}/>
                </MapContainer>
            </div>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <select className="form-select" aria-label="Default select example" {...register('country',{required:true})}>
                
                    <option key="1" value="USA">USA</option>
                    <option key="2" value="Scotland">Scotland</option>
                    <option key="3" value="Ireland">Ireland</option>
                    
                </select>
                
                <select className="form-select" aria-label="Default select example" {...register('store',{required:true})}>
                    
                    <option key="1" value="Store A">Store A</option>
                    <option key="2" value="Store B">Store B</option>
                    <option key="3" value="Store C">Store C</option>
                    
                </select>
                <br />
                <input id="lat" className="form-control" type="text" placeholder={lat} value={lat} aria-label="Disabled input example" disabled {...register('lat',{required:true})}/>
                <input id="lng" className="form-control" type="text" placeholder={lng} value={lng} aria-label="Disabled input example" disabled {...register('lng',{required:true})}/>
                <input type='submit' className="btn btn-warning" value='Change'/>
                    
            </form>
            
        </Fragment>
    )
}