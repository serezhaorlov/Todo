import React from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchInput from '../SearchInput/SearchInput';
import StatusFilter from '../StatusFilter/StatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';


let ID = 1;

function App() {

  const createItem = (label) => {
    return {
      label,
      important: false, 
      done: false, 
      id: ID++
    }
  }

  const todoData = [
    createItem("Me, myself, and i"),
    createItem("Keep calm and code"),
    createItem("Fly bird, fly")
  ]

  const toggleProperty = (arr, id, propName) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};
      console.log(newItem)

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  }

  const [todosData, setTodosData] = React.useState(todoData);

  const [stateDone, setStateDone] = React.useState(false); //управляющий стейт в App
  const [stateImportant, setStateImportant] = React.useState(false);


  const onToggleDone = (id) => {

    setStateDone(!stateDone)

    setTodosData(toggleProperty(todosData, id, 'done')) //на основе данных из todosData возвращаю новый массив с объектами c нужным значением done/important и устанавливаю в стейт
    console.log("done", id)

  }

  const onToggleImportant = (id) => {

    setStateImportant(!stateImportant)

    setTodosData(toggleProperty(todosData, id, 'important'))
    console.log('important', id)

  }

  const deleteTodo = (id) => {
      const index = todosData.findIndex((el)=>{
        return el.id === id;
      }
    )

    const newTodosData = [
      ...todosData.slice(0, index), //0 to index
      ...todosData.slice(index + 1) // index to index+1
    ];

    setTodosData(newTodosData);

  }
  
  const addTodo = (text) => {

    const newTodo = createItem(text)
    console.log(newTodo);
    const newArray = [ ...todosData, newTodo ];

    setTodosData(newArray) //новый массив, чтобы не менять стейт

  }

  const doneCount = todosData.filter((el) => el.done).length;
  
  const todoCount = todosData.length - doneCount;

  return (
    <section className="todo">
        <AppHeader todo={ todoCount } done={ doneCount }/> {/* счетчик дел */}
      <div className="todo__container">
        <SearchInput />
        <StatusFilter />
      </div>
      <TodoList 
        todoData={ todosData } onDelete={ deleteTodo } 
        onToggleImportant={ onToggleImportant } onToggleDone={ onToggleDone }
        stateDone={ stateDone } stateImportant={ stateImportant } /* стейты и функции управления стейтами */
      />
      <ItemAddForm onAdd={ addTodo } />
    </section>
  );
}

export default App;
