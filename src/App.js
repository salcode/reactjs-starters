import './App.css';
import { useState } from 'react';

function App() {
  const [go, setGo] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactJS Starter</h1>
      </header>
      <footer className="App-footer">
        <p>Starter created by <a href="https://github.com/salcode">salcode</a></p>
      </footer>
    </div>
  );
}

export default App;
