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

  const [todosData, setTodosData] = React.useState([
    createItem("Me, myself, and i"),
    createItem("Keep calm and code"),
    createItem("Fly bird, fly")

  ]); //

  const [term, setTerm] = React.useState('')
  const [filter, setFilter] = React.useState('active');

  const changeTodoItem = ( propValue, propName, id) => { //id 1
    const index = todosData.findIndex((el) => el.id === id); //нахожу индекс карточки в todosData сравнивая id

    const oldItem = todosData[index]; //выбираю эту карточку в переменную, выбирается карточка с id 1

    const newItem = { //меняю в старом итеме занчение boolen-ключа done/important в зависимости от того что было щелкнуто в TodoListItem и сохраняю в переменную
      ...oldItem,
      [propName]: propValue, 
    };

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

  const searchData = (items, text) => {
    if (text.length === 0){
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
    })
  }

  const filtered = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items;
    }
  }

  const visibleItems = filtered( searchData(todosData, term) , filter)
  const doneCount = todosData.filter((el) => el.done).length;
  const todoCount = todosData.length - doneCount;

  return (
    <section className="todo">
        <AppHeader todo={ todoCount } done={ doneCount }/> {/* счетчик дел */}
      <div className="todo__container">
        <SearchInput setTerm={ setTerm } term={ term }/>
        <StatusFilter filter={ filter } onFilterChange={ setFilter }/>
      </div>
      <TodoList 
        todoData={ visibleItems } onDelete={ deleteTodo } 
        changeTodoItem = {changeTodoItem}
      />
      <ItemAddForm onAdd={ addTodo } />
    </section>
  );
}

export default App;
