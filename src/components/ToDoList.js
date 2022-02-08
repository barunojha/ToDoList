import DeleteToDo from './DeleteToDo.js';

function ToDoList({data, setData}){

    function handleToggleToDo(todo){
      const updatedData = data.map((t) =>
      t.id === todo.id ? {
        ...t, done: !t.done
      }: t);
      setData(updatedData);
    }
    
    if(!data.length){
      return <p>No items left</p>
    }
    
      return ( 
        <ul>
          {data.map((todo) =>
            <li
            onClick={() => handleToggleToDo(todo)}
              style={
                {textDecoration: todo.done ? "line-through" : ""}
              }
              key = {todo.id} 
              >
              {todo.title}
              <DeleteToDo todo = {todo} setData = {setData}/>
            </li>
            
          )}
          
        </ul>
      )
    }

    export default ToDoList;