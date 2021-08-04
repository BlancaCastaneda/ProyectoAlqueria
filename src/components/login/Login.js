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