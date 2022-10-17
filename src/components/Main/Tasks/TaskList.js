import React, {useState} from 'react';

import Task from './Task';

import classes from '../main.module.css';


const TaskList = props => {

    // Paso el id de la tarea que clickeo para arriba
    const taskViewHandler = (e) =>{
        props.onTaskFocus(e.currentTarget.id);
    }


    return (
        <div className={classes['task-list']}>
            <h2>Mis Tareas</h2>
            {props.tareas.map((tarea, index) => (
                <Task taskView={taskViewHandler} displayId={props.displayId} tarea={tarea} id={index} key={index} />
            ))}
        </div>
    )
}

export default TaskList;