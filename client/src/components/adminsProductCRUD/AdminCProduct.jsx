import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export  function AdminCProduct() {
    
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    
    
    //send information to the back-end
    const onSubmit = async (data) => {
        try {
            data.file = data.file[0].name 
            const response = await axios.post('http://localhost:3001/adminProduct/createProduct',data)
            console.log(data.file[0].name)
            
            alert("Product added it correctly!!!")
            

        } catch (err) {
            alert("ERROR ADD!!!")
        } 
    }
    //go back to admin page
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
                        <label  className="form-label" style={{color:'White'}}>Country</label>   
                        <select className="form-select" aria-label="Default select example" {...register('country',{required:true})}>
                    
                            <option key="1" value="USA">USA</option>
                            <option key="2" value="Scotland">Scotland</option>
                            <option key="3" value="Ireland">Ireland</option>
                            
                        </select>
                    </div>
                    <div className="mb-3">    
                        <label  className="form-label" style={{color:'White'}}>Store</label>
                        <select className="form-select" aria-label="Default select example" {...register('store',{required:true})}>
                    
                            <option key="1" value="Store A">Store A</option>
                            <option key="2" value="Store B">Store B</option>
                            <option key="3" value="Store C">Store C</option>
                            
                        </select>
                    </div>
                    
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Qty</label>
                    <input type="number" className="form-control" min="0"
                        {...register('qty',{required:true})}
                        />
                    </div>

                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Supplier</label>
                    <input type="text" className="form-control" 
                        {...register('supplier',{required:true})}
                        />
                    </div>
                    <div className="mb-3">  
                        <label  className="form-label" style={{color:'White'}}>Subscription</label>  
                        <select className="form-select" aria-label="Default select example" {...register('idsub',{required:true})}>
                    
                            <option key="1" value="1">No tier</option>
                            <option key="2" value="2">Short Glass</option>
                            <option key="3" value="3">Gleincarn</option>
                            <option key="4" value="4">Master Destiller</option>
                        </select>
                    </div>
                    
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Name</label>
                    <input type="text" className="form-control" 
                        {...register('name',{required:true})}
                        />
                    </div>
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Aged</label>
                    <input type="number" className="form-control" min="0"
                        {...register('aged',{required:true})}
                        />
                    </div>
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Type of Whisky</label>
                    <input type="text" className="form-control" 
                        {...register('type',{required:true})}
                        />
                    </div>
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Price</label>
                    <input type="number" className="form-control" min="1"
                        {...register('price',{required:true})}
                        />
                    </div>
                    <div className="custom-file">
                        <label  className="form-label" style={{color:'White'}}>Image</label>
                        <input type="file" className="custom-file-input" id="validatedCustomFile" {...register('file',{required:true})}/>
                        
                    </div>
                    
                    <center>
                        <input type='submit' className='btn btn-warning' value='Create'/>
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