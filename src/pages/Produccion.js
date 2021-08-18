import Nav from '../components/nav/Nav';
import Footer from "../components/footer/Footer";
import ProduccionLactea from "../components/produccionLactea/ProduccionLactea";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Produccion(){
    return(
<>
   
    <ProduccionLactea/>
   <ToastContainer/>
</>

    )
};

export default Produccion;