import React from 'react';
import './App.css';
import { Conteudo } from './components/Conteudo';
import { Titulo } from './components/Titulo';


const Diverti= (props) => {
  // modifying the skills array
  const ListarDiver = props.divertidamentes.map((divertidamente) => <li>{divertidamente}</li>)
  return <ul>{ListarDiver}</ul>
}

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
        <Diverti divertidamentes={["aaa","bbb","ccc"]} />
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
