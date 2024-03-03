import express from "express";
import TarefaController from "../controllers/tarefaController.js";



const routes=express.Router();

routes.get("/tarefas",TarefaController.listarTarefas);
routes.get("/tarefas/:id",TarefaController.listarTarefaId);
routes.get("/tarefas/tenant",TarefaController.tarefaporTenant);
routes.post("/tarefas",TarefaController.cadastraTarefas);
//routes.put("/tarefas/:id",TarefaController.AlterarAutor);
//routes.delete("/tarefas/:id",TarefaController.DeletarAutor);
export default routes;