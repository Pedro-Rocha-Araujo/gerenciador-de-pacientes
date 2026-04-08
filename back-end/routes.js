import { Router } from "express"
import { 
  getPacientes, 
  postPaciente, 
  putPaciente,
  deletePaciente
} from "./src/controllers/pacientes.js"
import { checarId, checarCampos } from "./src/middlewares/middlewares.js"

const router = Router()

router.get("/", getPacientes)
router.post("/", checarCampos, postPaciente)
router.put("/:id", checarId, checarCampos, putPaciente)
router.delete("/:id", checarId, deletePaciente)

export default router