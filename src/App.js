import React, {useState} from 'react';
import ToDoList from './components/ToDoList.js';
import AddToDo from './components/AddToDo.js';
import DeleteToDo from './components/DeleteToDo.js';

function App() {

  const [data, setData] = useState([
    {id: 1, title: "Hello World", done: false},
    {id: 2, title: "Hello Nepal", done: false},
    {id: 3, title: "Hello Kathmandu", done: false},
  ]);
      

  return (
    <div className="App">
      <h1>To Do List</h1>

      <ToDoList data = {data} setData={setData}/>
      <AddToDo setData = {setData}/>
      <DeleteToDo/>
    </div>
  );

}

export default App;