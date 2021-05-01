import React from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs_reducer.js";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) =>{

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())
    }
    let onNemMessageChange = (body) =>{
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return ( 
     <Dialogs updateNewMessageBody={onNemMessageChange}  sendMessage={onSendMessageClick} dialogsPage={state} />
    )
}

export default DialogsContainer;