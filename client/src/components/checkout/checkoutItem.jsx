import React, { Fragment } from 'react';
import {useLocation} from  "react-router-dom";
import axios from 'axios';

import './checkout.styles.scss';

export function CheckoutItem ({ cartItem}) {
  const { name, image, price, quantity } = cartItem;
  const remove = () => {
    try {
        const response = axios.post('http://localhost:3001/catalog/deleteShoppingCart',{name:cartItem.name, idUser:cartItem.idUser, location:cartItem.location})
        setTimeout(() => {  window.location.reload(); }, 1000);      
    } catch (err) {
        alert("Error removing to shopping cart")
    }
  }
  return (
    <Fragment>
      <div className="checkout-item">
        <div className="image-container">
          <img src={image} alt="item" />
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