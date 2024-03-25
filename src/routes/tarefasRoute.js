import express from "express";
import TarefaController from "../controllers/tarefaController.js";



const routes=express.Router();

routes.get("/tarefas",TarefaController.listarTarefas);
routes.get("/tarefas/shared",TarefaController.tarefaporTenantShared);
routes.get("/tarefas/busca",TarefaController.tarefaporTenant);
routes.get("/tarefas/:id",TarefaController.listarTarefaId);
routes.post("/tarefas",TarefaController.cadastraTarefas);
routes.put("/tarefas/:id",TarefaController.alterarTarefa);
//routes.delete("/tarefas/:id",TarefaController.DeletarTarefa);
export default routes;