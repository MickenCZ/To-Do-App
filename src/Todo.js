import "./Todo.css"

function Todo(props) {

  function removeTodo() {
    //Removes the item with the id of this component from localstorage, then updates state.
    let todosArray = JSON.parse(window.localStorage.getItem("todos"))
    for (let i = 0; i < todosArray.length; i++) {
      if (todosArray[i].id === props.id) {
        todosArray.splice(i, 1)
        window.localStorage.setItem("todos", JSON.stringify(todosArray))
        props.setTodos(JSON.parse(window.localStorage.getItem("todos")))
        break
      }
      
    }
  }

  return <div id="todoWrapper">
          <span id="todoText">{props.text}</span>
            <div id="buttons">
              <button id="editTodo">Edit</button>
              <button id="closeTodo" onClick={removeTodo}>&#10005;</button>
          </div>
  </div>
}

export default Todo