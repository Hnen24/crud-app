import React from 'react';
import './form.css';

const  Form = (props)=> {
    return (
        <form onSubmit={props.AddCourse}>
            <input type="text" value={props.current} onChange={props.UpdateCourse}></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;