import React from "react";
import "./App.css";
import CambiarNombre from "./components/CambiarNombre";
import MostrarNombre from "./components/MostrarNombre";
import MostrarNumero from "./components/MostrarNumero";
import IncrementarNumero from "./components/IncrementarNumero";
import DecrementarNumero from "./components/DecrementarNumero";

function App() {
  return (
    <div>
      <MostrarNombre />
      <CambiarNombre />
      <MostrarNumero />
    </div>
  );
}

export default App;
