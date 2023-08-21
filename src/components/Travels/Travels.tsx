import React from "react";
import { Travel } from "@/entities/Travels/Travel";
import TravelCard from "./TravelCard/TravelCard";

export default function Travels({ travels }: { travels: Travel[] }) {
    return (
        <article className="grid lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(2,_minmax(15rem,_1fr))] sm:grid-cols-1 m-auto max-w-screen-lg gap-2">
            {travels.map((travel: Travel) => (
                <TravelCard key={travel._id} travel={travel} />
            ))}
        </article>
    );
}
