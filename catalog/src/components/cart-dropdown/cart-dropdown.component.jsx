import {CartItem} from '../cart-item/cart-item.component';
import {useNavigate} from "react-router-dom"

import './cart-dropdown.styles.scss';

import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export function CartDropdown({cartItems, history, dispatch}){
    let navigate = useNavigate();
    return (
        <Fragment>
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    {
                        cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem}/> 
                        ))
                        ):(
                        <span className='empty-message'>Your cart is empty</span>
                        )}
                </div>
                <button 
                    onClick={() => {
                        navigate('/checkout');
                    }}> 
                    GO TO CHECKOUT 
                </button>
            </div>
        </Fragment>
    );
}