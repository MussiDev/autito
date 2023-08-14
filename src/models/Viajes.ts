import { Schema, model, models } from "mongoose";

const ViajeSchema = new Schema(
    {
    destino: {
        type: String,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    lugares: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    }
    },{
        timestamps: true
    }
)

export const Viajes = models.Viaje || model('Viaje', ViajeSchema);