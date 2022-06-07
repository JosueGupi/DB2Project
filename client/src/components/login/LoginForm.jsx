import React, { Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export function LoginForm(){
    const{register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3001/users/login',data)
            console.log(response.data.recordset)
        } catch (err) {
            alert("ERROR!!!")
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                      <label htmlFor="text" className="form-label">Username</label>
                      <input type="text" className="form-control" id="username" placeholder="Your username"
                      {...register('username',{required:true})}/>
                  </div>
  
                  <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Your password"
                      {...register('password',{required:true})}
                      />
                  </div>
                      <center>
                          <input type='submit' className='btn btn-info' value='Login'/>
                      </center>
  
              </form>
        </Fragment>
  
    )
}