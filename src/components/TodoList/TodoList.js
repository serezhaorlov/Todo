import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'


function TodoList ( { todoData, onDelete, onToggleImportant, onToggleDone, stateDone, stateImportant }) {
    
    const elements = todoData.map((item) => {

        const { id, ...itemProps } = item; //destructurisation, bitch

        return (
            <li key={id} className="list-group-item todo__list-item">
                <TodoListItem { ...itemProps } 
                    onDelete = { () => onDelete(id) } 
                    onToggleImportant = { () => onToggleImportant(id) }
                    onToggleDone = { () => onToggleDone(id) }
                    stateDone={ stateDone } stateImportant={ stateImportant }
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