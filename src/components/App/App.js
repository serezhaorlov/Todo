import React from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchInput from '../SearchInput/SearchInput';
import StatusFilter from '../StatusFilter/StatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';



function App() {
  let ID = 1;

  const createItem = (label) => {
    return {
      label,
      important: false, 
      done: false, 
      id: ID++
    }
  }
  /*     { label: "Me, myself, and i", important: false, done: false, id: ID++ },
    { label: "Keep calm and code", important: false, done: false, id: ID++ },
    { label: "Fly bird, fly", important: false, done: false, id: ID++ } */

  const [todosData, setTodosData] = React.useState([
    createItem("Me, myself, and i"),
    createItem("Keep calm and code"),
    createItem("Fly bird, fly")

  ]); //


  const changeTodoItem = ( propValue, propName, id) => { //id 1
    const index = todosData.findIndex((el) => el.id === id); //нахожу индекс карточки в todosData сравнивая id

    const oldItem = todosData[index]; //выбираю эту карточку в переменную, выбирается карточка с id 1

    console.log(oldItem.id) //дабл чек  id 1 

    const newItem = { //меняю в старом итеме занчение boolen-ключа done/important в зависимости от того что было щелкнуто в TodoListItem и сохраняю в переменную
      ...oldItem,
      [propName]: propValue, 
    };

    console.log(newItem, newItem.id) //проверяю изменился ли параметр (изменился) id 1

    const newArray = [
      ...todosData.slice(0, index), //вставляю вместо старой карточки со старым значением done/important новую карточку, заменяя карточку по index'у 
      newItem,
      ...todosData.slice(index + 1), // но оно не заменяется) *feelsbadman*
    ]
  
    setTodosData(newArray)
  }

  const deleteTodo = (id) => {
      const index = todosData.findIndex((el)=> el.id === id);

    const newTodosData = [
      ...todosData.slice(0, index), //0 to index
      ...todosData.slice(index + 1) // index to index+1
    ];

    setTodosData(newTodosData);

  }
  
  const addTodo = (text) => {
    
    const newTodo = createItem(text)
    const newArray = [ ...todosData, newTodo ];

    setTodosData(newArray) //

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
        changeTodoItem = {changeTodoItem}
      />
      <ItemAddForm onAdd={ addTodo } />
    </section>
  );
}

export default App;
