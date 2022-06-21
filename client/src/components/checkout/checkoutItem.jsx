import React, { Fragment } from 'react';
import {useLocation} from  "react-router-dom";
import axios from 'axios';

import './checkout.styles.scss';

export function CheckoutItem ({ cartItem}) {
  //get the currency of the country
  var currency = ''
    if (cartItem.location == 'USA'){
        currency = 'Dollars'
    } if (cartItem.location == 'Ireland'){
        currency = 'Euros'
    } if (cartItem.location == 'Scotland'){
        currency = 'Sterling pounds'
    } 
  const { name, image, price, quantity, id } = cartItem;
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
        <span className="image-container" > {id}
        </span>
        <span className="name">
          <span className="name">{name}</span>
        </span>
        <span className="quantity">
          <span className="value">{quantity}</span>
        </span>
        <span className="price">{price} {currency} </span>
        <button onClick={remove} className="custom-button" >
          &#10005;
        </button>
      </div>
    </Fragment>
  )
}