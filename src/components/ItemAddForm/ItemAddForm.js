import React from 'react';

function ItemAddForm ({ onAdd }) {

    const [label, setLabel] = React.useState('')

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(label);
        setLabel('');

    }

    return (
    <form className="todo__container todo__container_add-button" onSubmit={ onSubmit }>
        <input className="todo__input" placeholder="What ToDO?" onChange={ onLabelChange } value={label}></input> {/* controled element now */}
        <button type="submit" className="btn btn-outline-secondary todo__button-add">Add New Task</button>
    </form>
    )
}

export default ItemAddForm;