"use client";

import Button from "@/src/common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Travel } from "@/entities/Travels/Travel";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface TravelCardProps {
    travel: Travel;
}

export default function TravelCard(props: TravelCardProps) {
    const { travel } = props;

    const router = useRouter();

    const handleDelete = async () => {
        try {
            const response = await fetch(`api/travels?id=${travel._id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                router.refresh();
            } else {
                console.error("Error travel not deleted");
            }
        } catch (error) {
            console.error("Error travel not deleted:", error);
        }
    };

    const starsOfUser = [1, 2, 3, 4, 5];
    return (
        <section className="border-2 border-secondary p-4 flex flex-col justify-between max-w-max mt-2 gap-4 rounded-md text-white items-center h-80">
            <h1 className="font-bold text-xl mb-2">
                {travel.ubication} - {travel.destiny}
            </h1>

            <p className="text-fourth"></p>
            <p>
                Lugares libres: <span className="text-secondary">{travel.places}</span>
            </p>
            <div className="flex gap-2 w-full items-center">
                <div className="w-8 h-8 relative cursor-pointer">
                    <Image
                        src="/img/test2.jpg"
                        alt="user"
                        fill={true}
                        loading="lazy"
                        className="rounded-full object-cover object-top"
                        quality={80}
                        sizes="(min-width: 60em) 24vw,
                                (min-width: 28em) 45vw,
                                100vw"
                    />
                </div>
                <p>Leo Messi</p>
                {starsOfUser.map((star, key: number) => (
                    <FontAwesomeIcon key={key} icon={faStar} className="text-sm text-secondary" />
                ))}
                <p>(87)</p>
            </div>
            <div className="flex flex-row justify-evenly w-full">
                <Button data={{ text: "Reservar Asiento", className: "bg-secondary" }} />
                <Button data={{ text: "Borrar" }} events={{ handleClick: handleDelete }} />
                <Link href={`/travels/${travel._id}`} passHref>
                    Editar
                </Link>
            </div>
        </section>
    );
}
