import './Home.css';
//import React from 'react';
//import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function Home(){
    return(
        <div className="login">
            <div className="granjas">
                <button className="btn1">Granjas</button>
            </div>

            <div className="plactea">
                <button className="btn2">Producción Láctea</button>
            </div>
        </div>    
    );
};export default Home;