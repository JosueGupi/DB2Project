import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export  function AdminDEmployee() {
    
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    
    

    const onSubmit = async (data) => {
        try {
            
            const response = await axios.post('http://localhost:3001/adminEmployees/deleteEmployee',data)
            alert("Employee delete it correctly!!!")
            

        } catch (err) {
            alert("ERROR!!!")
        } 
    }
    const routeAdmin = () =>{ 
        let path = '/admin'; 
        navigate(path);
    }
    
    
    return (
        <Fragment>
            <header className="Admin-header">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Write the Id of the Employee you want to delete</label>
                        <input type="text" className="form-control" id="idEmployee" 
                        {...register('idEmployee',{required:true})}
                        />
                    </div>
                    
                    <center>
                        <input type='submit' className='btn btn-warning' value='Delete'/>
                    </center>
                </form>
                
                <button type="button" className="btn btn-warning" onClick={routeAdmin}>Go Back</button>
            </header>
        </Fragment>
    )
}