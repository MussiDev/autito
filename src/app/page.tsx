import { Suspense } from "react";
import TravelCard from "../components/Travels/TravelCard";
import { Viaje } from "../../entities/Travels/Viaje";
import { Viajes } from "@/src/models/Viajes";

const loadTravels = async () => {
    try {
        const travels: Viaje[] = await Viajes.find();
        if (!travels) {
            throw new Error("Failed to fetch travel");
        }
        return travels;
    } catch (error) {
        console.log(error);
    }
};

export default async function Home() {
    const travels: any[] = []; //await JSON.parse(JSON.stringify(await loadTravels()));

    return (
        <Suspense fallback={<p>Loading travels...</p>}>
            {travels?.length > 0 ? (
                <article className="grid lg:grid-cols-[repeat(3,_minmax(15rem,_1fr))] md:grid-cols-2 sm:grid-cols-1 m-auto max-w-screen-lg gap-2">
                    {travels.map((travel: any) => (
                        <TravelCard key={travel._id} travel={travel} id={travel._id} />
                    ))}
                </article>
            ) : (
                <div>No hay viajes disponibles.</div>
            )}
        </Suspense>
    );
}
