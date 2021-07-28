import logo from './logoalqueria.svg';
import './Nav.css';
import React from 'react';
import{BrowserRouter as Router,Link} from "react-router-dom";

function Nav(){
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} className="img-fluid"/>
                </div>

                <div>
                    <ul type="none" className="menu">
                        <li className="item">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="item">
                            <Link to="/granjas">Granjas</Link>
                        </li>

                        <li className="item">
                            <Link to="/produccionlactea">Producción Láctea</Link>
                        </li>
                    </ul>
                </div>

                <div className="boton">
                    <button className="cerrarsesion"><i class="fas fa-sign-out-alt"></i>Cerrar Sesión</button>
                </div>
            </nav>
        </div>
    );
};
export default Nav;