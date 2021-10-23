import "./Todo.css"
import {useState} from "react"

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

  const [input, handleInput] = useState("")
  const [isEditing, handleEditing] = useState(false)
  //controlled input of the input when you edit and storing editing visibility in state. The button and input to edit only appear when clicked.

  function editTodo() {
    if (input !== "") {
    let lsArr = JSON.parse(window.localStorage.getItem("todos"))
    lsArr.forEach(obj => {
      if (obj.id === props.id) {obj.text = input}
    });
    window.localStorage.setItem("todos", JSON.stringify(lsArr))
    handleInput("")
    handleEditing(false)
    props.setTodos(lsArr)
    }
    /*Stores the current todos in local storage in a variable. It looks for the id that matches the id passed from props and gives that objects text attribute the value of the input that we use for editing. Using this localstorage is then updated, input is reset, editing form visibility is set to none and finally state of the parent is updated to re-render the todo and show the difference. */
  }

  return <div id="todoWrapper">
          <span id="todoText" style={{display: isEditing ? "none" : "block"}}>{props.text}</span>
          <span id="editModal" style={{display: isEditing ? "flex" : "none"}}>
              <input id="editInput" value={input} onChange={e => handleInput(e.target.value)}/>
              <button id="editButton" onClick={editTodo}>ADD</button>
          </span>
            <div id="buttons">
                <button id="editTodo" onClick={() => handleEditing(true)}>Edit</button>
                <button id="closeTodo" onClick={removeTodo}>&#10005;</button>
            </div>
  </div>
}

export default Todo