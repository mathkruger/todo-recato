const TODOS_KEY = "todos";

export function getTodos() {
  return JSON.parse(localStorage.getItem(TODOS_KEY));
}

export function createTodo(todo) {
  const todos = getTodos();
  
  if (!todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify([todo]));
    return;
  }

  localStorage.setItem(TODOS_KEY, JSON.stringify([...todos, todo]));
}

export function editTodo(index, todo) {
  const todos = getTodos();

  if (!todos) {
    createTodo(todo);
    return;
  }

  todos[index] = todo;
  localStorage.setItem(TODOS_KEY, JSON.stringify([...todos]));
}

export function deleteTodo(index) {
  const todos = getTodos();
  
  if (!todos) {
    return;
  }

  delete todos[index];
  localStorage.setItem(TODOS_KEY, JSON.stringify([...todos.filter(x => x != null)]));
}