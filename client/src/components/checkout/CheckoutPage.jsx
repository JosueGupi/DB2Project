import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './checkout.styles.scss';
import {useLocation} from  "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { CheckoutItem } from './checkoutItem';
import axios from 'axios';
import { MapContainer, TileLayer} from 'react-leaflet'
import {useForm} from 'react-hook-form';
import { ClientMap } from './ClientMap';

export function CheckoutPage(){

    let navigate = useNavigate();

    const {register, handleSubmit} = useForm();
    const [lat, setLat] = useState("Latitude");
    const [lng, setLng] = useState("Length");

    const {state} = useLocation(); // get params 
    const [arrShoppCart, setArrShoppCart] = useState([]) //hook use state

    let updateLocation = 0
    let numberStore = -1
    let distance = 0

    const actionBuy = async() => {
        
        try {
            console.log("get store...");
            //first, get in which store to make the sale
            const response = await axios.post('http://localhost:3001/checkout/getStoreSale',{location:state.location,idUser:state.idUser,latitude:lat,lentgh:lng})
            distance = response.data.recordset[0].distance
            numberStore = response.data.recordset[0].numberStore
            console.log(distance)
            console.log(numberStore)
        } catch {
            alert('Error getting store')
        }
        
        if(updateLocation = 1){
            try{
                console.log('set location...')
                const response2 = await axios.post('http://localhost:3001/checkout/setLocationUser',{location:state.location,idUser:state.idUser,latitude:lat,lentgh:lng})
                console.log(response2)
            } catch {
                alert('Error updating location')
            }
        }

        if(numberStore != -1){
            try{
                console.log('generate the sale...' + distance + numberStore)
                const response3 = await axios.post('http://localhost:3001/checkout/generateSale',{location:state.location,idUser:state.idUser,numberStore:numberStore,distance:distance})
                console.log(response3)
                alert('Sale successfully generated')
            } catch {
                alert('Error generating the sale')
            }
        } else {
            alert('Insufficient inventory resources')
        } 

    }

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/catalog/getShoppingCart',{idUser:state.idUser,location:state.location})
            .then(response => setArrShoppCart(response.data.recordset))
    
    // empty dependency array means this effect will only run once 
    }, []);

    arrShoppCart.map((i) =>{
        console.log("Name: " + i.name + " idWhisky: " + i.idWhisky)    
    })
    const uniqueIds = [];


    var whiskeyUnique = arrShoppCart.filter(element => {
        const isDuplicate = uniqueIds.includes(element.idWhisky);

        if (!isDuplicate) {
        uniqueIds.push(element.idWhisky);

        return true;
        }

        return false;
    });
    var quantity = (id) =>{
        return(arrShoppCart.filter(item => item.idWhisky === id ).length)
    }
    const action = () => {
        whiskeyUnique.map((i) =>{
            console.log("Name: " + i.name + " idWhisky: " + i.idWhisky + " Quantity: " + quantity(i.idWhisky))    
        })
    }

    const onSubmit = async (data) => {
        try {
            data.latq = lat;
            data.lngq = lng;
            if (data.updateLocation) {
                updateLocation = 1; 
            } 
            console.log('funca ' + lat + ' ' + lng)
        } catch (err) {
            alert("ERROR IN MAP!!!")
        } 
    }

    const coordLat = (data) => {
        console.log(data)
        setLat(data);
    };
    const coordLng = (data) => {
        setLng(data);
    };

    return (
        <Fragment>
           <div style={{ backgroundImage: 'url(require("./Images/LoginBackgroundJ.jpg"))' }} className="checkout-page" >
                <h1 className ="display-1" style={{color:'Gold'}}>Shopping Cart of {state.username}</h1>
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>

                    <div className="header-block">
                        <span>Description</span>
                    </div>

                    <div className="header-block">
                        <span>Quantity</span>
                    </div>

                    <div className="header-block">
                        <span>Price</span>
                    </div>

                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {whiskeyUnique.map(cartItem =>
                    (<CheckoutItem key={cartItem.id} cartItem={cartItem} quantity = {quantity (cartItem.idWhisky)}/>)
                    )
                }

                <div className='total'>
                    <span>TOTAL: $0</span>
                </div>
                {/* -------- Map -------------------- */}

                <br></br><br></br><br></br>
                <br></br><br></br><br></br>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label" style={{color:'Black'}}>Please select shipping location:</label>                    
                </div>
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
                    <ClientMap coordLat = {coordLat} coordLng = {coordLng}/>
                    </MapContainer>
                </div>

                <br></br>

                <form onSubmit={handleSubmit(onSubmit)}>

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

                    <br></br>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label" style={{color:'Black'}}>Do you want to save this location?  </label>                    
                        <input type="checkbox" name="updateLocation" placeholder="Your Location"
                        {...register('updateLocation')}/> 
                    </div>

                    <center>
                        <input type='submit' className='btn btn-warning' value='Select Location'/>
                    </center>

                </form>


                <div className='total'>
                    <button onClick={actionBuy} class="custom-button"> BUY </button>
                </div>
                <br></br><br></br><br></br>
                <br></br><br></br><br></br>
            </div>
        </Fragment>
    );
}

