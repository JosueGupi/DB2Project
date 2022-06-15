import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Ticket } from './Ticket'
import {useLocation} from  "react-router-dom";

export function TicketMenu(){

    const {state} = useLocation(); // get params 

    const [arrayTicket, setArrayTicket] = useState([]) //hook use state

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/adminEmployees/getRatings')
            .then(response => setArrayTicket(response.data[0]))
        
    
    // empty dependency array means this effect will only run once 
    }, []);

    return (
        <Fragment>
           <header className="Admin-header">   
                <div style={{ backgroundImage: 'url(require("./Images/AdminBGJ.png"))' }}>
                    <div className='container mx-auto'>
                        <div className='form-div'>
                            <h1 className ="display-1" style={{color:'Gold'}}>Tickets</h1>
                            <br/>
                            
                            {
                                arrayTicket.map((i) =>{
                                return(
                                    <Ticket ticket = {{Rating:i.Rating,Commentary:i.Commentary,idEmployeeRating:i.idEmployeeRating}}/>
                                )})
                                } 
                            
                        </div>
                    </div>
                </div>
            </header>
        </Fragment> 
    );
}

