import "./TodoList.css"
import Todo from "./Todo"

function TodoList() {
  return <div>
    <section id="todos">
      <Todo />
    </section>


    <footer id="footer">
    <input placeholder="Add item" id="footerInput" />
    <button id="footerButton">ADD ITEM</button>
    </footer>
  </div>
}
/*maybe add onclick animation to button like in bootstrap, also make it responsive */
export default TodoList