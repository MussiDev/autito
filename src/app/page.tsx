import Travels from "@/src/components/Travels/TravelCard/Travels";
import { Viaje } from "@/entities/Travels/Viaje";
import { Viajes } from "@/src/models/Viajes";
import { connectDB } from "../utils/mongoose";

async function loadTravels() {
    await connectDB();
    const travels: Viaje[] = await Viajes.find();
    if (!travels) {
        throw new Error("Failed to fetch travel");
    }
    return travels;
}

export default async function Home() {
    const travels: Viaje[] = await loadTravels();
    const plainTravels = travels.map((travel: Viaje) => {
        return {
            _id: travel._id,
            destino: travel.destino,
            ubicacion: travel.ubicacion,
            fecha: travel.fecha,
            hora: travel.hora,
            lugares: travel.lugares,
            descripcion: travel.descripcion,
        };
    });
    return <>{travels?.length > 0 ? <Travels travels={plainTravels} /> : <div>No hay viajes disponibles.</div>}</>;
}
