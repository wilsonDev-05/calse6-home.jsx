import React from 'react';
import './style.css';
import Home from './components/Home/Home';
/* un promise(promesa) es un objeto que permite respresebtar y seguir el ciclo de vida de una tarea-operacion(funcion)
      Estados posibles: 
      PENDING: (fullfilled - rejected)
      PENDIENTE: (completada - rechazada)
      modelos: 
      sincronico:
      asincronico: 
*/

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Clase 06 - promises, asincronia y map</h1>
      </header>
      <Home />
    </div>
  );
}
