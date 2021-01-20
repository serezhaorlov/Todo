import React from 'react';

function AppHeader ({todo, done}) {
    return (
        <div className="todo__container todo__container_header">
            <h1 className="todo__title">Todo List</h1>
            <p className="todo__counter">{todo} more to do, {done} done</p>
        </div>
    )
}

export default AppHeader;