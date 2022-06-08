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
                </Routes>
            </div>
        </Router>
    );
  }