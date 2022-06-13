import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'

export function Card({card}){

    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }

    const action = () => {
        console.log(card.name);
    }

    return (
        <div className="col">
           {/* <p className="text">{card.name} {card.aged} {card.whiskyType} {card.supplier} {card.subscription}</p>*/} 
            <div className="card">
                    <div class="card-body">
                        <h5 className="card-title">{card.name}</h5>
                        <img className= "image" src={"./Images/abeja.jpg"}/>
                        <p className ="card-text">Aged {card.aged}</p>
                        <button onClick={action} class="custom-button" >Add Cart</button>
                    </div>
                    </div>
                </div>
    )
}
