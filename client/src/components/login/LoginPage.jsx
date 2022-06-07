import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { LoginForm } from './LoginForm';
import aveja from '../../Images/abeja.jpg'

export function LoginPage() {
  return (
    <Fragment>
        <header className="App-header">
            
            <div style={{ backgroundImage: 'url(require("./Images/abeja.jpg"))' }}>
                <div className='container mx-auto'>
                    <div className='form-div'>
                        <h1 className ="display-1">Inicio de Sesión</h1>
                        
                        <br/>
                        <LoginForm />
                    </div>
                </div>
            </div>

        </header>
    </Fragment>
  )
}