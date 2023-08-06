import { Schema, model, models } from "mongoose";

const viajeSchema = new Schema({
    destino: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    hora: {
        type: Date,
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
    auto: {
        modelo: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        color: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        patente: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    },
    },{
        timestamps: true
    })

export default models.Viajes || model('Viaje', viajeSchema)