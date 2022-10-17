import AddTask from './AddTask';
import Backdrop from './Backdrop';

import classes from './modal.module.css';


const Modal = props => {
    return (
        <div className={classes.modal}>
            <AddTask></AddTask>
            <Backdrop></Backdrop>
        </div>
    )
}

export default Modal;