import { Suspense } from "react";
import TravelCard from "../components/Travels/TravelCard";
import { Viaje } from "../../entities/Travels/Viaje";
import { Viajes } from "@/src/models/Viajes";

const loadTravels = async () => {
    const travels: Viaje[] = await Viajes.find();
    return travels;
};

export default async function Home() {
    const travels = await JSON.parse(JSON.stringify(await loadTravels()));

    return (
        <article className="grid lg:grid-cols-[repeat(3,_minmax(15rem,_1fr))] md:grid-cols-2 sm:grid-cols-1 m-auto max-w-screen-lg gap-2">
            <Suspense fallback={<p>Loading travels...</p>}>
                {travels?.map((travel: any) => (
                    <TravelCard key={travel._id} travel={travel} id={travel._id} />
                ))}
            </Suspense>
        </article>
    );
}
