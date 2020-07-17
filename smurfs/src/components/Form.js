import React, { useState, useEffect } from 'react';

const initialFormValues = {
    name: '',
    age: 1,
    height: 5
};

const Form = props => {

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChanges = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        
    }

    const formatFormValues = formValues => {
        return {
            ...formValues,
            name: formValues.name.trim(),
            height: `${formValues.height}cm`
        };
    }

    return (
        <form className='Form'>
            <label htmlFor='formName'>Name</label>
            <input
                name='name'
                id='formName'
                type='text'
                value={formValues.name}
                onChange={handleChanges}
                required
            />
            <br />
            <label htmlFor='formAge'>Age</label>
            <input
                name='age'
                id='formAge'
                type='number'
                min='0'
                value={formValues.age}
                onChange={handleChanges}
                required
            />
            <br />
            <label htmlFor='formHeight'>Height</label>
            <input
                name='height'
                id='formHeight'
                type='number'
                min='1'
                value={formValues.height}
                onChange={handleChanges}
                required
            />
            <span>cm</span>
            <br />
            <button>Register</button>

        </form>
    );
};

export default Form;