import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { UpdateSubscriptionsForm } from './UpdateSubscriptionsForm';

export function UpdateSubscriptionsPage(){
    return (
        <Fragment>
           <header className="App-header">
            
            <div style={{ backgroundImage: 'url(require("./Images/loginBackgroundJ.jpg"))' }}>
                <div className='container mx-auto'>
                    <div className='form-div'>
                        <h1 className ="display-1" style={{color:'Gold'}}>Update Subscription</h1>
                        
                        <br/>
                        <UpdateSubscriptionsForm />
                    </div>
                </div>
            </div>

        </header>
        </Fragment>
    );
}

