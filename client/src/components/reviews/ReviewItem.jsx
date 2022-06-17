import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'

export function ReviewItem({item}){

    let navigate = useNavigate();
    console.log("ksksk" )
    return (
        <div className="col">
           {/* <p className="text">{card.name} {card.aged} {card.whiskyType} {card.supplier} {card.subscription}</p>*/} 
            <div className="card">
                    <div class="card-body">
                        <h5 className="card-title">{item.whisky}</h5>
                        <img className= "image" src={"./Images/abeja.jpg"}/>
                        <p className ="card-text">Description: {item.description}</p>
                        <p className ="card-text">User: {item.user}</p>
                        <p className ="card-text">Country: {item.country}</p>
                    </div>
            </div>
        </div>
    )
}
