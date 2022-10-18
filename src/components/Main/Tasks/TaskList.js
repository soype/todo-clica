import React from "react";

import Task from "./Task";

import classes from "../main.module.css";

const TaskList = (props) => {
  // Paso el id de la tarea que clickeo para arriba
  const taskViewHandler = (id) => {
    props.onTaskFocus(id);
  };

  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div className={classes["task-list"]}>
      <h2>Mis Tareas</h2>
      {props.tareas.map((tarea, index) => (
        <Task
          taskView={taskViewHandler}
          displayId={props.displayId}
          tarea={tarea}
          onDelete={deleteHandler}
          id={tarea.id}
          key={tarea.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
