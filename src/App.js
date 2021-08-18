import './App.css';
import HomeInicio from './pages/HomeInicio';
import Granjas from './pages/Granjas';
import ProduccionLactea from './pages/ProduccionLactea';
import Registrate from './pages/Registrate';

import Produccion  from './pages/Produccion';
import ModificarProduccion from './pages/ModificarProduccion';
import RegistrarProduccion from './pages/RegistrarProduccion';
import Actualizar from './pages/Actualizar';
import Registrate from './pages/Registrate';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/login/Login';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import registrate from './components/resgistrate/Registrate';
import Cards from './components/cardsgranjas/Cards';
import Nav from './components/nav/Nav';
import Modal from './components/modal/Modaluno';
import firebase from '../firebase/firebase';
import 'bootstrap/dist/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import firebase from './firebase';


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

              <Route path="/produccion">
                <Produccion />
              </Route> 

              <Route path="/modificarproduccion">
                <ModificarProduccion />
              </Route> 

              <Route path="/registrate">
                <Registrate />
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

              <Route path="/modal">
                <Modal />
              </Route> 
        </Switch>
        
        <Footer/>
              

      </Router>

      peticionGet={'>'}(){
        firebase.chilld('granjas').on('value', granja=>{
          if(granja.val()!==null){
            this.setState({data: granja.val()})
          }else{
            this.setState({data:{}})
          }
        })
      }
      componentDidMount(){
        this.peticionGet()

      }


    
    </div>  
} 

export default App;
          
            