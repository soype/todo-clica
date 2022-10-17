import classes from './tasks.module.css';


const Task = props => {

    const focusClass = () =>{
        console.log(props.displayId)
        
        if(props.displayId == props.id){
            return `focus`;
        }else{
            return `task`;
        }
    }

    return (
    <div className={classes[focusClass()]} id={props.id} onClick={props.taskView}>
        <div className={classes["task-info"]}>
            <h4 className={classes['task-title']}>
                {props.tarea.titulo}
            </h4>
            <p className={classes['task-date']}>
                Creado el {props.tarea.fecha_creacion.substring(0,10)} a las {props.tarea.fecha_creacion.substring(11,16)}
                {/* Una forma bastante precaria de recortar 
                la fecha, dependería de que el backend 
                arroje el dato siempre con el mismo largo.
                A los efectos del ejercicio, resuelve. */}
            </p>
        </div>
        <span className={classes.delete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
        </span>
    </div>
    )
}

export default Task;