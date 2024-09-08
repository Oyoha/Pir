import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AnimalPicker from './AnimalPicker';
import { blenderStore } from '../store/blenderStore';

describe('AnimalPicker Component', () => {
  it('должен рендерить и добавлять животное в store по клику', () => {
     render(<AnimalPicker />)

    fireEvent.click(screen.getByText('Кошка'));
    expect(blenderStore.selectedElements).toContain('Кошка');

    fireEvent.click(screen.getByText('Собака'));
    expect(blenderStore.selectedElements).toContain('Собака');
  });
});
