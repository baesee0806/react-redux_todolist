import { useDispatch, useSelector } from "react-redux";

import {deleteList} from '../redux/modules/toDoList'
function ToDoList(params) {
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.Users.Lists);
    console.log(lists)
    // console.log(dispatch)

    const deleteListHandler =(id)=>{
        dispatch(deleteList(id))
    }

    const listWork= lists.filter(list=>!list.complete)
    const listDone= lists.filter(list=>list.complete)

    return (
        <div>
            <div>
                <h2>Working..🔥</h2>
                <div>
                 {listWork.map(list=>{
                    return (
                        <div>
                            <h3>{list.title}</h3>
                            <p>{list.content}</p>
                            <button onClick={()=>{deleteListHandler(list.id)}}>삭제하기</button>
                            <button>{list.complete ? '취소':'완료'}</button>
                        </div>
                    )
                 })}   
                </div>
            </div>
            <div>
                <h2>Done..🎉</h2>
                    <div>
                    {listDone.map(list=>{
                        return (
                            <div>
                                <h3>{list.title}</h3>
                                <p>{list.content}</p>
                                <button onClick={()=>{deleteListHandler(list.id)}}>삭제하기</button>
                                <button>{list.complete ? '취소':'완료'}</button>
                            </div>
                        )
                    })}   
                </div>
            
            </div>
        </div>
    )
}

export default ToDoList