import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'


function TodoList ( { todoData, onDelete }) {
    
    const elements = todoData.map((item) => {

        const { id, ...itemProps } = item; //destructurisation, bitch

        return (
            <li key={id} className="list-group-item todo__list-item">
                <TodoListItem {...itemProps } onDelete={() => onDelete(id)} />
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