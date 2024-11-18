import express from "express";
import CodigoController from "../controllers/codigosController.js";

const routes=express.Router();

routes.get("/codigos",CodigoController.listarcodigos);
routes.get("/codigos/:id",CodigoController.listarCodigoId);
routes.post("/codigos",CodigoController.cadastrarCodigo);


export default routes;