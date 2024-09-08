import { blenderStore } from './blenderStore';

describe('BlenderStore', () => {
  beforeEach(() => {
    blenderStore.resetElements()
  });

  it('должен добавлять элементы к выбранным элементам(selectedElements)', () => {
    blenderStore.addElement('Красный');
    blenderStore.addElement('Кошка');
    expect(blenderStore.selectedElements).toEqual(['Красный', 'Кошка']);
  });

  it('должен обнулять выбранные элементы', () => {
    blenderStore.addElement('Красный');
    blenderStore.resetElements();
    expect(blenderStore.selectedElements).toEqual([]);
  });

  it('должен комбинировать элементы корректно', () => {
    blenderStore.addElement('Красный');
    blenderStore.addElement('Кошка');
    expect(blenderStore.combinedElements).toBe('Красный + Кошка');
  });
});
