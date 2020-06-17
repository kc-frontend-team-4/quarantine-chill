import React from 'react';

function Select(props) {

    // todo: save selected options to state with onChange
    return (
        <div>
            {/* create selects and options html */}
            {/* one array contains objects */}
            {(typeof props.array[0] === 'object') ?
                (
                    <div className="labels">
                        <label htmlFor={props.filter}>{props.filter}</label>
                        <select onChange={() => console.log('todo')} name={props.filter} id={props.filter}>
                            {props.array.map((element, index) => (
                                < option value={element.name} key={index} > {element.name}</option>
                            ))}
                        </select>
                    </div >
                )
                :
                (
                    <div className="labels">
                        <label htmlFor={props.filter}>{props.filter}</label>
                        <select onChange={() => console.log('todo')} name={props.filter} id={props.filter}>
                            {props.array.map((element, index) => (
                                < option value={element} key={index} > {element}</option>
                            ))}
                        </select>
                    </div >
                )
            }
        </div>
    )
}
export default Select;
