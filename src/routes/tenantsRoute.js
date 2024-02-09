import express from "express";
import TenantController from "../controllers/tenantController.js";



const routes=express.Router();

routes.get("/tenants",TenantController.listarTenant);
routes.get("/tenants/tenant",TenantController.tenantporDescricao);
//routes.get("/tarefas/:id",TarefaController.listarAutoresId);
routes.post("/tenants",TenantController.cadastraTenants);
//routes.put("/tarefas/:id",TarefaController.AlterarAutor);
//routes.delete("/tarefas/:id",TarefaController.DeletarAutor);
export default routes;