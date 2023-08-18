"use client";

import React from "react";
import TravelCard from "./TravelCard";
import { Viaje } from "@/entities/Travels/Viaje";

export default function Travels({ travels }: { travels: Viaje[] }) {
    return (
        <article className="grid lg:grid-cols-[repeat(3,_minmax(15rem,_1fr))] md:grid-cols-2 sm:grid-cols-1 m-auto max-w-screen-lg gap-2">
            {travels.map((travel: Viaje) => (
                <TravelCard key={travel._id} travel={travel} id={travel._id} />
            ))}
        </article>
    );
}
