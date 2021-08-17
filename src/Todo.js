import "./Todo.css"

function Todo() {
  return <div id="todoWrapper">
          <span id="todoText">Finish thcomponent</span>
            <div id="buttons">
              <button id="editTodo">Edit</button>
              <button id="closeTodo">&#10005;</button>
          </div>
  </div>
}

export default Todo