import express from "express";
import DataBaseTarefas from "./config/dbConnect.js";
import routes from "./routes/index.js";
//import swaggerUi from "swagger-ui-express";
import cors from 'cors';



const conexao = await DataBaseTarefas();
//const swaggerDocument=process.env.SWAGGER_FILE || "./swagger.json";
debugger;

conexao.on("Error",(erro)=>{
  console.error("Erro de conexao",erro);
});
conexao.once("open",()=>{
  console.log("Conectado")
})


const app = express();
app.use(cors());
app.options('*', cors())
routes(app);


///app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
export default app;
