import React from 'react';

function TodoListItem ( { label, onDelete, onToggleImportant, onToggleDone, stateDone, stateImportant }) {
    const [isDone, setIsDone] = React.useState(stateDone); //state из App
    const [isImportant, setIsImportant] = React.useState(stateImportant); //можно ли вообще так задавать начальный стейт стейтом из App? 

    const isCaseDone = () => {
        onToggleDone();
        setIsDone(!isDone);
        
    }

    const isCaseImportant = () => {
        onToggleImportant();
        setIsImportant(!isImportant);

    }

    const style = { 
        color: isImportant ? 'steelblue' : 'black',
        fontWeight: isImportant ? 'bold' : 'normal'
    }
    
    const done = `todo__list-item todo__list-item_done`
    const undone = `todo__list-item`

    return (
        <div className="todo__container todo__container_li ">
            <span className={ isDone? done : undone } style={style} onClick={ isCaseDone }>{ label }</span>
            <div className="todo__container">
                <button type="button" className="btn btn-outline-success btn-sm float-right todo__list-item-button" onClick={ isCaseImportant }>
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm float-right todo__list-item-button" onClick={ onDelete }>
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;


/*     let classNames = 'todo__list-item';
    if (isDone) {
      classNames += ' todo__list-item_done';
    }

    if (isImportant) {
      classNames += ' important';
    } */