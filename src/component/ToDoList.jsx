import { useDispatch, useSelector } from "react-redux";

import {deleteList ,completeState } from '../redux/modules/toDoList'
function ToDoList(params) {
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.Users.Lists);
    console.log(lists)
    // console.log(dispatch)

    const deleteListHandler =(id)=>{
        dispatch(deleteList(id))
    }
     
    const completeHandler =(id)=>{
        dispatch(completeState(id))
    }

    const listWork= lists.filter(list=>!list.complete)
    const listDone= lists.filter(list=>list.complete)

    return (
        <div>
            <div>
                <h2>Working..π₯</h2>
                <div>
                 {listWork.map(list=>{
                    return (
                        <div>
                            <h3>{list.title}</h3>
                            <p>{list.content}</p>
                            <button onClick={()=>{deleteListHandler(list.id)}}>μ­μ νκΈ°</button>
                            <button onClick={()=>{completeHandler(list.id)}} >{list.complete ? 'μ·¨μ':'μλ£'}</button>
                        </div>
                    )
                 })}   
                </div>
            </div>
            <div>
                <h2>Done..π</h2>
                    <div>
                    {listDone.map(list=>{
                        return (
                            <div>
                                <h3>{list.title}</h3>
                                <p>{list.content}</p>
                                <button onClick={()=>{deleteListHandler(list.id)}}>μ­μ νκΈ°</button>
                                <button onClick={()=>{completeHandler(list.id)}}>{list.complete ? 'μ·¨μ':'μλ£'}</button>
                            </div>
                        )
                    })}   
                </div>
            
            </div>
        </div>
    )
}

export default ToDoList