import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from './Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './Catalog.styles.scss';

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
            <div class="container">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link  to ="/">
                        <img className= "image" src={"./Images/crown.svg"}/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" href="/">Home</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                    <li class="nav-item">
                        <a class="nav-link active" href="/checkout">Cart</a>
                        </li>
                    </span>
                    </div>
                </div>

            </nav>
            </div>
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

