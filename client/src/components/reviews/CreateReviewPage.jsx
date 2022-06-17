import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { CreateReviewForm } from './CreateReviewForm';
import {useLocation} from  "react-router-dom";
import {useNavigate} from 'react-router-dom';

export function CreateReviewPage(){

    let navigate = useNavigate();
    const {state} = useLocation(); 
    console.log('create review ' + state.idUser + state.location)
    return (
        <Fragment>
           <header className="App-header">
            
            <div style={{ backgroundImage: 'url(require("./Images/loginBackgroundJ.jpg"))' }}>
                <div className='container mx-auto'>
                    <div className='form-div'>
                        <h1 className ="display-1" style={{color:'Gold'}}>Create Review </h1>
                        
                        <br/>
                        <CreateReviewForm state = {{idUser:state.idUser,username:state.username,location:state.location}}/>
                    </div>
                </div>
            </div>

        </header>
        </Fragment>
    );
}