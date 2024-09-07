import { BlenderProvider } from './context/BlenderContext';
import ColorPicker from './components/ColorPicker';
import AnimalPicker from './components/AnimalPicker';
import ResultViewer from './components/ResultViewer';

const App = () => {
  return (
    <BlenderProvider>
      <div>
        <h1>Блендер сущностей</h1>
        <ColorPicker />
        <AnimalPicker />
        <ResultViewer />
      </div>
    </BlenderProvider>
  );
};

export default App;
