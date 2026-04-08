import express from "express"
import { connect } from "mongoose"
import router from "./routes.js"
import "dotenv/config"

async function conectarBanco() {
  try {
    connect(process.env.URL_MONGO)
    console.log("Banco de dados conectado ao projeto com sucesso!")
  } catch {
    console.log("Erro ao conectar-se com o banco de dados!")
  }
}
conectarBanco()

const app = express()
app.use(express.json())
app.use(router)

app.listen(4000, ()=> console.log("Servidor rodando!"))