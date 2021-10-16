import './App.css';

import CharacterList from './components/CharacterList';

const muppetsData = [
  {
    name: 'Fozzie Bear',
    performers: [
      {
        name: 'Frank Oz',
        startYear: 1976,
        endYear: 2000,
      },
      {
        name: 'Eric Jacobson',
        startYear: 2002,
      },
    ],
  },
  {
    name: 'Gonzo',
    performers: [
      {
        name: 'Dave Goelz',
        startYear: 1976,
      },
    ],
  },
  {
    name: "Kermit the Frog",
    performers: [
      {
        name: 'Matt Vogel',
        startYear: 2017,
      },
      {
        name: 'Steve Whitmire',
        startYear: 1990,
        endYear: 2016,
      },
      {
        name: 'Jim Henson',
        startYear: 1955,
        endYear: 1990,
      },
    ],
  },
  {
    name: 'Sam Eagle',
    performers: [
      {
        name: 'Frank Oz',
        startYear: 1976,
        endYear: 2000,
      },
      {
        name: 'Kevin Clash',
        startYear: 2002,
        endYear: 2003,
      },
      {
        name: 'Eric Jacobson',
        startYear: 2005,
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactJS Starter</h1>
      </header>
      <CharacterList
        data={muppetsData}
      />
      <footer className="App-footer">
        <p>Starter created by <a href="https://github.com/salcode">salcode</a></p>
      </footer>
    </div>
  );
}

export default App;
