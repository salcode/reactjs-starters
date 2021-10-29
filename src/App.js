import './App.css';

import RemoteApiBlogPosts from './components/RemoteApiBlogPosts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactJS Starter</h1>
      </header>
      <RemoteApiBlogPosts />
      <footer className="App-footer">
        <p>Starter created by <a href="https://github.com/salcode">salcode</a></p>
      </footer>
    </div>
  );
}

export default App;
