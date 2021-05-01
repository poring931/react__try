const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
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
}

const profileReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            }
            state.postsData.push(newPost)
            state.newPostText ='';
            return state;
           
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
  
}
export const addPostActionCreator = ()=> ({ type: ADD_POST })
export const updateNewPostActionCreator = (text)=> ({
    type:UPDATE_NEW_POST_TEXT,
    newText: text,
})


export default profileReducer;