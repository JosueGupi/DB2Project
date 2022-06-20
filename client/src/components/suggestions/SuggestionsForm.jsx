import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';

export function SuggestionForm({state}){

    const{register, handleSubmit} = useForm();
  
    const onSubmit = async(data) => {
        try {                 
            const response = await axios.post('http://localhost:3001/adminEmployees/createEmployeeRating',{employeeID:data.employeeID,user:state.username,comment:data.comments,ratingEmployee:data.ratingEmployee})
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
                    <label htmlFor="employeeID" className="form-label" style={{color:'White'}}>Employee ID</label>
                    <input type="text" className="form-control" id="employeeID" placeholder="Enter employee ID"
                    {...register('employeeID',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="ratingEmployee" className="form-label" style={{color:'White'}}>Employee Rating</label>
                    <select type="int" className="form-control" id="ratingEmployee" placeholder="Select employee rating"
                    {...register('ratingEmployee')}>
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
                    <label htmlFor="comments" className="form-label" style={{color:'White'}}>Comments</label>
                    <input type="text" className="form-control" id="comments" placeholder="Your comments"
                    {...register('comments',{required:true})}/>
                </div>

                <center>
                    <input type='submit' className='btn btn-warning' value=' Create '/>
                </center>
            </form>
        </Fragment>
    )

}
