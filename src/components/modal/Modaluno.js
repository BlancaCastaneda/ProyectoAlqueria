import './Modaluno.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Modaluno(){
    return(
        <div>
            <div className="modal" tabindex="-1" id="modaluno">
              <div className="modal-content">
                 <button type="button" className="btn-close" data-bs-dismiss="modal">X</button>
                 <div className="modal-header">
                     espacio logoooo
                    </div>
                    <div className="modal-body">
                      <h3>¿Esta seguro que desea eliminar la granja Santa Lucia?</h3>
                     
                             
                      <Link to="/"><button className="btn btn-primary" type="button"><i class="fas fa-home"></i>Aceptar</button></Link> 
                      <Link to="/contacto"><button className="btn btn-primary" type="button"><i className="fas fa-envelope"></i> Cancelar </button></Link>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    
                   
               </div>
               </div>
            </div>
      
    );
}
export default Modaluno;