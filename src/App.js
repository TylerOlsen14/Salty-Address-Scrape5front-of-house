import React from 'react';
import './App.css';
// import NavBar from "./components/NavBar";
// import AddressCard from './components/AddressCard'
import NavBar from "src/components/NavBar";
import AddressCard from 'src/components/AddressCard'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />

      <AddressCard />

    </div>
  );
}

export default App;
