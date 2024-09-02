// src/App.js

import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card
        fullName="Alan Cordoba"
        profession="Técnico informático"
        image="https://avatars.githubusercontent.com/u/105000699?v=4&size=64"
      />
    </div>
  );
}

export default App;
