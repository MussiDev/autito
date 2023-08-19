import Travels from "@/src/components/Travels/TravelCard/Travels";
import { Viaje } from "@/entities/Travels/Viaje";
import { Viajes } from "@/src/models/Viajes";
import { connectDB } from "../utils/mongoose";

async function loadTravels() {
    await connectDB();
    const travels: Viaje[] = await Viajes.find().lean();
    if (!travels) {
        throw new Error("Failed to fetch travel");
    }
    return travels.map((travel) => ({
        ...travel,
        _id: travel._id?.toString(),
    }));
}

export default async function Home() {
    const travels: Viaje[] = await loadTravels();

    return <>{travels?.length > 0 ? <Travels travels={travels} /> : <div>No hay viajes disponibles.</div>}</>;
}
