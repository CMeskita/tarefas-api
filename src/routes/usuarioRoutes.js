import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const routes=express.Router();

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
routes.get("/usuarios",UsuarioController.listarUsuario);

/**
 * @swagger
 * /usuarios/busca:
 *   get:
 *     summary: Retrieve a list of users by email
 *     description: Retrieve a list of users from the database by email.
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         description: email do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
routes.get("/usuarios/busca",UsuarioController.usuarioporEmail);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Retrieve a user
 *     description: Retrieve a user from the database by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
routes.get("/usuarios/:id",UsuarioController.listarUsuarioId);

/** 
    * @swagger
    * /usuarios:
    *   post:
    *     summary: Create a new user
    *     description: Create a new user in the database.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Usuario'
    *     responses:
    *       201:
    *         description: User created
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Usuario'
    */
routes.post("/usuarios",UsuarioController.cadastrarUsuario);

/**
 * @swagger
 * /usuarios/shared:
 *   post:
 *     summary: Create a new shared user
 *     description: Create a new shared user in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Shared user created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
routes.post("/usuarios/shared",UsuarioController.cadastrarUsuarioCompartilhado);

/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Login
 *     description: Login in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
routes.post("/usuarios/login",UsuarioController.loginUsuario);

/**
 * @swagger
 * /usuarios/recuperasenha:
 *   post:
 *     summary: Recover password
 *     description: Recover password in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Password recovered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
routes.post("/usuarios/recuperasenha",UsuarioController.recuperaSenhaUsuario);

/**
 * @swagger
 * /usuarios/resetesenha:
 *   post:
 *     summary: Reset password
 *     description: Reset password in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *    
 *     responses:
 *       200:
 *         description: Password reset
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
routes.post("/usuarios/resetesenha",UsuarioController.reseteSenhaUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Delete a user
 *     description: Delete a user in the database by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id do usuário
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted
 */
routes.put("/usuarios/:id",UsuarioController.alterarUsuario);

export default routes;