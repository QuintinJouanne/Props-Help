import './App.css';
import Cube from './Cube';

function App() {
  return (
    <div className="containerApp">
      <Cube name="Cube 1" color={'blue'} width={'150px'} height={'150px'} />
      <Cube name="Cube 2" width={'150px'} height={'150px'} rounder={true} />
      <Cube name="Cube 3" color={'green'} width={'100px'} height={'100px'} />
      <Cube
        name="Cube 4"
        color={'yellow'}
        width={'200px'}
        height={'200px'}
        rounder={true}
      />
    </div>
  );
}

export default App;
