import { Schema, model, models } from "mongoose";

const ViajeSchema = new Schema({
    destino: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    ubicacion: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    },{
        timestamps: true
    })

export const Viajes = models.Viaje || model('Viaje', ViajeSchema);