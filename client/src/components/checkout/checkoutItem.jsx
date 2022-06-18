import React, { Fragment } from 'react';
import {useLocation} from  "react-router-dom";
import axios from 'axios';

import './checkout.styles.scss';

export function CheckoutItem ({ cartItem}) {
  const { name, imageUrl, price, quantity } = cartItem;
  const {state} = useLocation();
  const remove = () => {
    try {
        const response = axios.post('http://localhost:3001/catalog/get_catalog',{idUser:state.idUser, location:state.location})       
    } catch (err) {
        alert("Error removing to shopping cart")
    }
  }
  return (
    <Fragment>
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <span className="value">{quantity}</span>
        </span>
        <span className="price">{price}</span>
        <button onClick={remove} className="custom-button" >
          &#10005;
        </button>
      </div>
    </Fragment>
  )
}