import React from "react";

import Login from "./components/login";
import Listado from "./components/listado";

import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element= {<Login />}/>
      <Route path="listado" element = {<Listado />} />
    </Routes>
  );
}

export default App;
