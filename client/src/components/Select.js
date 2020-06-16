import React from 'react';

function Select(props) {
    function onChange(event) {
        console.log(props.filter)
        props.selectedOptions[props.filter] = event.target.value
        console.log(props.selectedOptions)
    }

    return (
        <div>
            {/* one array contains objects */}
            {(typeof props.array[0] === 'object') ?
                (
                    <div>
                        <label htmlFor={props.filter}>{props.filter}</label>
                        <select onChange={(event) => onChange(event)} name={props.filter} id={props.filter}>
                            {props.array.map((element, index) => (
                                < option value={element.name} key={index} > {element.name}</option>
                            ))}
                        </select>
                    </div >
                )
                :
                (
                    <div>
                        <label htmlFor={props.filter}>{props.filter}</label>
                        <select onChange={(event) => onChange(event)} name={props.filter} id={props.filter}>
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
