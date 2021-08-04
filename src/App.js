import './App.css';
import HomeInicio from './pages/HomeInicio';
import Granjas from './pages/Granjas';
import ProduccionLactea from './pages/ProduccionLactea';
import ModificarProduccion from './pages/ModificarProduccion';
import RegistrarProduccion from './pages/RegistrarProduccion';
import Actualizar from './pages/Actualizar';
import Registrate from './pages/Registrate';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/login/Login';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Cards from './components/cardsgranjas/Cards';
import Nav from './components/nav/Nav';

function App(){
  return (

    <div>
       <Router>
         <Nav/>
    
        <Switch>
              <Route path="/login">
                <Login />
              </Route>

              <Route path="/home">
                <Home />
            
              </Route>

              <Route path="/granjas">
                <Granjas />
              </Route>

              <Route path="/produccionlactea">
                <ProduccionLactea />
              </Route> 

              <Route path="/modificarproduccion">
                <ModificarProduccion />
              </Route> 

              <Route path="/registrarproduccion">
                <RegistrarProduccion />
              </Route> 

              <Route path="/actualizar">
                <Actualizar />
              </Route> 

              <Route path="/registrate">
                <Registrate />
              </Route> 

              <Route path="/cards">
                <Cards />
              </Route> 
        </Switch>
        
        <Footer/>
              

      </Router>
    </div>    
  );
}

export default App;
          
            