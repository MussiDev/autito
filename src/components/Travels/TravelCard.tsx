import React from "react";
import { Viaje } from "@/src/models/viajes/viaje";

interface TravelCardProps {
	travel: Viaje;
}

export default function TravelCard({ travel }: TravelCardProps) {
	return (
		<div key={travel._id} className='bg-white p-10 text-black rounded-md'>
			<h3>{travel.destino}</h3>
			<p>{travel.auto.modelo}</p>
		</div>
	);
}
