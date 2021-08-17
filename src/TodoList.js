import "./TodoList.css"
import Todo from "./Todo"
import {useState} from 'react';

function TodoList() {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")))
  //sets state to the array of todos in local storage
  let todoComponents = todos.map(item => {
    return <Todo text={item.text} id={item.id} key={item.id} />
  })
  //Makes an array of components from the data imported from localStorage

  return <div>
    <section id="todos">
    {todoComponents}
    </section>


    <footer id="footer">
    <input placeholder="Add item" id="footerInput" />
    <button id="footerButton">ADD ITEM</button>
    </footer>

  </div>
}
/*maybe add onclick animation to button like in bootstrap, also make it responsive */
export default TodoList