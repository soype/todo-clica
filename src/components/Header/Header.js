import React, {useState} from 'react';

import AddButton from './AddButton';

import classes from './header.module.css';

const Header = (props) => {


    return (
    <div className={classes.header}>
        <div className={classes["logo-container"]}>
            <h1 className={classes.logo}>To Do App</h1>
        </div>
        <div className={classes["menu-container"]}>
            <AddButton onClick={props.onShowModal}>AGREGAR TAREA</AddButton>
        </div>
    </div>
    )
}

export default Header;