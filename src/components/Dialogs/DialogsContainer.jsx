import React from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs_reducer.js";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import { connect } from "react-redux";



// const DialogsContainer = (props) =>{

//     // let state = props.store.getState().dialogsPage;

//     // let onSendMessageClick = () =>{
//     //     props.store.dispatch(sendMessageCreator())
//     // }
//     // let onNemMessageChange = (body) =>{
//     //     props.store.dispatch(updateNewMessageBodyCreator(body))
//     // }

//     return <StoreContext>
//         {
//             store =>{
//                 let state = store.getState().dialogsPage;

//                 let onSendMessageClick = () =>{
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNemMessageChange = (body) =>{
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//               return  <Dialogs updateNewMessageBody={onNemMessageChange}  sendMessage={onSendMessageClick} dialogsPage={state} />
//             }
//         }
       
//      </StoreContext>
    
// }

let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: ()=>{
            dispatch(sendMessageCreator())
        },
        SendMessage: (body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps )(Dialogs)

// export default DialogsContainer;
export default DialogsContainer;