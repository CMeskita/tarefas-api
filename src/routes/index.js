import express from "express";
import tarefas from "./tarefasRoute.js"
import usuarios from "./usuarioRoutes.js"
import tenants from "./tenantsRoute.js";
import codigos from "./codigoRoutes.js";


const routes=(app)=>{
    debugger;
  
    app.use(express.json(),tarefas,usuarios,tenants,codigos);

};
export default routes; 
