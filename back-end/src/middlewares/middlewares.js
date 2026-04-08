import ModelPaciente from "../models/Paciente.js"

export async function checarId(request, response, next) {
  try {
    const checarId = await ModelPaciente.findById(request.params.id)
    if(!checarId) {
      return response.json({"Erro": "O ID em questão não existe!"})
    }
    next()
  } catch {
    return response.json({"Erro": "Erro ao encontrar o Id!"})
  }
}

export async function checarCampos(request, response, next) {
  try {
    let { nome, idade, telefone } = request.body
    if(!nome?.trim() || !idade || !telefone?.trim()) {
      return response.json({"Erro": "Campo(s) não preenchido(s)!"})
    }
    next()
  } catch {
    return response.json({"Erro": "Erro ao consultar os campos!"})
  }
}