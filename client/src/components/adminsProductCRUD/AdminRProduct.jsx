import React, { Fragment, useState } from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export  function AdminRProduct() {
    
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    const [aged, setAged] = useState('');
    const [type, setType] = useState('');
    const [supplier, setSupplier] = useState('');
    const [subscription, setSubscription] = useState('');
    const [image, setImage] = useState('');
    
    console.log('image admin')
    console.log(image)
    const onSubmit = async (data) => {
        try {
            
            const response = await axios.post('http://localhost:3001/adminProduct/readProduct',data)
            console.log(response)
            setAged(response.data.recordset[0].aged)
            setType(response.data.recordset[0].Type)
            setSupplier(response.data.recordset[0].Supplier)
            setSubscription(response.data.recordset[0].Subscription)
            setImage("data:image/png;base64," + response.data.recordset[0].image)
            

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
                    <label  className="form-label" style={{color:'White'}}>Write the Name of the Product you want to check</label>
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
                        <input type='submit' className='btn btn-warning' value='Check'/>
                    </center>
                </form>
                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}} >Aged </label>
                    <input type="text" className="form-control" value={aged} disable/>
                </div>

                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}} >Whisky Type </label>
                    <input type="text" className="form-control" value={type} disable/>
                </div>

    
                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Supplier</label>
                    <input type="text" className="form-control" value={supplier} disable/>
                </div>

                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Subscription</label>
                    <input type="text" className="form-control" value={subscription} disable/>
                </div>
                <img src={image}width="300" height="300"></img>                
                <center>
                    <button type="button" className="btn btn-warning" onClick={routeAdmin}>Go Back</button>
                </center>
                </div>
            </header>
        </Fragment>
    )
}