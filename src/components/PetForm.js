import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

const PetInput = ({onChange, name, value, type='text'}) => 
    <input onChange={e => onChange({[name]: e.target.value})} placeholder={name} type={type} value={value}/>

const isEmpty = v => v == null || v === '';

const PetForm = ({onSubmit}) => {
    const [formValues, setFormValues] = useState({})
    const onValueChange = useCallback((change) => setFormValues({...formValues, ...change}), [formValues])
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const {name, age, color, species} = formValues;
        if (isEmpty(name) || isEmpty(age) || isEmpty(color) || isEmpty(species)) {
            return window.alert('no input can be empty');
        }
        onSubmit(formValues);
        setFormValues({name: '', age: '', color: '', species: ''});
    }, [formValues, onSubmit]);
    return <form onSubmit={handleSubmit}>
        <p>create pet record</p>
        <PetInput name='name' value={formValues['name']} onChange={onValueChange}/>
        <br/>
        <PetInput name='age' value={formValues['age']} type='number' onChange={onValueChange}/>
        <br/>
        <PetInput name='color' value={formValues['color']} onChange={onValueChange}/>
        <br/>
        <PetInput name='species' value={formValues['species']} onChange={onValueChange}/>
        <br/>
        <button type='submit'>submit</button>
    </form>
};

PetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default PetForm;