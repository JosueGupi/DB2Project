import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useLocation} from  "react-router-dom";
import {useNavigate} from "react-router-dom"
import {useForm} from 'react-hook-form';
import axios from 'axios';

export function AdminSubs() {
  let navigate = useNavigate();
  const {state} = useLocation();
  const userLogged = 'admin'
  
  const{register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3001/subs/changeSubs',data)
            navigate('/admin')


        } catch (err) {
            alert(err.message)
            console.log(err)
        }
    }
    const routeAdmin = () =>{ 
        let path = '/admin'; 
        navigate(path);
    };

  return (
    <Fragment>
            <header className="Admin-header">
            <div className='container mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        
                        <select className="form-select" aria-label="Default select example" {...register('country',{required:true})}>
                    
                            <option key="1" value="USA">USA</option>
                            <option key="2" value="Scotland">Scotland</option>
                            <option key="3" value="Ireland">Ireland</option>
                            
                        </select>
                    </div>
                    <div className="mb-3">
                        
                    <select className="form-select" aria-label="Default select example" {...register('level',{required:true})}>
                
                        <option key="1" value="Short Glass">Short Glass</option>
                        <option key="2" value="Gleincairn">Gleincairn</option>
                        <option key="3" value="Master Distiller">Master Distiller</option>
                        
                    </select>
                    </div>
                    <div className="mb-3">
                        
                        <input type="number" className="form-control" id="price" 
                        {...register('price',{required:true})}
                        />
                    </div>
                    <center>
                        <input type='submit' className='btn btn-warning' value='Change'/>
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