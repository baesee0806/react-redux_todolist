const ADD_LIST = "ADD_LIST"
const DELETE_LIST = "DELETE_LIST"
const COMPLETE_STATE = "COMPLETE_STATE"
export const addList = (payload)=>{
    return{
        type:ADD_LIST,
        payload,
    }
}

export const deleteList = (payload)=>{
    return{
        type:DELETE_LIST,
        payload,
    }
}
export const completeState = (payload) =>{
    return{
        type:COMPLETE_STATE,
        payload,
    }
}



let list_number = 0;
// 초기 상태값
const initialState = {
    Lists:[
        {
            id:list_number++,
            title:'리엑트 공부하기 ',
            content:'리엑트는 너무 어려워',
            complete:false,
        },
        {
            id:list_number++,
            title:'리엑트 공부하기 ',
            content:'리엑트는 너무 어려워',
            complete:false,
        },
    ]
  };
  
  // 리듀서
  const Users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return{
                ...state,
                Lists:[...state.Lists,action.payload]
            }
        case DELETE_LIST:
            return{
                ...state,
                Lists:state.Lists.filter(list=>list.id!== action.payload),
            }
        case COMPLETE_STATE:
            return{
                ...state,
                Lists:state.Lists.map((list)=>{
                    if(list.id === action.payload){
                        return {
                            ...list,
                            complete:!list.complete,
                        }
                    }else {
                        return list
                    }
                })
            }
      default:
        return state;
    }
  };
  
  // 모듈파일에서는 리듀서를 export default 한다.
  export default Users;