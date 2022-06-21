import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';

export function SuggestionForm({state}){

    
    const{register, handleSubmit} = useForm();
  
    const onSubmit = async(data) => {
        try {    
            console.log(data)        
            const response = await axios.post('http://localhost:3001/adminEmployees/createEmployeeRating',{ratingDelivery:data.ratingEmployeeDelivery,
            ratingPreparation:data.ratingEmployeePreparation,user:state.username,commentsDelivery:data.commentsDelivery,commentsPreparation:data.commentsPreparation,saleID:state.idSale})
            console.log(response) 
            alert("Thank you for the suggestions")    
            window.location.reload();       
        } catch (err) {
            alert("Error creating the suggestions")
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label htmlFor="ratingEmployeeDelivery" className="form-label" style={{color:'White'}}>Employee Rating Delivery</label>
                    <select type="int" className="form-control" id="ratingEmployeeDelivery" placeholder="Select employee delivery"
                    {...register('ratingEmployeeDelivery')}>
                        <option select value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="commentsDelivery" className="form-label" style={{color:'White'}}>Employee Comments Delivery </label>
                    <input type="text" className="form-control" id="commentsDelivery" placeholder="Your comments Delivery"
                    {...register('commentsDelivery',{required:true})}/>
                </div>


                <div className="mb-3">
                    <label htmlFor="ratingEmployeePreparation" className="form-label" style={{color:'White'}}>Employee Rating Preparation</label>
                    <select type="int" className="form-control" id="ratingEmployeePreparation" placeholder="Select employee Preparation"
                    {...register('ratingEmployeePreparation')}>
                        <option select value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="commentsPreparation" className="form-label" style={{color:'White'}}>Employee Comments Preparation </label>
                    <input type="text" className="form-control" id="commentsPreparation" placeholder="Your comments Preparation"
                    {...register('commentsPreparation',{required:true})}/>
                </div>

                <center>
                    <input type='submit' className='btn btn-warning' value=' Create '/>
                </center>
            </form>
        </Fragment>
    )

}
