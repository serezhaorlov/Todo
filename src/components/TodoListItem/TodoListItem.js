import React from 'react';

function TodoListItem ( { item, onDelete, changeTodoItem,  } ) {
    const {label, done, important, id} = item; //деструктурирую item для наглядности
    
    const isCaseDone = () => {
        changeTodoItem( !done, 'done', id) //прокидываю в App в функцию аргументы для изменения массива карточек
    }

    const isCaseImportant = () => {
        changeTodoItem( !important, 'important', id) //прокидываю в App в функцию аргументы для изменения массива карточек
    }

    const style = { 
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    
    const doned = `todo__list-item todo__list-item_done`
    const undone = `todo__list-item`

    return (
        <div className="todo__container todo__container_li ">
            <span className={ done ? doned : undone } style={style} onClick={ isCaseDone }>{ label }</span>
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