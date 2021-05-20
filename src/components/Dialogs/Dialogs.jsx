import React from "react";
import Style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs_reducer.js";



const Dialogs = (props) =>{
console.log(props);
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog =>( <DialogItem name={dialog.name} id={dialog.id}/>));
    let messagesElements = state.messagesData.map(message =>( <Message message={message.message} id={message.id}/>));
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage()
    }
    let onNemMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
       <div>
            <div className={Style.dialogs}>
               
                <div className={Style.dialogs__items}>
                   {dialogsElements}
                </div>
                <div className={Style.dialogs__messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div> <textarea value={newMessageBody} onChange={onNemMessageChange} placeholder="Enter ur message"></textarea> </div>
                        <div> <button onClick={onSendMessageClick}>Send</button> </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Dialogs;