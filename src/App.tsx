import React from 'react';
import './App.css';
import { Conteudo } from './components/Conteudo';
import { Titulo } from './components/Titulo';

function App() {
  
  const divertidamentes = ([
    { nome: "algo", descricao: 'Sim' },
    { nome: "algo2", descricao: 'Sim2' },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Conteudo />
        
        {divertidamentes.map((item)=>(
          <>
          <label>{item.nome}</label>
          <p>{item.descricao}</p>
          </>
        ))}

      </header>
      
    </div>
  );
}

export default App;
