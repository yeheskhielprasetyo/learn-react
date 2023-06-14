import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1)
  function click() {
    console.log("number :", number)
    setNumber(number + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={click}>Click</button>
        {number}
      </header>
    </div>
  );
}

export default App;
