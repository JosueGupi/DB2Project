import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemDescription } from './ItemDescription';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export function MySaleItem({item}){

    let navigate = useNavigate(); 
    
    const [arrayDescription, setArrayDescription] = useState([]) //hook use state
    
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/checkout/selectSaleDescription',{idUser:item.idUser, location:item.location, idSale:item.id }) //
            .then(response => setArrayDescription(response.data.recordset))
        
    // empty dependency array means this effect will only run once 
    }, []); 

    const action = () => {
        try {
            /*const response = axios.post('http://localhost:3001/catalog/addShoppingCart',{name:card.name,idUser:card.idUser,location:card.location})
            console.log(response);*/
            navigate('/getMySuggestions',{state:{idUser:item.idUser,username:item.username,location:item.location}});
        } catch (err) {
            alert("Error sending suggestion")
        }
    }

    return (
        <div className="col">
            <div className="card">
                    <div class="card-body">
                        <h5 className="card-title">Sale ID {item.id}</h5>
                        <p className ="card-text"></p>
                        <p className ="card-text">Date: {item.date}</p>
                        <p className ="card-text">User: {item.username}</p>
                        <p className ="card-text">Store {item.idStore} {item.location}</p>
                        {  
                            arrayDescription.map((i) =>{
                                console.log('here description' + i)
                               {/* return(
                                    <ItemDescription item = {{idWhisky:i.idWhisky, whisky: i.whisky, 
                                                              quantity:i.quantity, price:i.price}}/>
                                    ) */} }) 
                        }  
                        <button onClick={action} class="custom-button" >Add Suggestion</button>
                    </div>
            </div>
        </div>
    )
}
