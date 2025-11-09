import { Router } from "express";
import tareaRouter from "./tarea.routes.js";

const indexRoutes = Router();

indexRoutes.use('/tareas', tareaRouter);

export default indexRoutes;
