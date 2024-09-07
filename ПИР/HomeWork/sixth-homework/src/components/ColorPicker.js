import { useBlender } from '../context/BlenderContext'

const ColorPicker = () => {
  const { addElement } = useBlender()
  const colors = ['Красный', 'Зеленый', 'Голубой']

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Выберите цвет:</h3>
      {colors.map((color) => (
        <button key={color} onClick={() => addElement(color)}>{color}</button>
      ))}
    </div>
  )
}

export default ColorPicker
