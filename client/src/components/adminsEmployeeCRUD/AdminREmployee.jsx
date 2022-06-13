import React, { Fragment, useState } from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export  function AdminREmployee() {
    
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    const [country, setCountry] = useState('');
    const [job, setJob] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [localSalary, setLocalS] = useState('');
    const [dollarSalary, setDollarS] = useState('');
    

    const onSubmit = async (data) => {
        try {
            
            const response = await axios.post('http://localhost:3001/adminEmployees/readEmployee',data)
            console.log(response)
            setCountry(response.data.Country)
            setJob(response.data.JobName)
            setFname(response.data.FirstName)
            setLname(response.data.LastName)
            setLocalS(response.data.LocalSalary)
            setDollarS(response.data.DollarSalary)

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
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Write the Id of the Employee you want to check</label>
                        <input type="text" className="form-control" id="idEmployee" 
                        {...register('idEmployee',{required:true})}
                        />
                    </div>
                    
                    <center>
                        <input type='submit' className='btn btn-warning' value='Check'/>
                    </center>
                </form>
                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}} >Country </label>
                    <input type="text" className="form-control" value={country} disable/>
                </div>

                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}} >Job Type </label>
                    <input type="text" className="form-control" value={job} disable/>
                </div>

    
                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>First Name</label>
                    <input type="text" className="form-control" value={fname} disable/>
                </div>

                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Last Name</label>
                    <input type="text" className="form-control" value={lname} disable/>
                </div>

                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Dollar Salary </label>
                    <input type="text" className="form-control" value={dollarSalary} disable/>
                </div>

                <div className="mb-3">
                    <label  className="form-label" style={{color:'White'}}>Local Salary </label>
                    <input type="text" className="form-control" value={localSalary} disable/>
                </div>
                
                <button type="button" className="btn btn-warning" onClick={routeAdmin}>Go Back</button>
            </header>
        </Fragment>
    )
}