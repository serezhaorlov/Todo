import React from 'react';

function ItemAddForm ({ onAdd }) {
    return(
    <div className="todo__container todo__container_add-button">
        <button type="button" onClick={ () => {onAdd('Hello Me') }} className="btn btn-outline-secondary todo__button-add">Add New Task</button>
    </div>
    )
}

export default ItemAddForm;