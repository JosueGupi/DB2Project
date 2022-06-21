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
  const changeCProduct = () =>{ 
    let path = '/adminCProduct';  
    navigate(path);
  }
  const changeRProduct = () =>{ 
    let path = '/adminRProduct';  
    navigate(path);
  }
  const changeUProduct = () =>{ 
    let path = '/adminUProduct';  
    navigate(path);
  }
  const changeDProduct = () =>{ 
    let path = '/adminDProduct';  
    navigate(path);
  }
  const changeTickets = () =>{ 
    let path = '/tickets';  
    navigate(path);
  }
  

  return (
    <Fragment>
        <header className="Admin-header">
         
            <div style={{ backgroundImage: 'url(require("./Images/adminBGJ.jpg"))' }}>
                <div className='container mx-auto'>
                  <div className='row'>
                    <div className='col'>
                      <button type="button" className="btn btn-warning" onClick={changeSubsRoute}>Change Subs Price</button>
                    </div>
                    <div className='col'>
                      <button type="button" className="btn btn-warning" onClick={changeStoreRoute}>Change Store Location</button>
                    </div>
                    <div className='col'>
                      <button type="button" className="btn btn-warning" onClick={changeSubsShipping}>Change Shipping</button>
                    </div>
                    <div className='col'>
                      <button type="button" className="btn btn-warning" onClick={changeTickets}>Tickets</button>
                    </div>
                  </div>
                  < div className='row'>
                    <div className='col'>
                      <button type="button" className="btn btn-warning" onClick={changeCEmployee}>Create Employee</button>
                    </div>
                    <div className='col'>
                      <button type="button" className="btn btn-warning" onClick={changeREmployee}>Check Employee</button>
                    </div>
                    <div className='col'>
                      <button type="button" className="btn btn-warning" onClick={changeUEmployee}>Update Employee</button>
                    </div>
                    <div className='col'>
                      <button type="button" className="btn btn-warning" onClick={changeDEmployee}>Delete Employee</button>
                    </div>
                  </div>
                  <div className='row'>
                  <div className='col'>
                    <button type="button" className="btn btn-warning" onClick={changeCProduct}>Create Product</button>
                    </div>
                    <div className='col'>
                    <button type="button" className="btn btn-warning" onClick={changeRProduct}>Check Product</button>
                    </div>
                    <div className='col'>
                    <button type="button" className="btn btn-warning" onClick={changeUProduct}>Update Product</button>
                    </div>
                    <div className='col'>
                    <button type="button" className="btn btn-warning" onClick={changeDProduct}>Delete Product</button>
                    </div>
                  </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="..." alt="First slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide"/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
        </header>
    </Fragment>
  )
}