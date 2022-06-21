import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useState } from 'react';
import {useLocation} from  "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { ReviewItem } from './ReviewItem';
import { useEffect } from 'react';

export function GetReviewsPage(){

    let navigate = useNavigate(); 

    const {state} = useLocation(); // get params 

    const [arrayCard, setArrayCard] = useState([]) //hook use state

    useEffect(() => { //get reviews from all users
        // GET request using axios inside useEffect React hook
        axios.post('http://localhost:3001/review/selectReviews') //
            .then(response => setArrayCard(response.data.recordset))
    
    // empty dependency array means this effect will only run once 
    }, []); 

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
                            <h1 className ="display-1" style={{color:'Gold'}}>Reviews</h1>
                            <button type="button" class="btn btn-warning" onClick={action}>Back to home</button>
                            <br/><br/><br/>
                            <div className="row row-cols-2 row-cols-md-2 g-4">
                                {
                                    arrayCard.map((i) =>{
                                        console.log(i)
                                    return(
                                        <ReviewItem item = {{id:i.idReview, user:i.nameUser, idWhisky:i.idWhisky, 
                                                    whisky: i.whisky, image:i.image, description:i.description,
                                                    country: i.Country}}/>
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

