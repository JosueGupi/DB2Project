import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { CreateAccountForm } from './CreateAccountForm';

export function CreateAccountPage(){
    return (
        <Fragment>
           <header className="App-header">
            
            <div style={{ backgroundImage: 'url(require("./Images/loginBackgroundJ.jpg"))' }}>
                <div className='container mx-auto'>
                    <div className='form-div'>
                        <h1 className ="display-1" style={{color:'Gold'}}>Create Account</h1>
                        
                        <br/>
                        <CreateAccountForm />
                    </div>
                </div>
            </div>

        </header>
        </Fragment>
    );
}

