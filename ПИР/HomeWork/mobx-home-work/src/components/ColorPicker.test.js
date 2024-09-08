import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ColorPicker from './ColorPicker';
import { blenderStore } from '../store/blenderStore';

describe('ColorPicker Component', () => {
  it('должен рендерить и добавлять цвет в store по клику', () => {
    render(<ColorPicker />)

    fireEvent.click(screen.getByText('Красный'));
    expect(blenderStore.selectedElements).toContain('Красный');

    fireEvent.click(screen.getByText('Зеленый'));
    expect(blenderStore.selectedElements).toContain('Зеленый');
  });
});
