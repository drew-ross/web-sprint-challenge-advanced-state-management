import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/formActions';

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
        e.preventDefault();
        props.postSmurf(formatFormValues(formValues));
    };

    const formatFormValues = values => {
        return {
            ...values,
            name: values.name.trim(),
            height: `${values.height}cm`
        };
    };

    return (
        <form className='Form' onSubmit={handleSubmit}>
            <div className='inputs'>
                <label htmlFor='formName'>Name
                    <input
                        name='name'
                        id='formName'
                        type='text'
                        value={formValues.name}
                        onChange={handleChanges}
                        required
                    />
                </label>
                <br />
                <label htmlFor='formAge'>Age
                    <input
                        name='age'
                        id='formAge'
                        type='number'
                        min='0'
                        value={formValues.age}
                        onChange={handleChanges}
                        required
                    />
                </label>
                <br />
                <label htmlFor='formHeight'>Height (cm)
                    <input
                        name='height'
                        id='formHeight'
                        type='number'
                        min='1'
                        value={formValues.height}
                        onChange={handleChanges}
                        required
                    />
                </label>
            </div>
            <br />
            <button type='submit'>Register</button>

        </form>
    );
};

export default connect(null, { postSmurf })(Form);