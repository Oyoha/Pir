import React from 'react';
import { observer } from 'mobx-react-lite';
import { blenderStore } from '../store/blenderStore';

const ResultViewer = () => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Комбинация элементов:</h3>
      {blenderStore.selectedElements.length > 0 ? (
        <p>{blenderStore.combinedElements}</p>
      ) : (
        <p>Нет выбранных элементов</p>
      )}
      <button onClick={() => blenderStore.resetElements()}>Очистить</button>
    </div>
  );
};

export default observer(ResultViewer)
