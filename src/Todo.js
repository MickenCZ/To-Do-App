import "./Todo.css"

  function removeTodo() {
    //change localstorage, then use props.setTodos to change state.
  }

function Todo(props) {
  return <div id="todoWrapper">
          <span id="todoText">{props.text}</span>
            <div id="buttons">
              <button id="editTodo">Edit</button>
              <button id="closeTodo" onClick={removeTodo}>&#10005;</button>
          </div>
  </div>
}

export default Todo