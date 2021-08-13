import './Footer.css';
import React from 'react';
import{ Link } from "react-router-dom";
import facebook from './facebook.png';
import twitter from './twitter.png';
import youtube from './youtube.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';

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
                            <a href="https://www.linkedin.com/company/alquer-a-colombia/" blank className="redes"><img width="45" className="linkedin" src={linkedin} alt="pagina linkedin"/></a>
                        </li>
                    </ul> 
            </div>           
        </section>

        <section id="footer2">
            <div className="pderechos">
                <p>Productos Naturales de La Sabana S.A.S   Todos los derechos Reservados</p>
            </div>
        </section>
    </div>
    );
}
export default Footer;