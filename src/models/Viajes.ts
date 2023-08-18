import mongoose from "mongoose";

const ViajeSchema = new mongoose.Schema(
    {
        _id: {
            type: Object,
            required: true,
        },
        destino: {
            type: String,
            required: true,
        },
        ubicacion: {
            type: String,
            required: true,
        },
        fecha: {
            type: Date,
            required: true,
        },
        hora: {
            type: String,
            required: true,
        },
        lugares: {
            type: Number,
            required: true,
        },
        descripcion: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Viajes = mongoose.models.Viaje || mongoose.model("Viaje", ViajeSchema);
