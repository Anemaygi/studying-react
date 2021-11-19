import React from 'react';
import './App.css';
import { Conteudo } from './components/Conteudo';
import { Titulo } from './components/Titulo';
import { Divertidamente } from './components/Divertidamente/Divertidamente';
import { itens } from './components/Itens';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Conteudo />
        
        {itens.map((item,index)=>(
          <Divertidamente nome={item.nome} descricao={item.descricao} imagem = {item.imagem} index={index} color={item.cor}/>
        ))}


      </header>
      
    </div>
  );
}

export default App;
