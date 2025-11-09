import Tarea from "../models/tarea.model.js";
import mongoose from "mongoose";

export const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        if (tareas.length === 0) {
            return res.status(404).json({ msg: 'No hay tareas registradas' });
        }
        res.status(200).json({ tareas });
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener las tareas' });
    }
};

export const getTareaById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'ID no válido' });
        }
        const tarea = await Tarea.findById(id);
        if (!tarea) return res.status(404).json({ msg: 'Tarea no encontrada' });
        res.status(200).json({ tarea });
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener la tarea' });
    }
};

export const crearTarea = async (req, res) => {
    try {
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.status(201).json({ msg: 'Tarea creada', tarea });
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear la tarea' });
    }
};

export const actualizarTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const tarea = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
        if (!tarea) return res.status(404).json({ msg: 'Tarea no encontrada' });
        res.status(200).json({ msg: 'Tarea actualizada', tarea });
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar la tarea' });
    }
};

export const eliminarTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const tarea = await Tarea.findByIdAndDelete(id);
        if (!tarea) return res.status(404).json({ msg: 'Tarea no encontrada' });
        res.status(200).json({ msg: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar la tarea' });
    }
};
