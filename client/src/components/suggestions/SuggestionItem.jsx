import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'


export function SuggestionItem({ticket}){

    let navigate = useNavigate();

    const action = () => {
        try {            
            navigate('/getSuggestResponse',{state:{idTicket:ticket.idEmployeeRating, idUser:ticket.idUser,username:ticket.username,location:ticket.location}})            
        } catch (err) {
            alert("Error getting the suggest responses")
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
