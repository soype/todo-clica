import React, { useState } from "react";

import TaskList from "./Tasks/TaskList";
import TaskDetail from "./Tasks/TaskDetail";

import classes from "./main.module.css";

const Main = (props) => {
  // Qué tarea se va a destacar a la derecha
  const [tarea, setTarea] = useState([props.tareas[0]]);

  // Recibe el id de la tarea que acaba de ser clickeada para destacar. Altera el useState.
  const displayTaskHandler = (id) => {
    setTarea(props.tareas.filter((tarea) => tarea.id === id));
  };

  // Recibe el id de la tarea seleccionada para eliminar y la pasa arriba
  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div className={classes.main}>
      <div className={classes["tasks-container"]}>
        <TaskList
          tareas={props.tareas}
          displayId={tarea[0].id}
          onDelete={deleteHandler}
          onTaskFocus={displayTaskHandler}
        ></TaskList>
        <TaskDetail tarea={tarea[0]}></TaskDetail>
      </div>
    </div>
  );
};

export default Main;
