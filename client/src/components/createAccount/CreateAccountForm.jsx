import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';

export function CreateAccountForm(){
    const{register, handleSubmit} = useForm();
    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }

    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3001/users/create_account',data)
            console.log(response.data.recordset) 
        } catch (err) {
            alert("ERROR LOGIN!!!" + err)
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{color:'White'}}>Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name"
                    {...register('name',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label" style={{color:'White'}}>Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Your lastName"
                    {...register('lastName',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{color:'White'}}>Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your email"
                    {...register('email',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label" style={{color:'White'}}>Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Your username"
                    {...register('username',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{color:'White'}}>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Your password"
                    {...register('password',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="subscription" className="form-label" style={{color:'White'}}>Subscription</label>
                    <select type="text" className="form-control" id="subscription" placeholder="Your subscription"
                    {...register('subscription')}>
                        <option select value="Not Applicable">Not Applicable</option>
                        <option value="Tier Short Glass">Tier Short Glass</option>
                        <option value="Tier Gleincairn">Tier Gleincairn</option>
                        <option value="Master Distiller">Tier Master Distiller</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label" style={{color:'White'}}>Country</label>
                    <select type="text" className="form-control" id="country" placeholder="Your country"
                    {...register('country')}>
                        <option select value="usa">United States</option>
                        <option value="scotland">Scotland</option>
                        <option value="ireland">Ireland</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="administrator" className="form-label" style={{color:'White'}}>Administrator</label>
                    <input type="checkbox" name="administrator" placeholder="Your subscription"
                    {...register('administrator')}/> 
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
