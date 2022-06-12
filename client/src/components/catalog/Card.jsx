import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'

export function Card({card}){

    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }

    return (
        <div className="col" style={{color:'White'}}>
            <p className="text">{card.name} {card.aged} {card.whiskyType} {card.supplier} {card.subscription}</p>
            
        </div>
    )
}
