import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useState } from 'react';
import {useLocation} from  "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { MySaleItem } from './MySaleItem';
import { useEffect } from 'react';

export function MySalesPage(){

    let navigate = useNavigate(); 

    const {state} = useLocation(); // get params 

    const arraySales = state.arraySales
   
    console.log('arraySales')
    

    arraySales.map((i) =>{
        console.log(i)
                                        
        })

    const action = () => {
        try {
            console.log("open catalog " + state.idUser)      
            navigate('/catalog',{state:{idUser:state.idUser,username:state.username,location:state.location}});
        } catch (err) {
            alert("Error opening the catalog")
        }
    }

    return (
        <Fragment>
           <header className="App-header">   
                <div style={{ backgroundImage: 'url(require("./Images/loginBackgroundJ.jpg"))' }}>
                    <div className='container mx-auto'>
                        <div className='form-div'>
                            <h1 className ="display-1" style={{color:'Gold'}}>My Sales</h1>
                            <button type="button" class="btn btn-warning" onClick={action}>Back to home</button>
                            <br/><br/><br/>
                            <div className="row row-cols-2 row-cols-md-2 g-4">
                                {
                                    arraySales.map((i) =>{
                                    return(
                                        <MySaleItem item = {{id:i.idSale, username:state.username, idUser:state.idUser, 
                                                             location:state.location, date:i.date, idStore:i.idStore}}/>
                                    )})
                                        } 
                            </div>  
                        </div>
                    </div>
                </div>
            </header>
        </Fragment> 
    );
}

