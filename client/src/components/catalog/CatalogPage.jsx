import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from './Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './Catalog.styles.scss';
import {useLocation} from  "react-router-dom";
import {useNavigate} from 'react-router-dom'

export function CatalogPage(){

    let navigate = useNavigate();

    const {state} = useLocation(); // get params 

    const [arrayCard, setArrayCard] = useState([]) //hook use state

    useEffect(() => {
        (async() => {
            const response = await axios.post('http://localhost:3001/catalog/get_catalog',{idUser:state.idUser, location:state.location}) 
            console.log(response)
            setArrayCard(response.data.recordset)
        })()
    // empty dependency array means this effect will only run once 
    }, []);

    const action = () => {
        try {
            console.log("open shopping cart of " + state.idUser)      
            navigate('/checkout',{state:{idUser:state.idUser,username:state.username,location:state.location}});
        } catch (err) {
            alert("Error opening to shopping cart")
        }
    }

    const updateCatalog = () => {
        try{
            const response = axios.post('http://localhost:3001/catalog/get_catalog',{idUser:state.idUser, location:state.location})
            .then(response => setArrayCard(response.data.recordset))
            console.log(response)
        } catch {
            alert('Error updating catalog')
        }
    }
    const actionReview = () => {
        try {
            console.log("open reviews " + state.idUser)      
            navigate('/getReviews',{state:{idUser:state.idUser,username:state.username,location:state.location}});
        } catch (err) {
            alert("Error opening reviews")
        }
    }

    const actionMySales = async() => {
        try {
            console.log("open my sales " + state.idUser)      
            const response = await axios.post('http://localhost:3001/checkout/selectSales',{idUser:state.idUser, location:state.location})
            console.log(response.data.recordset)
            navigate('/getMySales',{state:{idUser:state.idUser,username:state.username,location:state.location,arraySales:response.data.recordset}});
        } catch (err) {
            alert("Error opening my sales")
        }
    }

    const actionSubscriptions = async() => {
        try {
            console.log("open actionSubscriptions " + state.idUser)      
            /*const response = await axios.post('http://localhost:3001/checkout/selectSales',{idUser:state.idUser, location:state.location})
            console.log(response.data.recordset)*/
            navigate('/updateSubscription',{state:{idUser:state.idUser,username:state.username,location:state.location}});
        } catch (err) {
            alert("Error opening Subscriptions")
        }
    }

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
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                        <a>User {state.username} {state.location} </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <button type="button" className="btn btn-warning" onClick={actionReview}> Reviews </button>
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <button type="button" className="btn btn-warning" onClick={actionMySales}> My Sales </button>
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <button type="button" className="btn btn-warning" onClick={actionSubscriptions}> Subscriptions </button>
                    </ul>
                    <button type="button" className="btn btn-warning" onClick={action}> Shopping Cart </button>
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
                            <div className="row row-cols-4 row-cols-md-4 g-4">
                                {
                                    arrayCard.map((i) =>{
                                    return(         			 				 
                                        <Card card = {{name:i.whisky, aged:i.aged, whiskyType:i.type, 
                                                       supplier:i.supplier, subscription:i.subs, price:i.price, idUser:state.idUser,
                                                       location:state.location, price:i.price, image:i.image}}/>
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

