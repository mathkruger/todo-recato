import AddToDo from "../components/add-todo.js";
import ToDoList from "../components/todo-list.js";
import Recato from "../lib/recato.js";

const { div, h1, p } = Recato;

const Home = (router) => {
  return div(
    h1("ToDo List"),
    p("Control your day"),
    AddToDo(router),
    ToDoList(router),
  ).attr("class", "home");
}

export default Home;