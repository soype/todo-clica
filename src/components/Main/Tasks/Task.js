import classes from "../main.module.css";

const Task = (props) => {
  const focusClass = () => {
    if (props.displayId === props.id) {
      return `focus`;
    } else {
      return `task`;
    }
  };

  const taskViewHandler = (e) => {
    props.taskView(props.id);
  };

  const deleteHandler = (e) => {
    props.onDelete(props.id);
  };

  return (
    <div
      className={classes[focusClass()]}
    >
      <div className={classes["task-info"]} id={props.id} onClick={taskViewHandler}>
        <h4 className={classes["task-title"]}>{props.tarea.titulo}</h4>
        <p className={classes["task-date"]}>
          Creado el {props.tarea.fecha_creacion.substring(0, 10)} a las{" "}
          {props.tarea.fecha_creacion.substring(11, 17)}
        </p>
        {/* A usar solo en movil */}
        <p className={classes["task-desc"]}>{props.tarea.descripcion}</p>
      </div>
      <div className={classes["delete-container"]}>
        <span className={classes.delete} onClick={deleteHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Task;
