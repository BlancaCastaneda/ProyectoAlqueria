import React, {component, useEffect, useState} from 'react';
import MaterialTable from "material-table";
import logo from '../nav/logoalqueria.svg';
import './ProduccionLactea.css';
import {db} from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import swal from 'sweetalert';

function ProduccionLactea(){

    const[modal,setModal]=useState(false)
    const initialValues={
        nombre: '',
        fechai: '',
        fechaf: '',
        cantidad: '',
        ruta: ''
    }

    const[values,setValues]=useState(initialValues)
    const[data,setData]=useState([])

    const columnas=[
        { title:'Nombre', field:'nombre'},
        { title:'Fecha Inicial', field:'fechai', type:"numeric"},
        { title:'Fecha Final', field:'fechaf', type:"numeric"},
        { title:'Cantidad Lts', field:'cantidad', type:"numeric"},
        { title:'Ruta', field:'ruta', type:"numeric"}
    ];

    const handleChange=(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await db.collection("produccion").doc().set(values)
        .then(response=>{
            alert("Se agregaron los registros, satisfactoriamente")
            setModal(false)
        })
    }

    const getLista=async()=>{
        await db.collection("produccion").onSnapshot(querySnapshot=>{
            const docs=[]
            querySnapshot.forEach(doc=>{
                docs.push({...doc.data(),id:doc.id});//me trae un nuevo objeto
                console.log(docs)
            });
        setData(docs)
        });
    };

    useEffect(()=>{
        getLista()
    },[])

   

{/*
    //Hasta aquí todo esta ok // Voy a realizar la ejecución del BOTÓN EDITAR
    $('#tabaProduccion').on('click', '.btnEditar', function(){
        let name = $(this).closest('tr').attr('name'); //Quiero capturar el id
        let nombre = $(this).closest('tr').find('td:eq(0)').text(); //Quiero capturar el nombre
        let fechai = $(this).closest('tr').find('td:eq(1)').text(); //Quiero capturar la fechai
        let fechaf = $(this).closest('tr').find('td:eq(2)').text(); //Quiero capturar la fechaf
        let cantidad = $(this).closest('tr').find('td:eq(3)').text(); //Quiero capturar la cantidad
        let ruta = $(this).closest('tr').find('td:eq(4)').text(); //Quiero capturar la ruta
        $('#name').val(id);
        $('#nombre').val(nombre); //Ahora los mostramos en el formulario
        $('#fechai').val(fechai);
        $('#fechaf').val(fechaf);
        $('#cantidad').val(cantidad);
        $('#ruta').val(ruta);
        $('#modal').modal('show');
    });
    

    // Voy a realizar la ejecución del BOTÓN ELIMINAR 
    $('#id').on('click', '.btnBorrar', function(){
        swal.fire({
            title: '¿Esta seguro(a) que desea eliminar el producto?', 
            text: "¡Esta operación no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Borrar'
            }).then((result) => {
                if (result.value) {
                    let id = $(this).closest('tr').attr('name'); // capturamos el atributo ID d ela fila
                    db.ref(`produccion/${id}`).remove() // Eliminamos el producto de firebase
                    swal.fire('¡Eliminado!', 'La producción ha sido eliminada.','success')
                }
                })
    }); 
*/}

    return (
        <div className="table-responsive">
            
         <div id="tablaProduccion">
            <div className="agregarProduccion">
                 <button className="agregar" onClick={()=>{setModal(true)}}><i class="fas fa-plus-circle"></i> Agregar Producción</button>
            </div>

            
            <MaterialTable
            
                columns={columnas}
                data={data}
                title={false}
                actions={[
                    
                    {
                      icon:'edit',
                      tooltip:'Editar Producción',
                      iconProps:{style:{color:'#3a9fe3'}}, 
                      onClick:(event, rowData)=>alert('Has presionado editar producción: '+rowData.nombre)
                    },
                    {
                      icon:'delete',
                      tooltip:'Eliminar Producción',
                      iconProps:{style:{color:'#f82933'}},
                      onClick:(event, rowData)=>window.confirm('Estás Seguro que deseas eliminar la producción: '+rowData.nombre+ '?')
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                  header:{
                      actions: 'Acciones'
                  } 
                }}
            />
        </div>

         

         <Modal isOpen={modal} className="modal1">
            <ModalHeader className="cabecera1">Editar Produccion</ModalHeader>
                 <ModalBody className="form-group">
                   <div className="form-group">
                    <form onSubmit={handleSubmit}>
                        <label>Nombre</label>
                        <br/>
                        <input type="text" className="form-control" name="nombre" value={values.nombre} onChange={handleChange} required="required" />
                        <br/>
                        <label>Fecha Inicial</label>
                        <br/>
                        <input type="date" className="form-control" name="fechai" value={values.fechai} onChange={handleChange} />
                        <br/>
                        <label>Fecha Final</label>
                        <br/>
                        <input type="date" className="form-control" name="fechaf" value={values.fechaf} onChange={handleChange} />
                        <br/>
                        <label>Cantidad Lts</label>
                        <br/>
                        <input type="text" className="form-control" name="cantidad" value={values.cantidad} onChange={handleChange} pattern="^\d*$" />
                        <br/>
                        <label>Ruta</label>
                        <br/>
                        <input type="text" className="form-control" name="ruta" value={values.ruta} onChange={handleChange} />

                        <div className="botonesmodal">
                            <button className="btn btn-primary" type="submit">Guardar</button> {" "}
                            <button className="btn btn-danger">Cancelar</button>
                        </div>
                    </form>
                        
                 </div>
                </ModalBody>
             
          
        </Modal>

        
    
        </div>
            
    );

}

export default ProduccionLactea;
