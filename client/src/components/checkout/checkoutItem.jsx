import React, { Fragment } from 'react';

import './checkout.styles.scss';

export function CheckoutItem ({ cartItem, quantity, removeItem }) {
  const { idWhisky ,name, imageUrl, price } = cartItem;
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
        <button className="custom-button" >
          &#10005;
        </button>
      </div>
    </Fragment>
  )
}