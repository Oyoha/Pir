import { blenderStore } from './blenderStore';

describe('BlenderStore', () => {
  beforeEach(() => {
    blenderStore.resetElements()
  });

  it('должен добавлять элементы к выбранным элементам(selectedElements)', () => {
    blenderStore.addElement('Red');
    blenderStore.addElement('Cat');
    expect(blenderStore.selectedElements).toEqual(['Red', 'Cat']);
  });

  it('должен обнулять выбранные элементы', () => {
    blenderStore.addElement('Red');
    blenderStore.resetElements();
    expect(blenderStore.selectedElements).toEqual([]);
  });

  it('должен комбинировать элементы корректно', () => {
    blenderStore.addElement('Red');
    blenderStore.addElement('Cat');
    expect(blenderStore.combinedElements).toBe('Red + Cat');
  });
});
