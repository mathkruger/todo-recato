import { createTodo } from "../data/todo.repository.js";
import Recato from "../lib/recato.js";

const { div, element, button } = Recato;
const input = () => element("input");

const AddToDo = (router) => {
  const newTodo = {
    title: "",
    done: false
  };

  const titleInput = input().attr("placeholder", "ToDo Title").change((event) => {
    newTodo.title = event.target.value;
  });

  const doneInput = element("label",
    input()
      .attr("type", "checkbox")
      .change((event) => {
        newTodo.done = event.target.checked;
      }),
    "Is done?",
  );

  const handleSubmit = () => {
    createTodo(newTodo);
    router.updateAll();
  }

  return div(
    titleInput,
    element("br"),
    doneInput,
    element("br"),
    button("Create").click(handleSubmit)
  );
}

export default AddToDo;