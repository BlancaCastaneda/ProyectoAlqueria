import Registrate from "../../pages/Registrate"
import './Registrate.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


 


 <Modal isOpen={modalregistrate} toggle={togglRegistrate} className={className} centered={true}>
 <div class="contenedor">
 <ModalHeader id="header" >Regístarte</ModalHeader>
   <ModalBody>

     <form class="body">
       <div class="columna">
         <label htmlFor="">Nombre de la granja</label>
         <input type="text" placeholder="Nombre granja"/>

         <label htmlFor="">Nombres</label>
         <input type="text" placeholder="Nombres"/>
       </div>
       <div class="columna">
         <label htmlFor="">Apellidos</label>
         <input type="text" placeholder="Apellidos"/>

         <label htmlFor="">Dirección</label>
         <input type="text" placeholder="Dirección"/>
       </div>
       <div class="columna">
         <label htmlFor="">Telefono</label>
         <input type="number" placeholder="Telefono"/>

         <label htmlFor="">Correo electrónico</label>
         <input type="Email" placeholder="Correo electrónico"/>
       </div>

        <label htmlFor="">Departamento</label>
        <input type="text" placeholder="Departamento"/>
        <label htmlFor="">Ciudad</label>
        <input type="text" placeholder="Ciudad"/>
     </form>
   </ModalBody>
 <ModalFooter className="footer">
   <Button id="botonGuardar"  onClick={handleSubmit}>Guardar </Button>
   <Button id="botonCancelar"  onClick={togglRegistrate}>Cancelar</Button>
 </ModalFooter>
 </div>
</Modal>

export default Registrate