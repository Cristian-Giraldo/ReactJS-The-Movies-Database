//Componentes
import Login from "./components/login";
import Listado from "./components/listado";
import Header from "./components/header";
import Footer from "./components/footer";
import Detalle from "./components/detalle";

//Librerias
import {Routes , Route} from 'react-router-dom';
import React from "react";

//Estilos



function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element= {<Login />}/>
          <Route path="listado" element = {<Listado />} />
          <Route path="/detalle" element = {<Detalle />} />
        </Routes>
      </div>
      <Footer />  
      </>
  );
}

export default App;
