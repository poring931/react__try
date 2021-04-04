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
    let dialogsData =[
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Ola'},
        {id: 4, name: 'Anrdeya'},
        {id: 5, name: 'Junior'},
        {id: 6, name: 'Lena'},
        {id: 7, name: 'Anrdeya'},
    ];
    let messagesData =[
        {id: 1, message: 'hello'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'asdfasdasdasd'},
        {id: 4, message: 'thanks im fine'},
        {id: 5, message: 'sit down please'},
        {id: 6, message: 'Lesssadsasdasdna'},
        {id: 7, message: 'Anrasdasdasdasdasdasddeya'},
    ];


    return (
       <div>
            <div className={Style.dialogs}>
               
                <div className={Style.dialogs__items}>
                    <DialogItem name="Dima" id="1"/>
                    <DialogItem name="Lena" id="2"/>
                    <DialogItem name="Ola" id="3"/>
                    <DialogItem name="Anrdeya" id="4"/>
                    <DialogItem name="Junior" id="5"/>
                </div>
                <div className={Style.dialogs__messages}>
                    <Message message="hello"/>
                    <Message message="how are you"/>
                    <Message message="thanks im fine"/>
                    <Message message="sit down please"/>
                </div>
            </div>
       </div>
    )
}

export default Dialogs;