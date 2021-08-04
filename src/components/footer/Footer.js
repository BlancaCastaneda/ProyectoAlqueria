import './Footer.css';
import React from 'react';
import{ Link } from "react-router-dom";
import finca from './finca.jpg';


function Footer(){
    return (
    <div>
        <section id="footer1">
	        <div className="psiguenos">
                <p>Síguenos en nuestras redes Corporativas</p>
            </div>

            <div className="redes">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/AlqueriaOficial/" ><img width="45" className="facebook" src={facebook} alt="pagina facebook"/></a>
                        </li>

                        <li>
                            <a href="https://twitter.com/alqueriaoficial" ><img width="45" className="twitter" src={twitter} alt="pagina twitter"/></a> 
                        </li>

                        <li>
                            <a href="https://www.youtube.com/user/AlqueriaColombia" ><img width="45" className="youtube" src={youtube} alt="pagina youtube"/></a>  
                        </li>

                        <li>
                            <a href="https://www.instagram.com/alqueriaoficial/" className="redes"><img width="45" className="instagram" src={instagram} alt="pagina instagram"/></a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/company/alquer-a-colombia/" className="redes"><img width="45" className="linkedin" src={linkedin} alt="pagina linkedin"/></a>
                        </li>
                    </ul> 
            </div>           
        </section>

        <section id="card2">
        <div className="card">
                <img className="finca" src={finca} alt="finca"/>
                <h3>Santa Lucia</h3>
                <h3>Chía</h3>
                <h5><strong>Facundo Cabrales</strong></h5>
                <h6>01800033010</h6>
                <h6><u>Ruta 59</u></h6>
                <button id="btneditar">Editar</button>
                <button id="btneliminar">Eliminar</button>
            </div>
        </section>
        <section id="card5">
        <div className="card">
                <img className="finca" src={finca} alt="finca"/>
                <h3>Santa Lucia</h3>
                <h3>Chía</h3>
                <h5><strong>Facundo Cabrales</strong></h5>
                <h6>01800033010</h6>
                <h6><u>Ruta 59</u></h6>
                <button id="btneditar">Editar</button>
                <button id="btneliminar">Eliminar</button>
            </div>
           
        </section>
        <section id="card6">
        <div className="card">
                <img className="finca" src={finca} alt="finca"/>
                <h3>Santa Lucia</h3>
                <h3>Chía</h3>
                <h5><strong>Facundo Cabrales</strong></h5>
                <h6>01800033010</h6>
                <h6><u>Ruta 59</u></h6>
                <button id="btneditar">Editar</button>
                <button id="btneliminar">Eliminar</button>
            </div>           
        </section>
        <div>
                <button id="nuevagranja">Registrar Nueva Granja</button>
            </div>
    </div>
    );
}
export default Footer;