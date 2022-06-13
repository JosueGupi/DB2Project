import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './checkout.styles.scss';

export function CheckoutPage(){

    const action = () => {
        console.log("works");
    }

    return (
        <Fragment>
           <div style={{ backgroundImage: 'url(require("./Images/LoginBackgroundJ.jpg"))' }} className="checkout-page" >
                <h1 className ="display-1" style={{color:'Gold'}}>Catalog</h1>
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

