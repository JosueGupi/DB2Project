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
import {AdminCProduct} from './adminsProductCRUD/AdminCProduct'
import {AdminUProduct} from './adminsProductCRUD/AdminUProduct'
import {AdminRProduct} from './adminsProductCRUD/AdminRProduct'
import {AdminDProduct} from './adminsProductCRUD/AdminDProduct'
import {TicketMenu} from './adminsTicket/TicketMenu'
import {TicketComment} from './adminsTicket/TicketComments'
import {CreateAccountPage} from './createAccount/CreateAccountPage';
import {CatalogPage} from './catalog/CatalogPage';
import {CheckoutPage} from './checkout/CheckoutPage';
import {CreateReviewPage} from './reviews/CreateReviewPage';
import {GetReviewsPage} from './reviews/GetReviewsPage';
import {MySalesPage} from './sales/MySalesPage';
import {SuggestionPage} from './suggestions/SuggestionPage';
import {SuggestionResponse} from './suggestions/SuggestionResponse';


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
                    <Route exact path = "/adminCProduct" element = {<AdminCProduct/>}/>
                    <Route exact path = "/adminRProduct" element = {<AdminRProduct/>}/>
                    <Route exact path = "/adminUProduct" element = {<AdminUProduct/>}/>\
                    <Route exact path = "/adminDProduct" element = {<AdminDProduct/>}/>
                    <Route exact path = "/register" element = {<CreateAccountPage/>}/>
                    <Route exact path = "/catalog" element = {<CatalogPage/>}/>
                    <Route exact path = "/checkout" element = {<CheckoutPage/>}/>
                    <Route exact path = "/tickets" element = {<TicketMenu/>}/>
                    <Route exact path = "/comments" element = {<TicketComment/>}/>
                    <Route exact path = "/createReview" element = {<CreateReviewPage/>}/>
                    <Route exact path = "/getReviews" element = {<GetReviewsPage/>}/>
                    <Route exact path = "/getMySales" element = {<MySalesPage/>}/>
                    <Route exact path = "/getMySuggestions" element = {<SuggestionPage/>}/>
                    <Route exact path = "/getSuggestResponse" element = {<SuggestionResponse/>}/>
                </Routes>
            </div>
        </Router>
    );
  }