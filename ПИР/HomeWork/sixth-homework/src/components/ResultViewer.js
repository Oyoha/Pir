import { useBlender } from '../context/BlenderContext'

const ResultViewer = () => {
  const { selectedElements, resetElements } = useBlender()

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Комбинация элементов:</h3>
      {selectedElements.length > 0 ? (
        <p>{selectedElements.join(' + ')}</p>
      ) : (
        <p>Нет выбранных элементов</p>
      )}
      <button onClick={resetElements}>Обновить</button>
    </div>
  )
}

export default ResultViewer
