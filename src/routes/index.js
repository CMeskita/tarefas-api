import express from "express";
import tarefas from "./tarefasRoute.js"
import usuarios from "./usuarioRoutes.js"
//import swaggerUi from "swagger-ui-express";

//app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const swaggerDocument="./swagger.json";
const routes=(app)=>{
    debugger;
    app.route("/").get((req,res)=>res.status(200).send("Chamando o index da Rota"));
    //app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(express.json(),tarefas,usuarios);

};
export default routes; 