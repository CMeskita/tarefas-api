import express from "express";
import TenantController from "../controllers/tenantController.js";



const routes=express.Router();

routes.get("/tenants",TenantController.listarTenant);
routes.get("/tenants/tenant",TenantController.tenantporDescricao);
routes.post("/tenants",TenantController.cadastraTenants);
export default routes;