import './Modaluno.css';
import React from 'react';
import logo from './logo1.jpeg';
import Swal.fire from 'sweetalert2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Modaleliminar(){ 
    return(
        <div className="cajaPrincipal">
            <div className="modal">
              <div>
              <button type="button" className="btn-close" data-bs-dismiss="modal">X</button> 
              </div>

                 <div>
                 <img className="logouno" src={logo} alt="Logo"/>
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
           function Swal.fire({
                    title= '<strong>Esta seguro que deseea eliminar <u>Granja Santa Lucia</u></strong>',
                        icon= 'info',
                          html=
                             +
                              '<a href="//sweetalert2.github.io">links</a> ' +
                              'and other HTML tags',
                                showCloseButton= true,
                                showCancelButton= true,
                                  focusConfirm= false,
                                confirmButtonText=
                                '<i class="fa fa-thumbs-up"></i> Aceptar',
                                confirmButtonAriaLabel= 'Thumbs up, great!',
                                cancelButtonText=
                                    '<i class="fa fa-thumbs-down">Cancelar</i>',
                             cancelButtonAriaLabel= 'Thumbs down'
                        })
        </div>
      
    );
}
export default Modaleliminar;