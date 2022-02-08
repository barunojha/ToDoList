import React from "react";
import {useRef} from "react";

function AddToDo({setData}) {

  const inputRef = useRef();

  function handleAddToDo(e){
    e.preventDefault();
    const title = e.target.elements.AddToDo.value;
    const todo = {
      id: '4',
      title,
      done: false,
    }

    setData(prevData => {
      return prevData.concat(todo)
    })

    inputRef.current.value = "";
  }

  return(
    <form onSubmit={handleAddToDo}>
      <input ref={inputRef} name = 'AddToDo' placeholder='Add ToDo' />
      <button type = "submit">SUBMIT</button>
    </form>
  )
}

export default AddToDo;