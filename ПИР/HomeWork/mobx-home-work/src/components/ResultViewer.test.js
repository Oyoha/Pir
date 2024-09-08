import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ResultViewer from './ResultViewer';
import { blenderStore } from '../store/blenderStore';

describe('ResultViewer Component', () => {
  beforeEach(() => {
    blenderStore.resetElements();
  });

  it('должен отображать парные элементы', () => {
    blenderStore.addElement('Красный');
    blenderStore.addElement('Кошка');

    render(<ResultViewer />);

    expect(screen.getByText('Красный + Кошка')).toBeInTheDocument();
  });

  it('должен очистить результат при нажатии на кнопку Очистить', () => {
    blenderStore.addElement('Красный');
    render(<ResultViewer />);

    fireEvent.click(screen.getByText('Очистить'));
    expect(blenderStore.selectedElements).toEqual([]);
  });
});
