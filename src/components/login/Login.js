import './Login.css';
//import React from 'react';
//import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function Login(){
    return(
        <div className="login">
            <div className="isesion">
                <p className="boton1">Inicio de Sesión</p>
            </div>

            <div className="usuario">
                <button className="boton1">Usuario</button>
            </div>

            <div className="password">
                <button className="boton2">Contraseña</button>
            </div>
        </div>    
    );
};

export default Login;