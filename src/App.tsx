import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Formulario from "./componentes/Formulario";
import Configuracao from "./paginas/Configuracao";

function App() {
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Configuracao />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>;
}

export default App;
