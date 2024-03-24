import express from "express";
import TarefaController from "../controllers/tarefaController.js";



const routes=express.Router();

routes.get("/tarefas",TarefaController.listarTarefas);
routes.get("/tarefas/tenant",TarefaController.tarefaporTenant);
//routes.get("/tarefas/:id",TarefaController.listarAutoresId);
routes.post("/tarefas",TarefaController.cadastraTarefas);
//routes.put("/tarefas/:id",TarefaController.AlterarAutor);
//routes.delete("/tarefas/:id",TarefaController.DeletarAutor);
export default routes;