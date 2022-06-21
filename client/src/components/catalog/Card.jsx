import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios';

export function Card({card}){
    var currency = ''
    if (card.location == 'USA'){
        currency = 'Dollars'
    } if (card.location == 'Ireland'){
        currency = 'Euros'
    } if (card.location == 'Scotland'){
        currency = 'Sterling pounds'
    } 

    const img = "data:image/png;base64," + card.image

    const action = () => {
        try {
            const response = axios.post('http://localhost:3001/catalog/addShoppingCart',{name:card.name,idUser:card.idUser,location:card.location})
            console.log("works add");
            alert("Added to shopping cart")         
        } catch (err) {
            alert("Error adding to shopping cart")
        }
    }

    return (
        <div className="col">
            <div className="card">
                <div class="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <img src={img} width="150" height="150"/>
                    <p className ="card-text">Aged: {card.aged}</p>
                    <p className ="card-text">Price: {card.price} {currency} </p>
                    <button onClick={action} class="custom-button" >Add Cart</button>
                </div>
            </div>
        </div>
    )
}
