import nextId from "react-id-generator";
// import styled from "styled-components";
import {useState} from 'react'
import {addList} from '../redux/modules/toDoList'
import { useDispatch } from "react-redux";

function AddList(){
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const AddListHandler = (e)=>{
    if(title === ''||content === '') return;

    dispatch(
      addList({
        id:nextId(),
        title,
        content,
        complete:false,
      })
    )

    setTitle("");
    setContent("");
  }

    return (
        <div >

        <div >
          <label >제목</label>
          <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }} 
          /> 
          <label>내용</label>
          <input 
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
        </div>


        <button onClick={AddListHandler}>추가하기</button> 
                
      </div>
    )
}

export default AddList