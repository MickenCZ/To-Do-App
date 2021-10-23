import "./TodoList.css"
import Todo from "./Todo"
import {useState} from 'react';
import getId from "./getId.js"

function TodoList() {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")))
  //sets state to the array of todos in local storage. I keep todos in state

  let todoComponents = []
  if (todos != null) {
  todoComponents = todos.map(item => {
    return <Todo text={item.text} id={item.id} key={item.id} setTodos={setTodos}/>
  })}
  //Makes an array of components from the data imported from localStorage, unless its empty

  const [inputValue, setInputValue] = useState("") //controlled input


  function addNewTodo() {
    if (inputValue !== "") {
    const newTodos = [...JSON.parse(window.localStorage.getItem("todos")), {text:inputValue, id:getId(window.localStorage.getItem("todos"))}]
    window.localStorage.setItem("todos", JSON.stringify(newTodos))
    setInputValue("")
    setTodos(newTodos)
  }
    /*Gets data from localstorage, adds new todo and updates localstorage, then updates state so the component re-renders. ID is calculated in another file. The text in the form is reset before re-render for better user experience.*/
  }

  return <div>
    <section id="todos">
    {todoComponents}
    </section>


    <footer id="footer">
    <input placeholder="Add item" id="footerInput" value={inputValue} 
    onChange={(event => setInputValue(event.target.value))} onKeyUp={
      e => {if (e.code === "Enter") {addNewTodo()}}
    }
    />
    <button id="footerButton" onClick={addNewTodo}>ADD ITEM</button>
    </footer>

  </div>
}

export default TodoList