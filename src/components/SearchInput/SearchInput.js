import React from 'react';

function SearchInput ({ setTerm, term }) {

    const searchChange = (e) => {
        setTerm(e.target.value);
    }

    return (
        <input className="form-control todo__input " placeholder="Search" value={ term } onChange={ searchChange }></input>
    )
}

export default SearchInput;