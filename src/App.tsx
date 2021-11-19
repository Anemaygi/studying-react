import React from 'react';
import './App.css';
import { Conteudo } from './components/Conteudo';
import { Titulo } from './components/Titulo';
import { Divertidamente } from './components/Divertidamente';

const algo = "algao";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Conteudo />
        <Divertidamente nome={algo} descricao={'legal'} />

      </header>
      
    </div>
  );
}

export default App;
