import './App.css';
import React from 'react';

// Componentes
//;import { TodoSearch } from './TodoSearch';
import { Header } from './Header/Header'
import { TodoCounter } from './TodoCounter/TodoCounter';
import { SettingsButton } from './CreateTodoButton/SettingsButton';
import TodoList from './Todos/TodoList';
import TodoItem from './Todos/TodoItem';
// Todos
const todos = [
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Tarea de fisica', completed: false},
  {task: 'Ver Stranger Things', completed: false},
  {task: 'Sacar el pollo del freezer', completed: false},
  {task: 'Cortar cebolla', completed: false},
  {task: 'Pagar internet', completed: false},
  {task: 'Cortarme el cabello', completed: false},
  {task: 'Tarea de fisica', completed: false},
  {task: 'Ver Stranger Things', completed: false},
  {task: 'Sacar el pollo del freezer', completed: false},
]
// Function
function App() {
  return (
    <React.Fragment>

      {/*<TodoSearch/>*/}
      <Header>
        <TodoCounter/>
      </Header>
      <div className='Content'>
        
        <TodoList>
          {
            todos.map(todo => (
              <TodoItem key={todo.task} task={todo.task}/>
            ))
          }
          
        </TodoList>
        
      </div>
      <SettingsButton/>

    </React.Fragment>
  );
}
// Exporting
export default App;
