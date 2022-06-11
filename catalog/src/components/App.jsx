import React from 'react'

import '../App.css';
import {CheckoutPage} from './checkout/checkout.component'
import {Catalog} from './shop/catalog.component'
import { LoginPage } from './login/LoginPage';
import { AdminPage } from './admins/AdminPage';
import {AdminStoresForm} from './admins/AdminStoresForm';
import {AdminSubs} from './admins/AdminSubs';
import {AdminShipping} from './admins/AdminShipping';
import {CreateAccountPage} from './createAccount/CreateAccountPage';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import '../App.css';

export function App() {

  return(
      <Router>
          <div className="App">
          <Routes>
            <Route exact path = "/" element = {<LoginPage/>}/>
            <Route exact path = "/admin" element = {<AdminPage/>}/>
            <Route exact path = "/adminStore" element = {<AdminStoresForm/>}/>
            <Route exact path = "/adminSubs" element = {<AdminSubs/>}/>
            <Route exact path = "/adminShipping" element = {<AdminShipping/>}/>
            <Route exact path = "/register" element = {<CreateAccountPage/>}/>
            <Route exact path = "/checkout" element = {<CheckoutPage/>}/>
            <Route exact path = "/catalog" element = {<Catalog/>}/>
          </Routes>
          </div>
      </Router>
  );
}