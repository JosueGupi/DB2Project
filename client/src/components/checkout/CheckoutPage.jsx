import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './checkout.styles.scss';
import {useLocation} from  "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export function CheckoutPage(){

    let navigate = useNavigate();
    const {state} = useLocation(); // get params 
    const [arrShoppCart, setArrShoppCart] = useState([]) //hook use state

    const action = () => {
        console.log("works");
    }

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/catalog/getShoppingCart',{idUser:state.idUser})
            .then(response => setArrShoppCart(response.data.recordset))
    
    // empty dependency array means this effect will only run once 
    }, []);

    arrShoppCart.map((i) =>{
        console.log("Name: " + i.name + " idWhisky: " + i.idWhisky)    
    })

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
                {/*
                {cartItems.map(cartItem =>
                    (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                    )
                }*/}
                <div className='total'>
                    <button onClick={action} class="custom-button"> BUY </button>
                    <span>TOTAL: $0</span>
                </div>
            </div>
        </Fragment>
    );
}

