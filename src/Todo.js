import "./Todo.css"

function Todo(props) {
  return <div id="todoWrapper">
          <span id="todoText">{props.text}</span>
            <div id="buttons">
              <button id="editTodo">Edit</button>
              <button id="closeTodo">&#10005;</button>
          </div>
  </div>
}

export default Todo