import express from "express";
import tarefas from "./tarefasRoute.js"
import usuarios from "./usuarioRoutes.js"
import tenants from "./tenantsRoute.js";
import codigos from "./codigoRoutes.js";
import swaggerUi from "swagger-ui-express";

//app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//swaggerDocument = require('./swagger.json');


//const swaggerUi = require('swagger-ui-express');

//const swaggerDocument="./swagger.json";
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');


const routes=(app)=>{
    debugger;
   // app.route("/").get((req,res)=>res.status(200).send(swaggerUi.setup(swaggerDocument)));
    //app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(express.json(),tarefas,usuarios,tenants,codigos);

};
export default routes; 
