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
import {useForm} from 'react-hook-form';

export function CatalogPage(){

    let navigate = useNavigate();

    const {state} = useLocation(); // get params 

    const [arrayCard, setArrayCard] = useState([]) //hook use state
    const [arrayFiltered, setArrayF] = useState([]);
    const {register, handleSubmit} = useForm();
    
    useEffect(() => {(
        async() => { //request catalog according to user
            const response = await axios.post('http://localhost:3001/catalog/get_catalog',{idUser:state.idUser, location:state.location}) 
            console.log(response)
            setArrayCard(response.data.recordset)
            setArrayF(response.data.recordset)
        })()
    
    // empty dependency array means this effect will only run once 
    }, []);
    const onSubmit = async (data) => {//handles the filters of the array
        let sortedData = arrayCard;
        try {
            if (data.name !== ""){
                sortedData = sortedData.filter(item => item.whisky === data.name);
            }
            if (data.max !== ""){
                sortedData = sortedData.filter(item => item.price <= data.max);
            }
            sortedData = sortedData.filter(item => checkListN[checkList.indexOf(item.type)] === true);
            setArrayF(sortedData)
        } catch (err) {
            alert("ERROR FILTER!!!")
        } 
    }
    const action = () => {
        try {
            console.log("open shopping cart of " + state.idUser)      
            navigate('/checkout',{state:{idUser:state.idUser,username:state.username,location:state.location}});
        } catch (err) {
            alert("Error opening to shopping cart")
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
            navigate('/updateSubscription',{state:{idUser:state.idUser,username:state.username,location:state.location}});
        } catch (err) {
            alert("Error opening Subscriptions")
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

    function handleSortAZ(){//sort from a to z the array of items
        const sortedData = [...arrayFiltered].sort((a,b) => {
            return a.whisky > b.whisky ? 1 : -1
        })
        setArrayF(sortedData)
    }
    function handleSortZA(){
        const sortedData = [...arrayFiltered].sort((a,b) => {
            return a.whisky < b.whisky ? 1 : -1
        })
        setArrayF(sortedData)
    }
    const handleChange = (e) => {
        checkListN[checkList.indexOf(e.target.name)] = e.target.checked;
        console.log(checkListN[checkList.indexOf(e.target.name)])
    }
    const listComponents = arrayFiltered.map((i) =>{
        return(
            <Card card = {{name:i.whisky, aged:i.aged, whiskyType:i.type, 
                supplier:i.supplier, subscription:i.subs, price:i.price, idUser:state.idUser,
                location:state.location, price:i.price, image:i.image}}/>
        )})

    const checkList = ["Single Malt", "Blended Scotch", "Irish", "Blended Malt","Bourbon","Tennessee Whisky"];
    const checkListN = [true, true, true, true, true,true];
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
                            <ul class="list-group">
                            {checkList.map((item, index) => (
                                <div key={index} class="list-group-item">
                                    <input name ={item} class="form-check-input me-1" defaultChecked='checked' type="checkbox" value="" aria-label="..." onChange={handleChange}/>
                                    <span>{item}</span>
                                </div>
                            ))}
                            </ul>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                <label  className="form-label" style={{color:'White'}}>Name</label>
                                <input type="text" className="form-control" 
                                    {...register('name',{required:false})}
                                    />
                                </div>
                                        <div className="mb-3">
                                <label  className="form-label" style={{color:'White'}}>Max Price</label>
                                <input type="number" min={1} className="form-control" 
                                    {...register('max',{required:false})}
                                    />
                                </div>
                                <center>
                                    <input type='submit' className='btn btn-warning' value='Filter'/>
                                </center>
                            </form>
                            <button type="button" className="btn btn-warning" style={{marginRight: 20}} onClick={handleSortAZ}>Sort A-Z</button>
                            <button type="button" className="btn btn-warning" style={{marginRight: 20}} onClick={handleSortZA}>Sort Z-A</button>
                            <div className="row row-cols-4 row-cols-md-4 g-4">
                                {listComponents}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment> 
    );
}

