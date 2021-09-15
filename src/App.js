import logo from './logo.svg';
import './App.css';
// import component from file_location
import {AllStates} from "./components/Nigeria"
import NigeriaSC from "./data/NigeriaStateCapital"

import {
  getAllCountriesFlag, 
  getAllCountriesNames
}  from 'get-all-country-info';

import AllCountry from './components/Country';

function App() {
  return (
    <div className="App">
      <AllStates data={NigeriaSC}/>
      <AllCountry 
        names={getAllCountriesNames()} 
        flag={getAllCountriesFlag()}  />
    </div>
  );
}

export default App;
