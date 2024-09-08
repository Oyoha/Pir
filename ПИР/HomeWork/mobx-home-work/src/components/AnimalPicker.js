import React from 'react';
import { observer } from 'mobx-react-lite';
import { blenderStore } from '../store/blenderStore';

const AnimalPicker = () => {
    const animals = ['Кошка', 'Собака', 'Птица']

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Выберите животное:</h3>
      {animals.map((animal) => (
        <button key={animal} onClick={() => blenderStore.addElement(animal)}>
          {animal}
        </button>
      ))}
    </div>
  );
};

export default observer(AnimalPicker);
