import React from 'react';
import './App.css';
import NavBar from "./components/NavBar.js";
import AddressCard from './components/AddressCard.js'
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
