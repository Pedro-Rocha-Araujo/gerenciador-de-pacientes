import ModelPaciente from "../models/Paciente.js"

export async function getPacientes(request, response) {
  try {
    const query = await ModelPaciente.find({})
    response.json(query)
  } catch {
    response.json({"Erro": "Erro ao requisitar os usuários!"})
  }
}

export async function postPaciente(request, response) {
  try {
    const query = await ModelPaciente.insertOne({
      nome: request.body.nome,
      idade: request.body.idade,
      telefone: request.body.telefone
    })
    response.json(query)
  } catch {
    response.json({"Erro": "Erro ao cadastrar paciente!"})
  }

}

export async function putPaciente(request, response) {
  try {
    const query = await ModelPaciente.findByIdAndUpdate({_id: request.params.id}, {
      nome: request.body.nome,
      idade: request.body.idade,
      telefone: request.params.telefone
    })
    response.json({"Sucesso": `Usuário ${request.body.nome} atualizado com sucesso!`})
  } catch {
    response.json({"Erro": "Erro ao atualizar usuário!"})
  }
}

export async function deletePaciente(request, response) {
  try {
    const query = await ModelPaciente.findByIdAndDelete(request.params.id)
    response.json({"Sucesso": `Paciente deletado com suceso!`})
  } catch {
    response.json({"Erro": "Não foi possível deletar o paciente em questão!"})
  }
}