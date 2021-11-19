import React from 'react';
import './App.css';
import { Conteudo } from './components/Conteudo';
import { Titulo } from './components/Titulo';
import { Divertidamente } from './components/Divertidamente';
import { itens } from './components/Itens';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Conteudo />
        
        {itens.map((item)=>(
          <Divertidamente nome={item.nome} descricao={item.descricao} imagem = {item.imagem} />
        ))}


      </header>
      
    </div>
  );
}

export default App;
