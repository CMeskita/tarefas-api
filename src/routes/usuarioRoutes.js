import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const routes=express.Router();

routes.get("/usuarios",UsuarioController.listarUsuario);
routes.get("/usuarios/busca",UsuarioController.usuarioporEmail);
routes.get("/usuarios/:id",UsuarioController.listarUsuarioId);
routes.post("/usuarios",UsuarioController.cadastrarUsuario);
routes.post("/usuarios/compartilhado",UsuarioController.cadastrarUsuarioCompartilhado);
routes.post("/usuarios/login",UsuarioController.loginUsuario);
routes.put("/usuarios/:id",UsuarioController.alterarUsuario);

export default routes;