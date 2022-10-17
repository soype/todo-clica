import React from 'react';

import AddTask from './AddTask';

import classes from './header.module.css';

const Header = (props) => {
    return (
    <div className={classes.header}>
        <div className={classes["logo-container"]}>
            <h1 className={classes.logo}>To Do App</h1>
        </div>
        <div className={classes["menu-container"]}>
            <AddTask>AGREGAR TAREA</AddTask>
        </div>
    </div>
    )
}

export default Header;