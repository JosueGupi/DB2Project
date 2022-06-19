import React, { Fragment } from 'react';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { AdminMap } from './AdminMap';
import { MapContainer, TileLayer} from 'react-leaflet'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export  function AdminStoresForm() {
    
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    const [lat, setLat] = useState("Latitude");
    const [lng, setLng] = useState("Length");
    

    const onSubmit = async (data) => {
        try {
            data.latq = lat;
            data.lngq = lng;
            console.log('funcara')
            const response = await axios.post('http://localhost:3001/stores/changeLocation',data)
            console.log('funca')
            navigate('/admin')
            

        } catch (err) {
            alert("ERROR CHANGE!!!")
        } 
    }
    const coordLat = (data) => {
        console.log(data)
        setLat(data);
    };
    const coordLng = (data) => {
        setLng(data);
    };
    const routeAdmin = () =>{ 
        let path = '/admin'; 
        navigate(path);
    };
    
    return (
        <Fragment>
            <header className="Admin-header">
            <div className='container mx-auto'>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        
                    <select className="form-select" aria-label="Default select example" {...register('country',{required:true})}>
                
                        <option key="1" value="USA">USA</option>
                        <option key="2" value="Scotland">Scotland</option>
                        <option key="3" value="Ireland">Ireland</option>
                        
                    </select>
                    </div>
                    <div className="mb-3">
                    <select className="form-select" aria-label="Default select example" {...register('store',{required:true})}>
                    
                        <option key="1" value="Store A">Store A</option>
                        <option key="2" value="Store B">Store B</option>
                        <option key="3" value="Store C">Store C</option>
                    
                    </select>
                    </div>
                    <div className="mb-3">
                        
                        <input type="text" className="form-control" id="lati"  value={lat} 
                        {...register('latq',{required:true})}
                        />
                    </div>
                    <div className="mb-3">
                        
                        <input type="text" className="form-control" id="lngi" value={lng} 
                        {...register('lngq',{required:true})}
                        />
                    </div>
                    <center>
                        <input type='submit' className='btn btn-warning' value='Change'/>
                    </center>
                </form>
                <center>
                    <button type="button" className="btn btn-warning" onClick={routeAdmin}>Go Back</button>
                </center>
                </div>

            </header>
        </Fragment>
    )
}