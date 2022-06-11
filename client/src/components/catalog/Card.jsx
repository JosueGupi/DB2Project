import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';

export function Card(){
    const{register, handleSubmit} = useForm();
    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }

    const onSubmit = async(data) => {
        try {
            /*const response = await axios.post('http://localhost:3001/users/create_account',data)
            console.log(response.data.recordset[0].name) 
            alert("User created successfully")
            navigate('/')   */         
        } catch (err) {
            alert("Error ")
        }
    }

    return (
        <Fragment>
            
        </Fragment>
    )

}
