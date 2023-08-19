import mongoose from "mongoose";

const ViajeSchema = new mongoose.Schema(
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
            trim: true,
            maxlength: [200, "title cannot be grater than 200 characters"],
        },
    },
    {
        timestamps: true,
        ersionKey: false,
    }
);

export const Viajes = mongoose.models.Viaje || mongoose.model("Viaje", ViajeSchema);
