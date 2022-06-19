import React, { Fragment } from 'react';
import {useNavigate} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Comment } from './Comment'
import {useLocation} from  "react-router-dom";

export function TicketComment(){
    const{register, handleSubmit} = useForm();
    const {state} = useLocation(); // get params 
    let navigate = useNavigate();
    const [arrayComment, setArrayComment] = useState([]) //hook use state
    
    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3001/adminEmployees/addComments',{idTicket:state.idTicket,user:'Admin',comment:data.comment})
            console.log(response)
            navigate('/tickets')
            
        } catch (err) {
            alert(err.message)
            console.log(err)
        }
    }
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/adminEmployees/getComments',{idTicket:state.idTicket})
            .then(response => setArrayComment(response.data[0]))
        
    
    // empty dependency array means this effect will only run once 
    }, []);
    const routeAdmin = () =>{ 
        let path = '/admin'; 
        navigate(path);
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
                                    <Comment Comment = {{Username:i.Username,DateC:i.DateC,Commentary:i.Commentary}}/>
                                )})
                                } 
                            
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                

                    <div className="mb-3">
                        <label  className="form-label" style={{color:'White'}}>Add Comment</label>
                        <input type="text" className="form-control" id="comment" placeholder="Add comment"
                        {...register('comment',{required:true})}/>
                    </div>
                    <center>
                        <input type='submit' className='btn btn-warning' value='Add'/>
                    </center>
                </form>
                <center>
                    <button type="button" className="btn btn-warning" onClick={routeAdmin}>Go Back</button>
                </center>
            </header>
        </Fragment> 
    );
}

