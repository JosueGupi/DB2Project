import React, { Fragment } from 'react'
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { AdminMap } from './AdminMap';
import { MapContainer, TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet'
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

    const onSubmit = async(data) => {
        /*try {
            const response = await axios.post('http://localhost:3001/stores/changeLocation',data)
            console.log(response.data.recordset)

        } catch (err) {
            alert("ERROR CHANGE!!!")
        }*/
        console.log(data)
    }

    return (
        <Fragment>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    

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
                    <select id="country" className="form-select" aria-label="Default select example" {...register('country',{required:true})}>
                        
                        <option value="USA">USA</option>
                        <option value="Scotland">Scotland</option>
                        <option value="Ireland">Ireland</option>
                        
                    </select>
                    <br />
                    <select id="store" className="form-select" aria-label="Default select example" {...register('store',{required:true})}>
                        
                        <option value="Store A">Store A</option>
                        <option value="Store B">Store B</option>
                        <option value="Store C">Store C</option>
                        
                    </select>
                    <input id="lat" className="form-control" type="text" placeholder={lat} aria-label="Disabled input example" disabled {...register('lat',{required:true})}></input>
                    <input id="lng" className="form-control" type="text" placeholder={lng} aria-label="Disabled input example" disabled {...register('lng',{required:true})}></input>
                    <button type="button" className="btn btn-warning">Change</button>
                        
                </form>
            </div>
        </Fragment>
    )
}