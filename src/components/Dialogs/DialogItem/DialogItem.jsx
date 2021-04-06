import React from "react";
import Style from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props)=>{
    let path = "/dialogs/"+ props.id;

    return (
        <div className={Style.dialogs__item + ' ' + Style.active} >
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;