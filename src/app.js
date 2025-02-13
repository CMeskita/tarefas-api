import express from "express";
import DataBaseTarefas from "./config/dbConnect.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
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



const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API schedule - Code',
    version: '1.0.0',
    description:
      'Está é uma  REST API Javascript.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Mesquita',
      url: 'recuperasrch.code@gmail.com',
    },
  },
  servers: [
    {
      url: 'https://srchpassword.vercel.app/',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/routes/*.js'],
  
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default app;
