import React, { useState } from 'react';
import 'firebase/auth';
import './Login.css';
import Granja from './granja.jpeg';

function Login(){

    const [login, setLogin]=useState({
        usuario:'',
        contrasena:''
    })

    const handleChange = (e)=>{
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    }

    const usuario="usuario"
    const contrasena="contrasena"

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (login.usuario===usuario && login.contrasena===contrasena){
            window.location.replace("/home")
        }else {alert ("Datos incorrectos")}
    }

    return(
        <div className="login">
            <div className="fondo">

                <div className="inicio">
                    <h1 className="sesion">INICIO DE SESIÓN</h1>
                </div>

                
                    <form onSubmit={handleSubmit} className="isesion">
                        {/* USERNAME */}
                            <label  text="usuario">Usuario</label>
                            <input type="text" placeholder="Usuario" className="botones" value={login.usuario} name="usuario" onChange={handleChange} />
                        
                        {/* PASSWORD */}
                            <label text="password">Contraseña</label>
                            <input type="password" placeholder="Password" className="botones" value={login.contrasena} name="contrasena" onChange={handleChange} />
                                        
                            <button type="submit" className="botones" >Iniciar Sesión</button>
                    </form>   
               
            </div> 
        </div>      
    );
};

export default Login;



{/* 
import './Login.css';
import Granja from './granja.jpeg';

function Login(){
return(
    <div className="login">
        <div className="fondo">
            <div className="inicio">
                <p className="sesion">INICIO DE SESIÓN</p>
            </div>

            <div className="isesion">
                <button className="botones">Usuario</button>
            </div>

            <div className="isesion">
                <button className="botones">Contraseña</button>
            </div>   

            <div className="isesion">
                <button className="botones">Ingresar</button>
            </div>  
        </div> 
    </div>      
);
};
export default Login;
*/}




