function DeleteToDo({todo, setData}){

    function handleDeleteTodo(e){
      e.stopPropagation();
      const confirmed = window.confirm("Do you want to delete this note?")
      if (confirmed){
        setData((prevData) => {
          return prevData.filter((t) => t.id !== todo.id)
        })
      }
    }
    
      return(
        <button onClick={handleDeleteTodo} style={{
          color: 'red',
          fontWeight: 'bold',
          marginLeft: 10,
        }}
        >X</button>
      )
    }

    export default DeleteToDo;