import { Router } from "express";
import {
    getTareas,
    getTareaById,
    crearTarea,
    actualizarTarea,
    eliminarTarea
} from "../controllers/tarea.controller.js";

const tareaRouter = Router();

tareaRouter.get('/', getTareas);
tareaRouter.get('/:id', getTareaById);
tareaRouter.post('/', crearTarea);
tareaRouter.put('/:id', actualizarTarea);
tareaRouter.delete('/:id', eliminarTarea);

export default tareaRouter;
