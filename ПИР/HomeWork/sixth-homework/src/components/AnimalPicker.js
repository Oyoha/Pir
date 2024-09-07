import { useBlender } from '../context/BlenderContext';

const AnimalPicker = () => {
  const { addElement } = useBlender()
  const animals = ['Кошка', 'Собака', 'Птица']

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Выберите животное:</h3>
      {animals.map((animal) => (
        <button key={animal} onClick={() => addElement(animal)}>{animal}</button>
      ))}
    </div>
  )
}

export default AnimalPicker
