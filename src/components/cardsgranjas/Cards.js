import './Cards.css';
import React from 'react';
import{ Link } from "react-router-dom";
import finca from './finca.jpg';

const granjas = [
    {
        nombre: "La Riviera",
        ubicacion: "Chía",
        propietario: "Juan Delgado",
        telefono: 1234567890,
        ruta: 20,
    },
    {
        nombre: "La Colombina",
        ubicacion: "Ubaté",
        propietario: "Edgar Gordillo",
        telefono: 1983764758,
        ruta: 10,
    },
    {
        nombre: "Santa Mónica",
        ubicacion: "Tunja",
        propietario: "Facundo Cabrales",
        telefono: 1983764758,
        ruta: 11,
    },
    {
        nombre: "Santa Luisa",
        ubicacion: "Fusa",
        propietario: "Juan Acosta",
        telefono: 278390473,
        ruta: 38,
    },
    {
        nombre: "San Fernando",
        ubicacion: "Fusa",
        propietario: "Maria Acosta",
        telefono: 278390473,
        ruta: 38,
    },
    {
        nombre: "El Pedregal",
        ubicacion: "Fusagasuga",
        propietario: "Leonidas Bautista",
        telefono: 1732894032,
        ruta: 25,
    }
]

function Cards(){

    return (
    <div className="contenedorPrincipal">
        <section>
        <div className="tituloGranjas">
                <h1>Granjas</h1>
        </div>
	            <div className="listadoGranjas1">
                 <select className="listadoGranjas">
                     <option value="granjaslist">Granja Santa Lucia</option>
                      <option value="granjaslist">Granja Santa Barbara</option>
                     <option selected value="granjalist">Granja Santa Monica</option>
                    <option value="granjaslist">Granja La Colombina</option>
                 </select>
            </div>
        </section>

        <section className="contenedorGranjas">
            {granjas && granjas.map((granja, index)=>
            <div className="contenedorCard">
            <div key={index} className="card">
                <img className="finca" src={finca} alt="finca"/>
                <h3>{granja.nombre}</h3>
                <h3>{granja.ubicacion}</h3>
                <h5><strong>{granja.propietario}</strong></h5>
                <h6>{granja.telefono}</h6>
                <h6><u>Ruta {granja.ruta}</u></h6>

            <div className="botonesCard">
                <button id="btneditar">Editar</button>
                <button id="btneliminar">Eliminar</button>
            </div>
            </div>
            </div>
            )}
        </section>
        <div className="btnNueva">
            <button className="nuevaGranja">Registrar Nueva Granja</button>
        </div>
    </div>
    );
}
export default Cards;