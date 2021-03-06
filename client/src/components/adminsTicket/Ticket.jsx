import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'

import axios from 'axios';

export function Ticket({ticket}){
    //get the information to create the component
    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }

    const action = () => {
        try {
            //set the information to new component to create 
            console.log(ticket.idEmployeeRating);
            navigate('/comments',{state:{idTicket:ticket.idEmployeeRating}})
                    
        } catch (err) {
            alert("Error adding to shopping cart")
        }
    }

    return (
        
        <div className="col">
            <div className="container">
                <div className="container" style={{opacity:0.85,backgroundColor:'gray', borderRadius: '50px 50px 50px 50px',margin:'2%'}}>
                    <div className="modal-body" >
                            <center>
                                <p>{ticket.idEmployeeRating}</p>
                                
                        
                        <h5 className="model-title" >{ticket.Commentary}</h5>
                        
                        
                        <button onClick={action} className="btn btn-warning" >Check</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}
