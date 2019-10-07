const baseUrl = 'http://localhost:4000';

/**
 * Sends HTTP REST API GET call for reading all pets
 */
export const read = () => fetch(`${baseUrl}/pets`).then(response => response.json());

/**
 * Sends HTTP REST API POST call for creating a pet
 */
export const create = (name, age, color, species) => 
    fetch(`${baseUrl}/pets`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            age: Number(age),
            color,
            species
        })
    })
        .then(response => response.json());

// TODO: implement service calls
export const remove = () => {};
export const update = () => {};

export default {create, read, update, remove};