import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { AdminStoresForm } from './AdminStoresForm';


export function AdminPage() {
  return (
    <Fragment>
        <header className="Admin-header">
         
            <div style={{ backgroundImage: 'url(require("./Images/adminBGJ.jpg"))' }}>
                
              <div className='container-fluid'>
                <div className='form-div'>
                  <h1 className ="display-1" style={{color:'Gold',textAlign:'center'}}>Username</h1>
                  <div className="row" >
                  <div className="col"style={{textAlign:'center',color:'white',opacity:0.85,backgroundColor:'gray', borderRadius: '50px 50px 50px 50px',padding:'2%', margin:'2%'}}>
                    <p className='h1'>Set Store Location</p>
                    <AdminStoresForm />
                  </div>
                  <div className="col" style={{textAlign:'center',color:'white',opacity:0.85,backgroundColor:'gray', borderRadius: '50px 50px 50px 50px',padding:'2%', margin:'2%'}}>
                    SECOND
                  </div>
                  <div className="col" style={{textAlign:'center',color:'white',opacity:0.85,backgroundColor:'gray', borderRadius: '50px 50px 50px 50px',padding:'2%', margin:'2%'}}>
                    THIRD
                  </div>

                  </div>
                  <br/>
                  
                </div>
              </div>
            </div>

        </header>
    </Fragment>
  )
}