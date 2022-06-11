import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from './Card';

export function CatalogPage(){
    return (
        <Fragment>
           <header className="App-header">
            
            <div style={{ backgroundImage: 'url(require("./Images/loginBackgroundJ.jpg"))' }}>
                <div className='container mx-auto'>
                    <div className='form-div'>
                        <h1 className ="display-1" style={{color:'Gold'}}>Catalog</h1>
                        
                        <br/>
                        <Card/>
                    </div>
                </div>
            </div>

        </header>
        </Fragment>
    );
}

