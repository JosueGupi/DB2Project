import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export  function AdminDProduct() {
    
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    
    

    const onSubmit = async (data) => {
        try {
            
            const response = await axios.post('http://localhost:3001/adminProduct/deleteProduct',data)
            alert("Product delete it correctly!!!")
            

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
            <div className='container mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Write the Name of the Product you want to delete</label>
                        <input type="text" className="form-control" id="idEmployee" 
                        {...register('pname',{required:true})}
                        />
                    </div>
                    <div className="mb-3"> 
                        <label  className="form-label" style={{color:'White'}}>Country</label>   
                        <select className="form-select" aria-label="Default select example" {...register('country',{required:true})}>
                    
                            <option key="1" value="USA">USA</option>
                            <option key="2" value="Scotland">Scotland</option>
                            <option key="3" value="Ireland">Ireland</option>
                            
                        </select>
                    </div>
                    
                    <center>
                        <input type='submit' className='btn btn-warning' value='Delete'/>
                    </center>
                </form>
                
                <center>
                    <button type="button" className="btn btn-warning" onClick={routeAdmin}>Go Back</button>
                </center>
                </div>
            </header>
        </Fragment>
    )
}