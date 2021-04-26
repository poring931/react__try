const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            postsData: [{
                    id: 111,
                    message: 'Dima',
                    likeCount: 12
                },
                {
                    id: 222,
                    message: 'its my first app',
                    likeCount: 15
                },
                {
                    id: 333,
                    message: 'Ola'
                },
                {
                    id: 444,
                    message: 'Anrdeya'
                },
                {
                    id: 555,
                    message: 'Junior'
                },
                {
                    id: 666,
                    message: 'Lena'
                },
                {
                    id: 777,
                    message: 'Anrdeya'
                },
            ],
            newPostText: 'testtttt'
        },

        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state chanchged')
    },



    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0,
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },


    dispatch(action){//диспатчем заменяем все экщены
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText ='';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({ id: 113, message: body });
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = ()=> ({ type: ADD_POST })

export const updateNewPostActionCreator = (text)=> ({
    type:UPDATE_NEW_POST_TEXT,
    newText: text,
})

export const sendMessageCreator = ()=> ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body)=> ({
    type:UPDATE_NEW_MESSAGE_BODY,
    body: body,
})


export default store;
window.store = store;