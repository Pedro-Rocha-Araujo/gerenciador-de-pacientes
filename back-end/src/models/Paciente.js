import { Schema, model } from "mongoose"

const SchemaPaciente = new Schema({
  nome: String,
  idade: Number,
  telefone: String
})

const ModelPaciente = model("pacientes", SchemaPaciente)

export default ModelPaciente