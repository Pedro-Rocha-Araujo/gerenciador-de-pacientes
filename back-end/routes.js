import { Router } from "express"
import { 
  getPacientes, 
  postPaciente, 
  putPaciente,
  deletePaciente
} from "./src/controllers/pacientes.js"

const router = Router()

router.get("/", getPacientes)
router.post("/", postPaciente)
router.put("/:id", putPaciente)
router.delete("/:id", deletePaciente)

export default router