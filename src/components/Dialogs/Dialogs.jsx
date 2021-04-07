import React from "react";
import Style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) =>{


    let dialogsElements = props.dialogsData.map(dialog =>( <DialogItem name={dialog.name} id={dialog.id}/>));
    let messagesElements = props.messagesData.map(message =>( <Message message={message.message} id={message.id}/>));


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