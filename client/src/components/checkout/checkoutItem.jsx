import React, { Fragment } from 'react';

import './checkout.styles.scss';

export function CheckoutItem ({ cartItem, clearItem, addItem, removeItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <Fragment>
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow"  >&#10094;</div>
          <span className="value">{quantity}</span>
          <div className="arrow" >&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" >
          &#10005;
        </div>
      </div>
    </Fragment>
  )
}