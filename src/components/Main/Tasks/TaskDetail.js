import classes from './tasks.module.css';


const TaskDetail = props => {

    // Las props recibidas son el id de la tarea y el listado de tareas.
    // Filtro el listado de tareas con el id y despliego esa info.

    return(
        <div className={classes['task-detail']}>
            <h3 className={classes['task-detail-title']}>
                {props.tareas[props.displayId].titulo}
            </h3>
            <p className={classes['task-detail-date']}>
                {props.tareas[props.displayId].fecha_creacion}
            </p>
            <p className={classes['task-detail-desc']}>
                {props.tareas[props.displayId].descripcion}
            </p>
        </div>
    )
}

export default TaskDetail;