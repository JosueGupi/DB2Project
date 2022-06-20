import React, { Fragment } from 'react';
import {useNavigate} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Response } from './Response'
import {useLocation} from  "react-router-dom";

export function SuggestionResponse(){
    
    const {state} = useLocation(); // get params 
    let navigate = useNavigate();
    const [arrayComment, setArrayComment] = useState([]) //hook use state
    
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/adminEmployees/getComments',{idTicket:state.idTicket})
            .then(response => setArrayComment(response.data[0]))
            
    // empty dependency array means this effect will only run once 
    }, []);
    
    const routeCatalog = () =>{ 
        let path = '/catalog'; 
        console.log(state.idUser + state.username + state.location)
        navigate(path,{state:{idUser:state.idUser,username:state.username,location:state.location}});
    }
    return (
        <Fragment>
           <header className="Admin-header">   
                <div style={{ backgroundImage: 'url(require("./Images/AdminBGJ.png"))' }}>
                    <div className='container mx-auto'>
                        <div className='form-div'>
                            <h1 className ="display-1" style={{color:'Gold'}}>Tickets</h1>
                            <br/>
                            
                            {
                                arrayComment.map((i) =>{
                                return(
                                    <Response Comment = {{Username:i.Username,DateC:i.DateC,Commentary:i.Commentary}}/>
                                )})
                                } 
                            
                        </div>
                    </div>
                </div>
                
                <center>
                    <button type="button" className="btn btn-warning" onClick={routeCatalog}>Back to home</button>
                </center>
            </header>
        </Fragment> 
    );
}
