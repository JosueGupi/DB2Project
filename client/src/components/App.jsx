import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { LoginPage } from './login/LoginPage';
import { AdminPage } from './admins/AdminPage';
import {AdminStoresForm} from './admins/AdminStoresForm';
import {AdminSubs} from './admins/AdminSubs';
import {AdminShipping} from './admins/AdminShipping';
import {AdminCEmployee} from './adminsEmployeeCRUD/AdminCEmployee';
import {AdminREmployee} from './adminsEmployeeCRUD/AdminREmployee';
import {AdminUEmployee} from './adminsEmployeeCRUD/AdminUEmployee';
import {AdminDEmployee} from './adminsEmployeeCRUD/AdminDEmployee';

import {CreateAccountPage} from './createAccount/CreateAccountPage';
import {CatalogPage} from './catalog/CatalogPage';
import {CheckoutPage} from './checkout/CheckoutPage';

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
                    <Route exact path = "/adminCEmployee" element = {<AdminCEmployee/>}/>
                    <Route exact path = "/adminREmployee" element = {<AdminREmployee/>}/>
                    <Route exact path = "/adminUEmployee" element = {<AdminUEmployee/>}/>
                    <Route exact path = "/adminDEmployee" element = {<AdminDEmployee/>}/>
                    
                    <Route exact path = "/register" element = {<CreateAccountPage/>}/>
                    <Route exact path = "/catalog" element = {<CatalogPage/>}/>
                    <Route exact path = "/checkout" element = {<CheckoutPage/>}/>

                </Routes>
            </div>
        </Router>
    );
  }