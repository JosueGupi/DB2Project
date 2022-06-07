import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { LoginPage } from './login/LoginPage';
import '../App.css';

  export function App() {

    return(
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path = "/" element = {<LoginPage/>}/>
                </Routes>
            </div>
        </Router>
    );
  }