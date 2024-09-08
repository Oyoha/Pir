import React from 'react';
import { observer } from 'mobx-react-lite';
import { blenderStore } from '../store/blenderStore';

const ColorPicker = () => {
    const colors = ['Красный', 'Зеленый', 'Голубой']

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
     <h3>Выберите цвет:</h3>
      {colors.map((color) => (
        <button key={color} onClick={() => blenderStore.addElement(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default observer(ColorPicker)
