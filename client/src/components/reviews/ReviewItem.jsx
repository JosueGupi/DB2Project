import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'

export function ReviewItem({item}){

    const img = "data:image/png;base64," + item.image //image from db

    return (
        <div className="col">
            <div className="card">
                <div class="card-body">
                    <h5 className="card-title">{item.whisky}</h5>
                    <img src={img} width="150" height="150"/>
                    <p className ="card-text">Description: {item.description}</p>
                    <p className ="card-text">User: {item.user}</p>
                    <p className ="card-text">Country: {item.country}</p>
                </div>
            </div>
        </div>
    )
}
