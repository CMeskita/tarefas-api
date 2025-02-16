import express from "express";
import CodigoController from "../controllers/codigosController.js";

const routes = express.Router();

/**
 * @swagger
 * /codigos:
 *   get:
 *     summary: Retrieve a list of codes
 *     description: Retrieve a list of codes from the database. Can be used to get all available codes.
 *     responses:
 *       200:
 *         description: A list of codes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The code ID.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The code name.
 *                     example: Example Code
 */
routes.get("/codigos",CodigoController.listarcodigos);


/**
 * @swagger
 * /codigos/tenant:
 *   get:
 *     summary: Retrieve codes by tenant
 *     description: Retrieve a list of codes filtered by tenant.
 *     responses:
 *       200:
 *         description: A list of codes filtered by tenant.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The code ID.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The code name.
 *                     example: Example Code
 */
routes.get("/codigos/tenant",CodigoController.codigoporTenant);


/**
 * @swagger
 * /codigos/{id}:
 *   get:
 *     summary: Retrieve a code by ID
 *     description: Retrieve a single code by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The code ID
 *     responses:
 *       200:
 *         description: A single code.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The code ID.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The code name.
 *                   example: Example Code
 */
routes.get("/codigos/:id",CodigoController.listarCodigoId);

/**
 * @swagger
 * /codigos:
 *   post:
 *     summary: Create a new code
 *     description: Create a new code and store it in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The code name.
 *                 example: Example Code
 *     responses:
 *       201:
 *         description: Code created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The code ID.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The code name.
 *                   example: Example Code
 */
routes.post("/codigos",CodigoController.cadastrarCodigo);

/**
 * @swagger
 * /codigos/{id}:
 *   put:
 *     summary: Update a code by ID
 *     description: Update a single code by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The code ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The code name.
 *                 example: Updated Code
 *     responses:
 *       200:
 *         description: Code updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The code ID.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The code name.
 *                   example: Updated Code
 */
routes.put("/codigos/:id",CodigoController.alterarCodigo);


export default routes;