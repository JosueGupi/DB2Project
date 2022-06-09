import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useLocation} from  "react-router-dom";
import {useNavigate} from "react-router-dom"

export function AdminPage() {
  let navigate = useNavigate();
  const {state} = useLocation();
  const userLogged = 'admin'
  
  const changeStoreRoute = () =>{ 
    let path = '/adminStore'; 
    navigate(path);
  }
  const changeSubsRoute = () =>{ 
    let path = '/adminSubs'; 
    navigate(path);
  }
  const changeSubsShipping = () =>{ 
    let path = '/adminShipping'; 
    navigate(path);
  }

  

  return (
    <Fragment>
        <header className="Admin-header">
         
            <div style={{ backgroundImage: 'url(require("./Images/adminBGJ.jpg"))' }}>
            <button type="button" className="btn btn-warning" onClick={changeSubsRoute}>Change Subs Price</button>
            <button type="button" className="btn btn-warning" onClick={changeStoreRoute}>Change Store Location</button>
            <button type="button" className="btn btn-warning" onClick={changeSubsShipping}>Change Shipping</button>
            </div>

        </header>
    </Fragment>
  )
}