import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


export function Response({Comment}){ //admin response
    return ( 
        
        <div className="col">
            <div className="container">
                <div className="container">
                    <label style={{color: 'white'}}>{Comment.Username}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue={Comment.Commentary} disabled></textarea>
                </div>
            </div>
        </div>
    )
}
