import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { SuggestionItem } from './SuggestionItem'
import {useLocation} from  "react-router-dom";
import {useForm} from 'react-hook-form';
import { SuggestionForm } from './SuggestionsForm';

export function SuggestionPage(){

    const{register, handleSubmit} = useForm();

    const {state} = useLocation(); // get params 

    const [arrayTicket, setArrayTicket] = useState([]) //hook use state
    let navigate = useNavigate();
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/adminEmployees/getRatingsUser',{user:state.username})
            .then(response => setArrayTicket(response.data[0]))
    
    // empty dependency array means this effect will only run once 
    }, []);

    const routeCatalog = () =>{ 
        let path = '/catalog'; 
        navigate(path,{state:{idUser:state.idUser,username:state.username,location:state.location}});
    }

    return (
        <Fragment>
           <header className="App-header">
           <div style={{ backgroundImage: 'url(require("./Images/loginBackgroundJ.png"))' }}>

            <div className='container mx-auto'>   
                    <div className='container mx-auto'>
                        <div className='form-div'>

                        <h1 className ="display-1" style={{color:'Gold'}}>Create Ticket</h1>
                        <br/>
                        <SuggestionForm state = {{idUser:state.idUser,username:state.username,location:state.location}}/>

                        <br/><br/><br/>
                        <h1 className ="display-1" style={{color:'Gold'}}>My Tickets</h1>
                            <br/>

                            
                            {
                                arrayTicket.map((i) =>{
                                return(
                                    <SuggestionItem ticket = {{Rating:i.Rating,Commentary:i.Commentary,idEmployeeRating:i.idEmployeeRating,
                                                             idUser:state.idUser,username:state.username,location:state.location}}/>
                                )})
                               } 
                            
                        </div>
                    </div>
                </div>
                <center>
                    <button type="button" className="btn btn-warning" onClick={routeCatalog}>Back to home</button>
                </center>
                </div>
            </header>
        </Fragment> 
    );
}

