import React from 'react';

function Select(props) {
    return (
        <div>
            <label htmlFor={props.genre}>{props.filter}</label>
            <select name={props.genre} id={props.genre}>
                {props.array.map((element, index) => (
                    <option value={element} key={index}>{element}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;