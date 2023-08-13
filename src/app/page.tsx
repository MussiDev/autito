import TravelCard from "../components/Travels/TravelCard";
import { Viaje } from "../../entities/Travels/Viaje";
import { Viajes } from "@/src/models/Viajes";
import { connectionDB } from "@/src/utils/mongoose";

const loadTravels = async () => {
    connectionDB();
    const travels = await Viajes.find();
    return travels;
};

export default async function Home() {
    const travels: Viaje[] = await loadTravels();
    const plainTravels = travels.map((travel) => ({
        id: travel.id,
        destino: travel.destino,
        ubicacion: travel.ubicacion,
    }));
    return (
        <article className="grid lg:grid-cols-[repeat(3,_minmax(15rem,_1fr))] md:grid-cols-2 sm:grid-cols-1 m-auto max-w-screen-lg gap-2">
            {plainTravels.map((travel: Viaje) => (
                <TravelCard key={travel.id} travel={travel} />
            ))}
        </article>
    );
}
