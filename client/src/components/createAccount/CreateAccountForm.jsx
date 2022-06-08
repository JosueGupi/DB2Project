import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';

export function CreateAccountForm(){
    const{register, handleSubmit} = useForm();
    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }

    const onSubmit = async(data) => {
        try {
            
        } catch (err) {
            alert("ERROR LOGIN!!!" + this.state.value)
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{color:'White'}}>Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Your name"
                    {...register('name',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label" style={{color:'White'}}>Last Name</label>
                    <input type="lastName" className="form-control" id="lastName" placeholder="Your lastName"
                    {...register('lastName',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{color:'White'}}>Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your email"
                    {...register('email',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label" style={{color:'White'}}>Username</label>
                    <input type="username" className="form-control" id="username" placeholder="Your username"
                    {...register('username',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{color:'White'}}>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Your password"
                    {...register('password',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="subscription" className="form-label" style={{color:'White'}}>Subscription</label>
                    <select type="subscription" className="form-control" id="subscription" placeholder="Your subscription"
                    {...register('subscription')}>
                        <option select value="na">Not Applicable</option>
                        <option value="short_glass">Tier Short Glass</option>
                        <option value="gleincairn">Tier Gleincairn</option>
                        <option value="master_distiller">Tier Master Distiller</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="administrator" className="form-label" style={{color:'White'}}>Administrator</label>
                    <br/>
                    <input type="checkbox" id="administrator" name="administrator" placeholder="Your administrator"/> 
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

/*
subscription 
administrator
name
lastName
username
password
email
*/
