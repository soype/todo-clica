import React, {useState} from 'react';

import classes from './modal.module.css';

const AddTask = props => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const taskSubmitHandler = e => {
        e.preventDefault();
        props.onSubmit(title, desc);
        setTitle('');
        setDesc('');
    }
    const titleHandler = e => {
        setTitle(e.target.value)
    }
    const descHandler = e => {
        setDesc(e.target.value)
    }

    return(
        <form action="" onSubmit={taskSubmitHandler} className={classes['add-task']}> 
            <input id="title" type="text" className={classes.title} onChange={titleHandler} value={title} required='required' placeholder="Nombre" />
            <textarea id="description" name="" cols="30" rows="10" className={classes.description} onChange={descHandler} value={desc} placeholder="Descripcion"></textarea>
            <button className={classes.submit}>Add task</button>
        </form>
    )
}

export default AddTask;