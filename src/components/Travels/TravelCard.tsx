"use client";

import Button from "@/src/common/Button/Button";
import Link from "next/link";
import React from "react";
import { Viaje } from "@/entities/Travels/Viaje";
import { useRouter } from "next/navigation";

interface TravelCardProps {
	travel: Viaje;
}

export default function TravelCard({ travel }: TravelCardProps) {
	const router = useRouter();

	const handleDelete = async () => {
		try {
			const response = await fetch(`api/viajes/${travel.id}`, {
				method: "DELETE",
			});

			if (response.ok) {
				router.refresh();
			} else {
				console.error("Error al eliminar el viaje");
			}
		} catch (error) {
			console.error("Error al eliminar el viaje:", error);
		}
	};
	return (
		<section className='flex flex-col gap-2'>
			<Link href={`/Viajes/${travel.id}`} legacyBehavior>
				<a className='bg-white p-10 text-black rounded-md'>
					<h3>{travel.destino}</h3>
					<p>{travel.ubicacion}</p>
				</a>
			</Link>
			<Button
				data={{ text: "Borrar" }}
				events={{ handleClick: handleDelete }}
			/>
		</section>
	);
}
