import React, { Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"

import axios from 'axios';

export function LoginForm(){
    const{register, handleSubmit} = useForm();
    let navigate = useNavigate();

    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3001/users/login',data)
            console.log(response)
            const user = response.data.recordset[0].username;
            const idUser = response.data.recordset[0].idUser;
            const location = response.data.recordset[0].Location;
            //decide where the user will go
            if(response.data.recordset[0].administrator == 1){
                navigate('/admin',{state:{username:user}})
            }else{
                navigate('/catalog',{state:{username:user,idUser:idUser,location:location}})
            }
            

        } catch (err) {
            alert(err.message)
            console.log(err)
        }
    }
    //create new account page
    const routeChange = () =>{ 
        let path = '/register'; 
        navigate(path);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label" style={{color:'White'}}>Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Your username"
                    {...register('username',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{color:'White'}}>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Your password"
                    {...register('password',{required:true})}/>
                </div>
                <center>
                    <input type='submit' className='btn btn-warning' value=' Login '/>
                </center>
            </form>
            <center>
                <button type="button" className="btn btn-warning" onClick={routeChange}>Register</button>
            </center>
              
        </Fragment>
  
    )
}