import React from 'react';

function TodoListItem ( { label, onDelete }) {
    const [isDone, setIsDone] = React.useState(false);
    const [isImportant, setIsImportant] = React.useState(false);

    const isCaseDone = () => {
        setIsDone(!isDone);
    }

    const isCaseImportant = () => {
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
            <span className={isDone? done: undone} style={style} onClick={ isCaseDone }>{ label }</span>
            <div className="todo__container">
                <button type="button" className="btn btn-outline-success btn-sm float-right todo__list-item-button" onClick={isCaseImportant}>
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm float-right todo__list-item-button" onClick={onDelete}>
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;


//const items = ['Learn', 'Eat', 'Sleep', 'Repeat'];


/* class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        
    }



    render() {
        const { label, important = false } = this.props;

        const liStyle = { 
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
    
        return (
            <div className="todo__container todo__container_li">
                <li style={liStyle} className="list-group-item todo__list-item" onClick={ this.onLabelClick }>{ label }</li>
                <div className="todo__container">
                    <button type="button" className="btn btn-outline-success btn-sm float-right todo__list-item-button">
                        <i className="fa fa-exclamation"/>
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-sm float-right todo__list-item-button">
                        <i className="fa fa-trash-o"/>
                    </button>
                </div>
            </div>
        ) 
    }
} */