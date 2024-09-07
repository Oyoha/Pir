import { makeAutoObservable } from 'mobx';

class BlenderStore {
  selectedElements = [];

  constructor() {
    makeAutoObservable(this);
  }

  addElement(element) {
    this.selectedElements.push(element);
  }

  resetElements() {
    this.selectedElements = [];
  }

  get combinedElements() {
    return this.selectedElements.join(' + ');
  }
}

export const blenderStore = new BlenderStore();
