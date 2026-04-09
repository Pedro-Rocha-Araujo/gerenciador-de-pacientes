import { useState, useEffect } from "react"
import Header from "./Header"
import Cadastro from "./Cadastro"
import Tabela from "./Tabela"
import axios from "axios"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"

function App() {
  const [paciente, setPaciente] = useState({
    nome: "",
    idade: "",
    telefone: ""
  })
  const [lista, setLista] = useState([])
  const [idEmEdicao, setId] = useState(null)

  useEffect(()=> {
    async function getPacientes() {
      try {
        const response = await axios.get("http://localhost:4000/")
        setLista(response.data)
      } catch {
        console.log("Erro ao requerir os pacientes")
      }
    }
    getPacientes()
  }, [])



  function capturarMudanca(e) {
    const { name, value } = e.target
    setPaciente((prevValue)=>{
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  async function adicionarPaciente(e) {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:4000/", {
        nome: paciente.nome,
        idade: paciente.idade,
        telefone: paciente.telefone
      })
      toast.success("Usuário cadastrado!")
    } catch {
      toast.error("Erro ao cadastrar paciente!")
    }
    setPaciente({
        nome: "",
        idade: "",
        telefone: ""
    })
  }

  async function deletarPaciente(id) {
    try {
      const response = axios.delete(`http://localhost:4000/${id}`)
      toast.success("Paciente deletado com sucesso!")
    } catch {
      toast.error("Erro ao deletar o paciente!")
    }
  }

  function editarPaciente(id) {
    try {
      setId(id)
    } catch {
      toast.error("Erro ao buscat id")
    }
  }
  function salvarEdicao(e) {
    try {
      toast.success("Usuário editado com sucesso!")
    } catch {
      toast.error("Erro ao editar o paciente!")
    }
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Cadastro 
          onChange={capturarMudanca} 
          onId={idEmEdicao} 
          onAdd={adicionarPaciente}
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
      <ToastContainer />
    </div>
  );
}

export default App;
