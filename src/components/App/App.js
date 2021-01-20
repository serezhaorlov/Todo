import React from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchInput from '../SearchInput/SearchInput';
import StatusFilter from '../StatusFilter/StatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';

const todoData = [
  {label: "Me, myself, and i", important: false, id: 1 },
  {label: "Keep calm and code", important: false, id: 2 },
  {label: "Fly bird, fly", important: true, id:3 },
];

let maxID = 100;

function App() {

  const [todosData, setTodosData] = React.useState(todoData)

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
    //gen id 
    const newTodo = {
      label: text,
      important: false,
      id: maxID++
    }

    const newArray = [ ...todosData, newTodo ];

    setTodosData(newArray)
    //add item
  }
  console.log(todosData)
  return (
    <section className="todo">
        <AppHeader todo={3} done={1}/>
      <div className="todo__container">
        <SearchInput />
        <StatusFilter />
      </div>
      <TodoList todoData={todosData} onDelete={deleteTodo} />
      <ItemAddForm onAdd={addTodo}/>
    </section>
  );
}

export default App;
