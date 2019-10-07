import React, {useEffect, useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';

import PetForm from './components/PetForm';
import PetItem from './components/PetItem';

import PetService from './services/pets';

function App() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    PetService.read()
      .then(({data}) => setPets(data))
      .catch(err => {
        console.error(err);
        window.alert('Could not read the pets, something went wrong!');
      })
  }, []);
  const handleSubmit = useCallback(async data => {
    try {
      await PetService.create(data.name, data.age, data.color, data.species);
      setPets([data, ...pets]);
    } catch(err) {
      console.error(err);
      window.alert('Could not create the pet, something went wrong!');
    }
  }, [setPets, pets]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PetForm onSubmit={handleSubmit}/>
      </header>
      <h2>PETS</h2>
      {pets.map(pet => <PetItem key={pet.name} name={pet.name} age={pet.age} color={pet.color} species={pet.species}/>)}
    </div>
  );
}

export default App;
