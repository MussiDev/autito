import { Travel } from "@/entities/Travels/Travel";
import Travels from "@/src/components/Travels/TravelCard/Travels";
import { TravelsModel } from "@/src/models/Travels";
import { connectDB } from "../utils/mongoose";

async function loadTravels() {
    await connectDB();
    const travels: Travel[] = await TravelsModel.find().lean();
    if (!travels) {
        throw new Error("Failed to fetch travel");
    }
    return travels.map((travel) => ({
        ...travel,
        _id: travel._id?.toString(),
    }));
}

export default async function Home() {
    const travels: Travel[] = await loadTravels();
    return <>{travels?.length > 0 ? <Travels travels={travels} /> : <div>No hay viajes disponibles.</div>}</>;
}
