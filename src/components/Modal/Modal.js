import AddTask from './AddTask';

import classes from './modal.module.css';


const Modal = props => {

    // Al ingresar una tarea, cierro el modal
    const submitHandler = (title, desc) => {
        props.onSubmit(title, desc)
        props.onShowModal()
    }

    return (
        <div className={classes.modal}>
            <AddTask onSubmit={submitHandler}></AddTask>
            <div className={classes.backdrop} onClick={props.onShowModal}></div>
        </div>
    )
}

export default Modal;