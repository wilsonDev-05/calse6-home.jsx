import React from 'react';
/* mostrar mis productos mediante el componente Home: 
ejemplo: simulacion de una consulta de fomra sincrona a x archivos*/
import './home';
import { useState, useEffect } from 'react';
export default function Home() {
  /* const alumno1 = { nombre: 'wilson', apellido: 'saavedra', edad: 21 };
  const alumno2 = { nombre: 'juan', apellido: 'matinez', edad: 20 };
  const alumno3 = { nombre: 'pepe', apellido: 'rodriguez', edad: 13 };

  const alumnos = [alumno1, alumno2, alumno3];

  // consulta de alumnos: funcion que retoran una promesa
   const consultaAlumnos = (permiso) => {
    return new Promise((res, rej) => {
      if (permiso) {
        res(alumnos);  se cumple la promesa y retorna los alumnos 
      }
      rej('no cuenta con los permisos suficientes');
    });
  };
  consultaAlumnos(true).then((resultado) => console.log(resultado));
  consultaAlumnos(true).catch((error) =>
    console.error(error)
  );  catch: maneja errores */

  const consultaDBB = () => {
    fetch('./json/productos.json')
      .then((promise) => promise.json())
      .then((productos) => {
        const cardProd = productos.map((prod) => (
          <div className="card">
            <img src={`./img${prod.img}`} />
            <div className="card__flex">
              <h5>{`${prod.nombre}`}</h5>
              <p>marca: {`${prod.marca}`}</p>
              <p>precio: {`${prod.precio}`}</p>
              <p>modelo: {`${prod.modelo}`}</p>
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div>
        ));
        console.log(cardProd); // obejtos productos en array
        setProductos(cardProd);
      });
  };

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultaDBB();
  }, []);

  return (
    <>
      <main className="home">{productos}</main>
    </>
  );
}

// 01.11,31
