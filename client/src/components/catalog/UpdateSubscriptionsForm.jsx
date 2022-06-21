import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import {useLocation} from  "react-router-dom";
import axios from 'axios';

export function UpdateSubscriptionsForm(){

    const{register, handleSubmit} = useForm();
    const {state} = useLocation(); 
    let navigate = useNavigate();

    const routeChange = () =>{ 
        navigate('/catalog',{state:{idUser:state.idUser,username:state.username,location:state.location}});  
    }

    const onSubmit = async(data) => {
        try { //ask the db to update the user's subscription
            const response = await axios.post('http://localhost:3001/catalog/updateSuscription',{idUser:state.idUser,suscription:data.subscription,location:state.location})
            console.log(response) 
            alert("Subscription updated successfully")
            navigate('/catalog',{state:{idUser:state.idUser,username:state.username,location:state.location}});          
        } catch (err) {
            alert("Error updating account")
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label htmlFor="subscription" className="form-label" style={{color:'White'}}>Subscription</label>
                    <select type="text" className="form-control" id="subscription" placeholder="Your subscription"
                    {...register('subscription')}>
                        <option select value="No tier">Not Applicable</option>
                        <option value="Short Glass">Tier Short Glass</option>
                        <option value="Gleincairn">Tier Gleincairn</option>
                        <option value="Master Distiller">Tier Master Distiller</option>
                    </select>
                </div>

                <center>
                    <input type='submit' className='btn btn-warning' value=' Update '/>
                </center>
            </form>
            <center>
                <button type="button" class="btn btn-warning" onClick={routeChange}>Back to home</button>
            </center>  
        </Fragment>
    )

}
