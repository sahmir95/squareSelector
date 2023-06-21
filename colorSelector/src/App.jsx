import { useState } from 'react';
import Selector from './components/Selector';
import Square from './components/Square';

function App() {
  const [color, setColor] = useState('');

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <div>
      <Selector value={color} onChange={handleChange} />
      <Square color={color} />
    </div>
  );
}

export default App;