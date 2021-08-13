import logo from './logoalqueria.svg';
import './Nav.css';
import React from 'react';
import{BrowserRouter as Router,Link} from "react-router-dom";

function Nav(){
    return (
        <div>
            <nav className="navbar">

                <div className="logo">
                    <img src={logo} className="img-fluid"/>
                </div>

                <div className="menu">
                    <ul className="nav" type="none">
                        
                        <li className="item">
                            <Link to="/home"><i class="fas fa-home"></i> Home</Link>
                        </li>

                        <li className="item">
                            <Link to="/granjas"><i class="fas fa-tractor"></i>Granjas</Link>
                        </li>

                        <li className="item">
                            <Link to="/produccion"><i class="fas fa-glass-whiskey"></i>Producción Láctea</Link>
                        </li>
                    </ul>
                </div>

                <div className="boton">
                    <Link to="/login">
                    <button className="cerrarsesion"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</button></Link>
                </div>
            </nav>
        </div>
    );
};
export default Nav;