import React from 'react';

function StatusFilter ({ filter, onFilterChange }) {

    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    const button = buttons.map(({name, label}) => {
        const isActive = filter === name;
        const buttonClass = isActive ? "btn-info" : "btn-outline-secondary" 
        return (
            <button type='button' className={`todo__button btn ${ buttonClass }`} key={ name } onClick={ () => { onFilterChange(name) }} >{ label }</button>
        )

    })

    return (
        
        <div className='todo__button-container btn-group'>
            {button}
        </div>
    )
}

export default StatusFilter;
