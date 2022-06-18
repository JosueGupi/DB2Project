import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';

export function CreateReviewForm({state}){
    const{register, handleSubmit} = useForm();
    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/catalog'; 
        navigate(path,{state:{idUser:state.idUser,username:state.username,location:state.location}});
    }

    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3001/review/createReview',{whisky:data.name,description:data.description,idUser:state.idUser,location:state.location})
            console.log(response) 
            alert("Thank you for the review")         
        } catch (err) {
            alert("Error creating the review")
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{color:'White'}}>Whisky</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name"
                    {...register('name',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label" style={{color:'White'}}>Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Your description"
                    {...register('description',{required:true})}/>
                </div>

                <center>
                    <input type='submit' className='btn btn-warning' value=' Create '/>
                </center>
            </form>
            <center>
                <button type="button" class="btn btn-warning" onClick={routeChange}>Back to home</button>
            </center>  
        </Fragment>
    )

}
