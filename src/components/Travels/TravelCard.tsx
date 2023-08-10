"use client";

import Button from "@/src/common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Viaje } from "@/entities/Travels/Viaje";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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

	const starsOfUser = [1, 2, 3, 4, 5]
	return (
		<Link href={`/Viajes/${travel.id}`} legacyBehavior>
			<section className="border-2 border-secondary p-4 flex flex-col justify-between max-w-max mt-2 gap-4 rounded-md text-white items-center">
				<h1 className="font-bold text-xl mb-2">
					{travel.ubicacion} - {travel.destino}
				</h1>
				<p className="text-fourth">Lunes 10/08/2023 23:00hs</p>
				<p>Lugares libres: <span className="text-secondary">2</span></p>
				<div className="flex gap-3 w-full items-center">
					<div className='w-8 h-8 relative cursor-pointer'>
						<Image src='/img/test2.jpg' alt='user' fill={true} loading='lazy' className='rounded-full object-cover object-top' quality={80} sizes='100vw' />
					</div>
					<p>Leo Messi</p>
					{starsOfUser.map((key: number) => (
						<FontAwesomeIcon key={key} icon={faStar} className="text-sm text-secondary"/>
					)
					)}
					
				</div>
				<div className="flex flex-row justify-evenly w-full">
					<Button
						data={{ text: "Reservar Asiento", className:'bg-secondary' }}
						events={{ handleClick: handleDelete }}
					/>
					<Button
						data={{ text: "Borrar"}}
						events={{ handleClick: handleDelete }}
					/>
				</div>
			</section>
		</Link>
	);
}
