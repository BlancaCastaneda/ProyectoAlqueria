import './Cards.css';
import React from 'react';
import{ Link } from "react-router-dom";
import finca from './finca.jpg';


function Cards(){
    return (
    <div>
        <section id="footer1">
	        <div className="psiguenos">
                <h1>Granjas</h1>
                 <select id="listadogranjas">
                     <option value="granjaslist">Granja Santa Lucia</option>
                      <option value="granjaslist">Granja Santa Barbara</option>
                     <option selected value="granjalist">Granja Santa Monica</option>
                    <option value="granjaslist">Granja La Colombina</option>
                 </select>
                
           </div>

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
        <section id="card3">
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
        <section id="card4">
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
export default Cards;