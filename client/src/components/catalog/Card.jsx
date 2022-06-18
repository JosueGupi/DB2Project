import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'

import axios from 'axios';

export function Card({card}){

    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/';
        navigate(path);
    }

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
           {/* <p className="text">{card.name} {card.aged} {card.whiskyType} {card.supplier} {card.subscription}</p>*/} 
            <div className="card">
                    <div class="card-body">
                        <h5 className="card-title">{card.name}</h5>
                        <img className= "image" src={card.image}/>
                        <p className ="card-text">Aged: {card.aged}</p>
                        <p className ="card-text">Price: {card.price}</p>
                        <button onClick={action} class="custom-button" >Add Cart</button>
                    </div>
                    </div>
                </div>
    )
}
