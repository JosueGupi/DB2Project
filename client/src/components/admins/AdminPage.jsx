import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"



export function AdminPage() {
  return (
    <Fragment>
        <header className="Admin-header">
            
            <div style={{ backgroundImage: 'url(require("./Images/adminBGJ.jpg"))' }}>
                <div className='container mx-auto'>
                    <div className='form-div'>
                        
                        <p class="h6" style={{ height: '180px', color: 'Cyan' }}>AdminName</p>
                        
                        
                        <p className ="h1" style={{color:'Dodgerblue', fontFamily: 'American Typewriter',height:'1800px'}}>Admin</p>
                        
                        <br/>
                        
                    </div>
                </div>
            </div>

        </header>
    </Fragment>
  )
}