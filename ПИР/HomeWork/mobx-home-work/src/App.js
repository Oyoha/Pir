import ColorPicker from './components/ColorPicker';
import AnimalPicker from './components/AnimalPicker';
import ResultViewer from './components/ResultViewer';

const App = () => {
  return (
    <div>
      <h1>Блендер сущностей c MobX</h1>
      <ColorPicker />
      <AnimalPicker />
      <ResultViewer />
    </div>
  );
};

export default App;
