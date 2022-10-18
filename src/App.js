import React, { useState } from "react";

import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const [tareas, setTareas] = useState([
    {
      titulo: "Sacar a pasear al perro",
      descripcion: "Dar una vuelta a la manzana con el perro.",
      fecha_creacion: "26/10/2022 22:00",
      id: 0,
    },
    {
      titulo: "Lavar los platos",
      descripcion: "Recordar usar esponja y detergente.",
      fecha_creacion: "26/09/2022 10:00",
      id: 1,
    },
    {
      titulo: "Llamar a la empresa de internet.",
      descripcion: "Pedir descuentos y amenazar con dar de baja el servicio.",
      fecha_creacion: "28/04/2022 09:00",
      id: 2,
    },
    {
      titulo: "Comprar alimento de tortuga.",
      descripcion: "Manuelita se esta quedando sin alimento :(",
      fecha_creacion: "22/07/2022 12:00",
      id: 3,
    },
  ]);

  const [hasTareas, setHasTareas] = useState(true);

  // Identificar que ID es el siguente a asignar
  const [nextId, setNextId] = useState(tareas.length);

  // Logica para el ingreso de una nueva tarea. Si no hay tareas, muestra nuevamente la lista.
  const submitHandler = (title, desc) => {
    let fecha = new Date().toLocaleString("es-AR");

    setTareas((prevState) => {
      return [
        ...prevState,
        {
          titulo: title,
          descripcion: desc,
          fecha_creacion: fecha.toString(),
          id: nextId,
        },
      ];
    });
    setNextId(nextId + 1);
    setHasTareas(true);
  };

  // Si quedaba una sola tarea, no muestra más la lista.
  const deleteHandler = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
    if(tareas.length <= 1){
      setHasTareas(false);
    }else{
      setHasTareas(true);
    }
  };

  // Activa o desactiva el modal de ingreso de tareas
  const displayModalHandler = () => {
    if (!modalIsShown) {
      setModalIsShown(true);
    } else {
      setModalIsShown(false);
    }
  };

  return (
    <div className="App">
      {modalIsShown && (
        <Modal
          onShowModal={displayModalHandler}
          onSubmit={submitHandler}
        ></Modal>
      )}
      <Header onShowModal={displayModalHandler}></Header>
      <Main tareas={tareas} hasTareas={hasTareas} onDelete={deleteHandler}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
