import './App.css';
import { RecuperadorDatos } from "./components/recuperadorDatos";
import { Detalles } from "./components/detalles";
import {Routes,Route} from "react-router-dom";
import Menu from './components/Navbar/Navbar';
const App = () => {  
  

  return (
    <div className="App"> 
        <Menu/>
        <Routes>
          <Route path="/" element={<RecuperadorDatos/>}/>
          <Route path="/:id" element={<Detalles/>}/>
        </Routes>
    </div>
  
  );
}
 


export default App;
