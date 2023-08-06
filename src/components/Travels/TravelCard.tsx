"use client";

import Link from "next/link";
import React from "react";
import { Viaje } from "@/src/models/viajes/viaje";
import { useRouter } from "next/navigation";

interface TravelCardProps {
	travel: Viaje;
}

export default function TravelCard({ travel }: TravelCardProps) {
	const router = useRouter();
	const handleDelete = async () => {
		await fetch(`api/viajes/${travel._id}`, {
			method: "DELETE",
		});
		router.refresh();
	};
	return (
		<>
			<Link href={`/Viajes/${travel._id}`}>
				<div key={travel._id} className='bg-white p-10 text-black rounded-md'>
					<h3>{travel.destino}</h3>
					<p>{travel.ubicacion}</p>
				</div>
			</Link>
			<button onClick={handleDelete} type='button'>
				borrar
			</button>
		</>
	);
}
