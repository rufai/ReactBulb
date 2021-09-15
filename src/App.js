import logo from './logo.svg';
import './App.css';
// import component from file_location
import {Boyo} from './components/Boyo/Boyo';
import Akinola from './components/Solomon';
import React from 'react';

class AppComponent extends React.Component{

}

for( let i = 0; i < 50; i++){

}

// app ( parent component )
// boyo ( child component )

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Boyo bgColor="blue"  height="67" complexion="white" gender="female" hairColor="gold" />
        <Akinola weight="70" stateOfOrigin="yenegoa" />
        <Boyo bgColor="red"  height="40"  gender="male"  />
        <Akinola weight="80" stateOfOrigin="lagos" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Valentine
        </a>
      </header>
      <Akinola />

    </div>
  );
}

export default App;
