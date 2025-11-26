import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    descripcion: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        enum: ['pendiente', 'en progreso', 'completada'],
        default: 'pendiente'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaLimite: {
        type: Date,
        required: false
    }
});

const Tarea = mongoose.model('Tarea', tareaSchema);
export default Tarea;
