import classes from "./header.module.css";

const AddTask = (props) => {
  return (
    <div onClick={props.onClick} className={classes.button}>
      {props.children}
    </div>
  );
};

export default AddTask;
