import React from "react";
import Style from './../Dialogs.module.css';



const Message = (props)=>{
    return (
        <div className={Style.message__item}>{props.message}</div>
    )
}

export default Message;