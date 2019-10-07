import React from 'react';
import PropTypes from 'prop-types';
import './PetItem.css';

const PetItem = (props) => {
    return <div className='pet-item'>
        <h3>{props.name}</h3>
        <hr/>
        <ul className='pet-item-content'>
            <li>age: {props.age}</li>
            <li>color: {props.color}</li>
            <li>species: {props.species}</li>
        </ul>
    </div>
};

PetItem.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
}

export default PetItem;