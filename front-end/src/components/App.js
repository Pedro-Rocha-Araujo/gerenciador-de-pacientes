import React, {useState} from "react"
import Header from "./Header"
import Cadastro from "./Cadastro"
import Tabela from "./Tabela"
import './App.css';

function App() {
  const [paciente, setPaciente] = useState({
    nome: "",
    idade: "",
    telefone: ""
  })
  const [lista, setLista] = useState([])
  const [idEmEdicao, setId] = useState(null)

  function capturarMudanca(e) {
    let nameInput = e.target.name
    let conteudoDigitado = e.target.value 
    setPaciente((prevValue)=>{
      return {
        ...prevValue,
        [nameInput]: conteudoDigitado
      }
    })
  }
  function adcionarPaciente(e) {
    e.preventDefault()
    setLista((prevValue)=>{
      return [...prevValue, paciente]
    })
    setPaciente((prevValue)=>{
      return {
        nome: "",
        idade: "",
        telefone: "",
      }
    })
  }
  function deletarPaciente(id) {
    setLista((prevValue)=>{
      return prevValue.filter((_,i)=>{
        return i !== id
      })
    })
  }
  function editarPaciente(id) {
    setPaciente({
      nome: lista[id].nome,
      idade: lista[id].idade,
      telefone: lista[id].telefone
    })
    setId(id)
  }
  function salvarEdicao(e) {
    e.preventDefault()
    setLista((prevValue)=>{
      return prevValue.map((_,i)=>{
        if(i===idEmEdicao){
          return paciente
        }else{
          return _
        }
      })
    })
    setPaciente({
      nome: "",
      idade: "",
      telefone: ""
    })
    setId(null)
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Cadastro 
          onChange={capturarMudanca} 
          onId={idEmEdicao} 
          onAdd={adcionarPaciente}
          onSave={salvarEdicao} 
          nome={paciente.nome}
          idade={paciente.idade}
          telefone={paciente.telefone}
          />
        <Tabela 
          lista={lista}
          onEdit={editarPaciente}
          onDelete={deletarPaciente}
        />
      </main>
    </div>
  );
}

export default App;
