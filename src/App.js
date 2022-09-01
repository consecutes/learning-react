import './App.css';
import React from 'react';

// Componentes
//;import { TodoSearch } from './TodoSearch';
import { Header } from './Header/index'
import { TodoCounter } from './TodoCounter/index';
import { CreateTodoButton } from './CreateTodoButton/index';
import TodoList from './Todos/TodoList';
import TodoItem from './Todos/TodoItem';
// Todos
const todos = [
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
]
// Function
function App() {
  return (
    <React.Fragment>

      {/*<TodoSearch/>*/}
      <div className='Content'>
        <Header />
        <TodoList>
          {
            todos.map(todo => (
              <TodoItem key={todo.task} task={todo.task}/>
            ))
          }
        </TodoList>
        <TodoCounter/>
      </div>
      <CreateTodoButton/>

    </React.Fragment>
  );
}
// Exporting
export default App;
