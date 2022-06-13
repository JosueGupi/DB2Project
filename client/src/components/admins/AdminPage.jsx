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
  const changeCEmployee = () =>{ 
    let path = '/adminCEmployee'; 
    navigate(path);
  }
  const changeREmployee = () =>{ 
    let path = '/adminREmployee'; 
    navigate(path);
  }
  const changeUEmployee = () =>{ 
    let path = '/adminUEmployee'; 
    navigate(path);
  }
  const changeDEmployee = () =>{ 
    let path = '/adminDEmployee'; 
    navigate(path);
  }

  

  return (
    <Fragment>
        <header className="Admin-header">
         
            <div style={{ backgroundImage: 'url(require("./Images/adminBGJ.jpg"))' }}>
            <button type="button" className="btn btn-warning" onClick={changeSubsRoute}>Change Subs Price</button>
            <button type="button" className="btn btn-warning" onClick={changeStoreRoute}>Change Store Location</button>
            <button type="button" className="btn btn-warning" onClick={changeSubsShipping}>Change Shipping</button>
            
            <button type="button" className="btn btn-warning" onClick={changeCEmployee}>Create Employee</button>
            <button type="button" className="btn btn-warning" onClick={changeREmployee}>Check Employee</button>
            <button type="button" className="btn btn-warning" onClick={changeUEmployee}>Update Employee</button>
            <button type="button" className="btn btn-warning" onClick={changeDEmployee}>Delete Employee</button>

            <button type="button" className="btn btn-warning" >Create Product</button>
            <button type="button" className="btn btn-warning" >Check Product</button>
            <button type="button" className="btn btn-warning" >Update Product</button>
            <button type="button" className="btn btn-warning" >Delete Product</button>
            </div>

        </header>
    </Fragment>
  )
}