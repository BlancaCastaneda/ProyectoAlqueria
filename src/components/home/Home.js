import './Home.css';
import Ganadero from './ganadero.jpeg';

function Home(){
    return(
        <section className="home">
            <div className="home1">
                <div className="granja">
                    <button className="granjas1">Granjas</button>
                </div>

                <div className="granja">
                    <button className="granjas1"><a href="produccion">Producción Láctea</a></button>
                </div>
            </div> 
        </section>      
    );
};
export default Home;