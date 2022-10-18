import React from "react";

import classes from "../main.module.css";

const TaskDetail = (props) => {
  return (
    <div className={classes["task-detail"]}>
      <h3 className={classes["task-detail-title"]}>{props.tarea.titulo}</h3>
      <p className={classes["task-detail-date"]}>
        Creado el {props.tarea.fecha_creacion.substring(0, 10)} a las{" "}
        {props.tarea.fecha_creacion.substring(11, 17)}
      </p>
      <p className={classes["task-detail-desc"]}>{props.tarea.descripcion}</p>
    </div>
  );
};

export default TaskDetail;
