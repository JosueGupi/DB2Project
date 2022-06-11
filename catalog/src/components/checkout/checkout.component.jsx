import React, { Fragment } from 'react';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss';

export function CheckoutPage({cartItems, total}) {
  return (
    <Fragment>
          <div className="checkout-page">
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
            {
            cartItems.map(cartItem =>
                (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                )
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
          </div>
    </Fragment>
  )
}