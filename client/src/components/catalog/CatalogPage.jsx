import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from './Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export function CatalogPage(){

    const [arrayCard, setArrayCard] = useState([]) //hook use state

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/catalog/get_catalog')
            .then(response => setArrayCard(response.data.recordset))
    
    // empty dependency array means this effect will only run once 
    }, []);

    return (
        <Fragment>
           <header className="App-header">   
                <div style={{ backgroundImage: 'url(require("./Images/loginBackgroundJ.jpg"))' }}>
                    <div className='container mx-auto'>
                        <div className='form-div'>
                            <h1 className ="display-1" style={{color:'Gold'}}>Catalog</h1>
                            <br/>
                            <div className="row row-cols-2 row-cols-md-2 g-4">
                                {
                                    arrayCard.map((i) =>{
                                    return(
                                        <Card card = {{name:i.name[0], aged:i.aged, whiskyType:i.name[1], 
                                                       supplier:i.name[2], subscription:i.name[3]}}/>
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

