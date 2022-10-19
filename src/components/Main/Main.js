import React, { useState } from "react";

import TaskList from "./Tasks/TaskList";
import TaskDetail from "./Tasks/TaskDetail";

import classes from "./main.module.css";

const Main = (props) => {
  // Qué tarea se va a destacar a la derecha
  const [tarea, setTarea] = useState([props.tareas[0]]);

  // Utilitario para eliminar fecha de TaskDetail
  const [checkFecha, setCheckFecha] = useState(true);

  // Recibe el id de la tarea que acaba de ser clickeada para destacar. Altera el useState.
  const displayTaskHandler = (id) => {
    setTarea(props.tareas.filter((tarea) => tarea.id === id));
    setCheckFecha(true);
  };

  // Recibe el id de la tarea seleccionada para eliminar y la pasa arriba
  const deleteHandler = (id) => {
    props.onDelete(id);
    if(id === tarea[0].id){
      setTarea([{
        nombre:'',
        descripcion: '',
        fecha_creacion: '',
        id: -1,
      }])  
      setCheckFecha(false);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes["tasks-container"]}>
        {props.hasTareas && <TaskList
          tareas={props.tareas}
          displayId={tarea[0].id}
          onDelete={deleteHandler}
          onTaskFocus={displayTaskHandler}
          hayTareas={props.hayTareas}
        ></TaskList>}
        {props.hasTareas && <TaskDetail checkFecha={checkFecha} tarea={tarea[0]}></TaskDetail>}
        {!props.hasTareas && <h2 className={classes['no-task']}>Seleccioná "Agregar tarea" para comenzar!</h2>}
      </div>
    </div>
  );
};

export default Main;
