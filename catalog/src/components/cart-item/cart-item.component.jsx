import React, { Fragment } from 'react';

import './cart-item.styles.scss'

export function CartItem ({ item: { imageUrl, price, name, quantity } }) {
  return (
    <Fragment>
        <div className="cart-item">
          <img src={imageUrl} alt="cart item" />
          <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
              {quantity} x ${price}
          </span>
          </div>
        </div>
    </Fragment>
  )
}