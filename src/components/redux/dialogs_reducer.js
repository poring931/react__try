const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [{
        id: 11,
        name: 'Dima'
    },
        {
            id: 22,
            name: 'Lena'
        },
        {
            id: 33,
            name: 'Ola'
        },
        {
            id: 44,
            name: 'Anrdeya'
        },
        {
            id: 55,
            name: 'Junior'
        },
        {
            id: 66,
            name: 'Lena'
        },
        {
            id: 77,
            name: 'Anrdeya'
        },
    ],
    messagesData: [{
        id: 1,
        message: 'hello'
    },
        {
            id: 2,
            message: 'how are you'
        },
        {
            id: 3,
            message: 'asdfasdasdasd'
        },
        {
            id: 4,
            message: 'thanks im fine'
        },
        {
            id: 5,
            message: 'sit down please'
        },
        {
            id: 6,
            message: 'Lesssadsasdasdna'
        },
        {
            id: 7,
            message: 'Anrasdasdasdasdasdasddeya'
        },
    ],
    newMessageBody: ''

}


const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body
            // state.newMessageBody = action.body;
            return stateCopy;
        }
            
        case SEND_MESSAGE:{
            // let body = state.newMessageBody;
            // state.newMessageBody = '';
            // state.messagesData.push({ id: 113, message: body });
            //  return state;





            let stateCopy = {...state};
        
           
            stateCopy.messagesData = [...state.messagesData];
            let body = state.newMessageBody;
            console.log(body)

            stateCopy.messagesData.push({ id: 113, message: body });
             return stateCopy;
        }
     
        default:
            return state;
    }
  
}
export const sendMessageCreator = ()=> ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body)=> ({
    type:UPDATE_NEW_MESSAGE_BODY,
    body: body,
})
export default dialogsReducer;