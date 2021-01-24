import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'


function TodoList ( { todoData, onDelete, changeTodoItem}) {
    
    const elements = todoData.map((item) => { //раскладывается на новый массив замещая старый с новыми id

        return (
            <li key={item.id} className="list-group-item todo__list-item">
                <TodoListItem item={ item }  /* прокидываю итем для того, чтобы взять lable, id, и состояния done/important для передачи в changeTodoItem*/
                    onDelete = { () => onDelete(item.id) } 
                    changeTodoItem = { changeTodoItem } /* прокидываю функцию в итем */
                />
            </li>
        )
    })

    return (
        <ul className="list-group todo__list ">
            { elements }
        </ul>
        
    )
}

export default TodoList;