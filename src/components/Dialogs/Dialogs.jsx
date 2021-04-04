import React from "react";
import Style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props)=>{
    let path = "/dialogs/"+ props.id;

    return (
        <div className={Style.dialogs__item + ' ' + Style.active} >
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props)=>{
    return (
        <div className={Style.message__item}>{props.message}</div>
    )
}



const Dialogs = (props) =>{
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Ola'},
        {id: 4, name: 'Anrdeya'},
        {id: 5, name: 'Junior'},
        {id: 6, name: 'Lena'},
        {id: 7, name: 'Anrdeya'},
    ];
    let messagesData = [
        {id: 1, message: 'hello'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'asdfasdasdasd'},
        {id: 4, message: 'thanks im fine'},
        {id: 5, message: 'sit down please'},
        {id: 6, message: 'Lesssadsasdasdna'},
        {id: 7, message: 'Anrasdasdasdasdasdasddeya'},
    ];

    let dialogsElements = dialogsData.map(dialog =>( <DialogItem name={dialog.name} id={dialog.id}/>));
    let messagesElements = messagesData.map(message =>( <Message message={message.message} id={message.id}/>));


    return (
       <div>
            <div className={Style.dialogs}>
               
                <div className={Style.dialogs__items}>
                   {dialogsElements}
                </div>
                <div className={Style.dialogs__messages}>
                    {messagesElements}
                </div>
            </div>
       </div>
    )
}

export default Dialogs;