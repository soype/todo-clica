import React, {useState} from 'react';

import TaskList from './Tasks/TaskList';
import TaskDetail from './Tasks/TaskDetail';

import classes from './main.module.css';

const Main = props => {


    // Acá almaceno el id de la tarea que se va a desplegar
    const [displayedTask, setDisplayedTask] = useState(0);

    const tareas = [
        {
            titulo: 'Sacar a pasear al perro',
            descripcion: 'Dar una vuelta a la manzana con el perro.',
            fecha_creacion: '26/10/2022 22:00',
        },
        {
            titulo: 'Lavar los platos',
            descripcion: 'Recordar usar esponja y detergente.',
            fecha_creacion: '26/09/2022 10:00',
        },
        {
            titulo: 'Llamar a la empresa de internet.',
            descripcion: 'Pedir descuentos y amenazar con dar de baja el servicio.',
            fecha_creacion: '28/04/2022 09:00',
        },
        {
            titulo: 'Comprar alimento de tortuga.',
            descripcion: 'Manuelita se esta quedando sin alimento :(',
            fecha_creacion: '22/07/2022 12:00',
        },
    ]

    // Recibe el id desde Task List y cambia el estado de Displayed Task que luego
    // pasa a TaskDetail, donde se va a desplegar el detalle de la tarea seleccionada.
    const displayTaskHandler = id =>{
        setDisplayedTask(id);
    }

    return(
        <div className={classes.main}>
            <div className={classes["tasks-container"]}>
                <TaskList tareas={tareas} displayId={displayedTask} onTaskFocus={displayTaskHandler}></TaskList>
                <div className={classes["task-detail"]}>
                    <TaskDetail displayId={displayedTask} tareas={tareas}></TaskDetail>
                </div>
            </div>
            
        </div>
    )
};

export default Main;