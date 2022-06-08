import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useLocation} from  "react-router-dom";
import {useNavigate} from "react-router-dom"
import {useForm} from 'react-hook-form';
import axios from 'axios';

export function AdminShipping() {
  let navigate = useNavigate();
  const {state} = useLocation();
  const userLogged = 'admin'
  
  const{register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3001/shipping/changeShipping',data)
            navigate('/admin')


        } catch (err) {
            alert(err.message)
            console.log(err)
        }
    }

  return (
    <Fragment>
            <header className="Admin-header">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        
                        <select className="form-select" aria-label="Default select example" {...register('country',{required:true})}>
                    
                            <option key="1" value="USA">USA</option>
                            <option key="2" value="Scotland">Scotland</option>
                            <option key="3" value="Ireland">Ireland</option>
                            
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
            </header>
        </Fragment>
  )
}