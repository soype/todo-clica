import classes from './modal.module.css';

const AddTask = props => {

    const taskSubmitHandler = e => {
        e.preventDefault();
        console.log(e.currentTarget)
    }

    return(
        <form action="" onSubmit={taskSubmitHandler} className={classes['add-task']}> 
            <input id="title" type="text" className={classes.title} />
            <textarea id="description" name="" cols="30" rows="10" className={classes.description}></textarea>
            <button className={classes.submit}>Add task</button>
        </form>
    )
}

export default AddTask;