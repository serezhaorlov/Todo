import React from 'react';

function StatusFilter () {
    return (
        <div className='todo__button-container btn-group'>
            <button type='button' className='todo__button btn btn-info'>All</button>
            <button type='button' className='todo__button btn btn-outline-secondary'>Active</button>
            <button type='button' className='todo__button btn btn-outline-secondary'>Done</button>
        </div>
    )
}

export default StatusFilter;

/* class StatusFilter extends React.Component {

    render() {
        return (
            <div className='todo__button-container btn-group'>
                <button type='button' className='todo__button btn btn-info'>All</button>
                <button type='button' className='todo__button btn btn-outline-secondary'>Active</button>
                <button type='button' className='todo__button btn btn-outline-secondary'>Done</button>
            </div>
        )
    }
} */