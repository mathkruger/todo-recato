import { deleteTodo, editTodo, getTodos } from "../data/todo.repository.js";
import Recato from "../lib/recato.js";

const { p, element, button } = Recato;
const input = () => element("input");

const ToDoList = (router) => {
  const todos = getTodos();

  const handleChange = (index, todo) => {
    todo.done = !todo.done;
    editTodo(index, todo);

    router.updateAll();
  }

  const handleDelete = (index) => {
    deleteTodo(index);

    router.updateAll();
  }

  const renderTodos = () => {
    if (!todos || todos.length === 0) {
      return [p("No todos registered :(")];
    }

    return [...todos.map((x, index) => {
      let checkbox = input()
      .attr("type", "checkbox")
      .change(() => handleChange(index, x));

      if (x.done) {
        checkbox = checkbox.attr("checked", "");
      }

      return element("li",
        element("label",
          checkbox,
          x.title,
        ),
        button("X").click(() => handleDelete(index))
      );
    })]
  }

  return element("ul", ...renderTodos());
}

export default ToDoList;