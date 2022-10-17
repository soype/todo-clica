import classes from './header.module.css';

const AddTask = props => {
    return(
        <div className={classes.button}>
            {props.children}
        </div>
    )
}

export default AddTask;