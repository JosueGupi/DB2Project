import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export  function AdminUEmployee() {
    
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    
    

    const onSubmit = async (data) => {
        try {
            
            const response = await axios.post('http://localhost:3001/adminEmployees/updateEmployee',data)
            alert("Employee updated it correctly!!!")
            

        } catch (err) {
            alert("ERROR CHANGE!!!")
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
                        <label  className="form-label" style={{color:'White'}}>Write the Id of the Employee you want to update</label>
                        <input type="text" className="form-control" 
                        {...register('idEmployee',{required:true})}
                        />
                    </div>
                    <div className="mb-3"> 
                        <label  className="form-label" style={{color:'White'}}>Country</label>   
                        <select className="form-select" aria-label="Default select example" {...register('country',{required:true})}>
                            <option key="3" value="No change">No change</option>
                            <option key="1" value="USA">USA</option>
                            <option key="2" value="Scotland">Scotland</option>
                            <option key="3" value="Ireland">Ireland</option>
                            
                        </select>
                    </div>
                    <div className="mb-3">    
                        <label  className="form-label" style={{color:'White'}}>Type of Job</label>   

                        <select className="form-select" aria-label="Default select example" {...register('idjob',{required:true})}>
                            <option key="3" value="0">No change</option>
                            <option key="1" value="1">Preparer</option>
                            <option key="2" value="2">Delivery</option>
                            <option key="3" value="4">Seller</option>
                            
                        </select>
                    </div>
                    
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>First Name</label>
                    <input type="text" className="form-control" 
                        {...register('fname',{required:false})}
                        />
                    </div>

                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Last Name</label>
                    <input type="text" className="form-control" 
                        {...register('lname',{required:false})}
                        />
                    </div>
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Dollar Salary (write 0 for no change)</label>
                    <input type="number" className="form-control" 
                        {...register('salary',{required:true})}
                        />
                    </div>
                    
                    <center>
                        <input type='submit' className='btn btn-warning' value='Update'/>
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