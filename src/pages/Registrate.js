import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

function Registrate(){
    return(
        
          
    <div className="formulario">
          <div>
            <label htmlFor="username">Nombre de la Granja</label>
            <input type="text" placeholder="granja"/>
        </div>
        <div>
          <label>
            <input type="checkbox" name="terminos" id="terminos"/>
              He leído y autorizo el tratamiento de mis datos personales
          </label>
        </div>
    </div>
  
       
    );
}
export default Registrate;